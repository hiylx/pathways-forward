export default function About() {
  return (
    <article className="container-narrow py-16">
      <span className="heraldic-rule mb-4" aria-hidden="true" />
      <h1 className="font-display text-4xl md:text-5xl mb-6">About ReviveUK EdTech CIC</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        A Community Interest Company advancing education and relieving poverty in
        Lancaster through inclusive STEAM learning and clear employability pathways.
      </p>

      <section className="mb-12">
        <h2 className="font-display text-2xl mb-3">Our purpose</h2>
        <p className="mb-4">
          ReviveUK EdTech CIC exists to advance education and relieve poverty by
          delivering accessible STEAM education and skills development to disadvantaged
          individuals. We aim to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Improve access to high-quality STEAM learning.</li>
          <li>Increase progression into education, training and skills-shortage sectors.</li>
          <li>Improve employability and entrepreneurship skills.</li>
          <li>Increase income stability for our beneficiaries.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="font-display text-2xl mb-3">Community benefit</h2>
        <p className="mb-4">
          Beneficiaries complete a structured but proportionate assessment through our
          digital platform to identify educational and employability needs. We measure
          impact through:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Participation numbers.</li>
          <li>Skills development progress.</li>
          <li>Qualifications achieved.</li>
          <li>Progression into training or employment.</li>
          <li>Income improvement, where relevant.</li>
        </ul>
        <p>
          Where additional needs are identified, beneficiaries are signposted to
          appropriate charities, community organisations or statutory services. Any
          surplus is reinvested into delivering and expanding community-focused activities.
        </p>
      </section>

      <section className="mb-12 bg-secondary p-6 md:p-8 border-l-4 border-accent rounded-md">
        <h2 className="font-display text-2xl mb-3">UN Sustainable Development Goals</h2>
        <p className="mb-4">Our activities are consistent with:</p>
        <ul className="space-y-3">
          <li>
            <strong className="font-semibold">SDG 4 — Quality Education:</strong>{" "}
            ensuring inclusive and equitable quality education and promoting lifelong
            learning opportunities.
          </li>
          <li>
            <strong className="font-semibold">SDG 8 — Decent Work and Economic Growth:</strong>{" "}
            promoting sustained, inclusive and sustainable economic growth, full and
            productive employment, and decent work for all.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="font-display text-2xl mb-3">Lancaster and beyond</h2>
        <p>
          Lancaster welcomes international students and skilled migrants from around the
          world. We support them to access appropriate training, understand the UK
          labour market, and secure suitable employment or self-employment. By enabling
          people to use their skills effectively we strengthen the local economy, promote
          inclusion, and contribute to the cultural and social life of the city.
        </p>
      </section>
    </article>
  );
}
