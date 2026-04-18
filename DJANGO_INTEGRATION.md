# Deploying the ReviveUK EdTech frontend with Django + Passenger

This project is a **static React (Vite) single-page app**. There is no Node server in production — you build it once and let Django/Passenger serve the resulting files. This document explains exactly how to drop the build into your existing folder structure:

```
LICENSE  README.md  app.py  passenger_wsgi.py  public/  source.sh  stderr.log  tmp/
```

---

## 1. Build the frontend

From the project root:

```bash
npm install
npm run build
```

This produces a `dist/` folder containing:

```
dist/
  index.html
  assets/
    *.js
    *.css
    *.jpg / *.svg / fonts
```

Everything in `dist/` is fully static — no Node runtime required.

---

## 2. Copy the build into your Django project

Copy the contents of `dist/` into your Django project's `public/` folder (Passenger serves files from `public/` by convention):

```bash
rm -rf /path/to/django-project/public/assets
cp -R dist/* /path/to/django-project/public/
```

Resulting layout:

```
public/
  index.html        ← React entry point
  assets/           ← hashed JS, CSS, images, fonts
  favicon.ico
```

You can automate this in `source.sh`:

```bash
#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"
( cd frontend && npm ci && npm run build )
rm -rf public/assets
cp -R frontend/dist/* public/
```

(Where `frontend/` is a checkout of this Lovable repo.)

---

## 3. Wire Django to serve `index.html` for app routes

The site uses **client-side routing** (`/`, `/about`, `/programmes`, `/get-support`, `/contact`). Passenger will serve `public/index.html` for `/`, but unknown routes need a **catch-all view** that returns the same `index.html` so React Router can take over.

### `app.py` (or your Django `urls.py`)

```python
# urls.py
from django.urls import path, re_path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    # Your API endpoints go here, e.g.:
    # path("api/enquiries/", EnquiryCreateView.as_view()),
    # path("api/assessment/", AssessmentView.as_view()),

    # Catch-all: serve the SPA shell for any non-API route
    re_path(r"^(?!api/).*$", TemplateView.as_view(template_name="index.html")),
]
```

In `settings.py`, point Django at `public/` for templates and static files:

```python
TEMPLATES = [{
    "BACKEND": "django.template.backends.django.DjangoTemplates",
    "DIRS": [BASE_DIR / "public"],
    ...
}]

STATICFILES_DIRS = [BASE_DIR / "public"]
STATIC_URL = "/"
```

### `passenger_wsgi.py`

No changes needed — keep your existing WSGI entrypoint. Passenger will serve files in `public/` directly and fall through to Django for anything else.

---

## 4. Connecting the contact form (and later the assessment) to Django

The `Contact` page currently calls `setSubmitted(true)` on a successful client-side validation. To wire it to Django:

1. Add an endpoint, e.g. `POST /api/enquiries/` that accepts `{ name, email, organisation, enquiryType, message }`.
2. In `src/pages/Contact.tsx`, replace the `// TODO` line with:

   ```ts
   await fetch("/api/enquiries/", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
       "X-CSRFToken": getCookie("csrftoken"), // if using Django's CSRF
     },
     body: JSON.stringify(Object.fromEntries(data.entries())),
   });
   ```

3. Rebuild (`npm run build`) and re-copy `dist/` → `public/`.

The same pattern will work for the assessment flow once it's built: a Django endpoint per step, or a single `/api/assessment/` POST.

---

## 5. Replacing the logo

The logo lives at **`src/assets/logo.jpg`**. To swap in a new one:

1. Replace that file (keep the same filename, or update the import in `src/components/SiteHeader.tsx`).
2. Rebuild.

For a transparent SVG logo you can also drop it into `public/` and reference it directly, but keeping it in `src/assets/` gives you Vite's automatic hashing and cache-busting.

---

## 6. Folder structure summary

```
your-django-project/
├── LICENSE
├── README.md
├── app.py
├── passenger_wsgi.py
├── public/                ← drop dist/* here after each build
│   ├── index.html
│   ├── assets/
│   └── favicon.ico
├── source.sh              ← optional: automated build + copy
├── stderr.log
└── tmp/
```

That's the whole integration. The frontend stays a pure static bundle; Django owns the API and the SPA fallback.
