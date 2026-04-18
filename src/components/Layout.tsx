import { Outlet } from "react-router-dom";
import { AccessibilityToolbar } from "@/a11y/AccessibilityToolbar";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main" className="skip-link">Skip to main content</a>
      <AccessibilityToolbar />
      <SiteHeader />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
