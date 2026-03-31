import Image from "next/image";
import PortfolioPlayground from "./components/portfolio-playground";

const stats = [
  { label: "Based in", value: "Naples, Italy" },
  { label: "Focus", value: "SaaS platforms, frontend systems, product execution" },
  { label: "Working with", value: "Next.js, TypeScript, Prisma, React Native" },
];

const featuredProjects = [
  {
    name: "Trenova",
    url: "https://trenova.it",
    status: "Founder-led SaaS",
    description:
      "A multi-tenant training platform built around scheduling, workout lifecycle management, and a modular dashboard experience.",
    embedUrl: "https://trenova.it",
    highlights: [
      "Designed the full product and technical roadmap",
      "Structured the app around scalable domain modeling and role separation",
      "Built real-time architecture for activity-driven dashboard updates",
    ],
  },
  {
    name: "Spin FM",
    url: "https://spin-fm.vercel.app/",
    status: "Creative web experience",
    description:
      "A visually driven digital product that shows my interest in crafting interfaces with atmosphere, rhythm, and strong frontend character.",
    embedUrl: "https://spin-fm.vercel.app/",
    highlights: [
      "Explores more expressive UI direction and storytelling on the web",
      "Balances polished visual identity with modern frontend implementation",
      "Represents the experimental side of my product and interaction work",
    ],
  },
];

const experience = [
  {
    role: "Founder & Lead Full Stack Engineer",
    company: "Trenova",
    period: "2024 — Present",
    summary:
      "Owning product direction, architecture, implementation, and technical strategy for a fitness SaaS under active development.",
    points: [
      "Designed a scalable multi-tenant architecture with Next.js, TypeScript, Prisma ORM, and MongoDB.",
      "Defined booking flows, workout lifecycle logic, and role-based access between trainers and clients.",
      "Built a modular dashboard system and prepared the platform for mobile integration and ongoing expansion.",
    ],
  },
  {
    role: "Front End Engineer",
    company: "Blue Reply · Client: Luxottica",
    period: "03/2022 — Present",
    summary:
      "Working in an enterprise environment with strong ownership across maintenance, business evolution, incident resolution, and stakeholder communication.",
    points: [
      "Managed critical production flows in high-traffic environments and supported key seasonal operations.",
      "Translated business requirements into technical decisions and feasibility analysis for larger refactoring work.",
      "Mentored teammates and collaborated directly with global brands including Ray-Ban and LensCrafters.",
    ],
  },
  {
    role: "Apple Developer Academy",
    company: "Universita degli Studi di Napoli Federico II",
    period: "Academic experience",
    summary:
      "A formative experience focused on product thinking, app development, teamwork, and building digital solutions in a multidisciplinary environment.",
    points: [
      "Worked on app-oriented product development with a strong focus on user experience and problem solving.",
      "Strengthened collaboration, presentation, and team-based delivery skills in an international learning context.",
      "Deepened the connection between technology, design thinking, and practical product execution.",
    ],
  },
];

const education = [
  {
    title: "Apple Developer Academy",
    school: "Universita degli Studi di Napoli Federico II",
    period: "Advanced training program",
    points: [
      "Training centered on app development, UX sensitivity, teamwork, and product mindset.",
      "Hands-on learning through projects, iteration, and multidisciplinary collaboration.",
      "A key step in shaping my technical path and approach to building digital products.",
    ],
  },
];

const capabilities = [
  {
    title: "Frontend systems",
    kicker: "Structure",
    points: ["Scalable component architecture", "Design-system thinking", "Maintainable UI patterns"],
  },
  {
    title: "Product execution",
    kicker: "Delivery",
    points: ["From concept to shipped feature", "Fast iteration with ownership", "Business-aware technical choices"],
  },
  {
    title: "SaaS architecture",
    kicker: "Platform",
    points: ["Multi-tenant logic", "Role and permission modeling", "Scalable product foundations"],
  },
  {
    title: "Team impact",
    kicker: "Ownership",
    points: ["Stakeholder communication", "Mentoring and onboarding", "Decision-making under pressure"],
  },
];

const technologies = [
  { name: "React", short: "R", tone: "cyan" },
  { name: "Next.js", short: "N", tone: "silver" },
  { name: "React Native", short: "RN", tone: "blue" },
  { name: "JavaScript", short: "JS", tone: "yellow" },
  { name: "TypeScript", short: "TS", tone: "azure" },
  { name: "Prisma", short: "P", tone: "slate" },
  { name: "Node.js", short: "N", tone: "green" },
  { name: "Express", short: "EX", tone: "gray" },
  { name: "MongoDB", short: "M", tone: "emerald" },
  { name: "Supabase", short: "S", tone: "mint" },
  { name: "WebSocket", short: "WS", tone: "violet" },
  { name: "GitHub", short: "GH", tone: "graphite" },
  { name: "SaaS", short: "∞", tone: "gold" },
];

const books = [
  {
    title: "Clean Architecture",
    author: "Robert C. Martin",
    year: "2017",
    topic: "Software architecture",
    category: "Architecture",
    coverUrl: "https://covers.openlibrary.org/b/isbn/9780134494166-L.jpg?default=false",
    href: "https://openlibrary.org/books/OL26834284M/Clean_Architecture",
    note: "Useful for thinking clearly about boundaries, responsibilities, and maintainable system design.",
  },
  {
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    year: "2017",
    topic: "Distributed systems",
    category: "Systems",
    coverUrl: "https://covers.openlibrary.org/b/isbn/9781491903117-L.jpg?default=false",
    href: "https://openlibrary.org/books/OL36735720M/Designing_Data-Intensive_Applications",
    note: "A strong reference for systems, data flow, scalability, and the trade-offs behind modern software platforms.",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt & David Thomas",
    year: "2019",
    topic: "Engineering mindset",
    category: "Mindset",
    coverUrl: "https://covers.openlibrary.org/b/isbn/9780135957059-L.jpg?default=false",
    href: "https://openlibrary.org/books/OL35557432M/Pragmatic_Programmer",
    note: "Still one of the best books for sharpening engineering habits, decision-making, and professional mindset.",
  },
  {
    title: "Refactoring",
    author: "Martin Fowler",
    year: "2018",
    topic: "Code quality",
    category: "Code quality",
    coverUrl: "https://covers.openlibrary.org/b/isbn/9780134757599-L.jpg?default=false",
    href: "https://openlibrary.org/books/OL26629721M/Refactoring",
    note: "Great for improving code incrementally without losing delivery speed or system stability.",
  },
];

const easternBooks = [
  {
    title: "Tao Te Ching",
    author: "Lao Tzu",
    year: "2023",
    tradition: "Taoism",
    topic: "Balance and non-forcing",
    coverUrl: "https://covers.openlibrary.org/b/olid/OL37044633M-L.jpg?default=false",
    href: "https://openlibrary.org/books/OL37044633M/Tao_Te_Ching",
    note: "A foundational text for simplicity, balance, and non-forcing. It resonates with calm decision-making and clarity.",
  },
  {
    title: "Zhuang-zi",
    author: "Zhuangzi",
    year: "2003",
    tradition: "Taoism",
    topic: "Paradox and freedom",
    coverUrl: "https://covers.openlibrary.org/b/olid/OL17076772M-L.jpg?default=false",
    href: "https://openlibrary.org/books/OL17076772M/Zhuangzi",
    note: "A more fluid and poetic perspective on freedom, perspective, paradox, and the limits of rigid thinking.",
  },
  {
    title: "Lo Zen e l'arte con l'arco",
    author: "Eugen Herrigel",
    year: "1999",
    tradition: "Zen",
    topic: "Discipline and presence",
    coverUrl: "https://covers.openlibrary.org/b/olid/OL7426315M-L.jpg?default=false",
    href: "https://openlibrary.org/books/OL7426315M/Zen_in_the_Art_of_Archery",
    note: "A book about discipline, practice, presence, and the kind of mastery that goes beyond pure technique.",
  },
  {
    title: "Bushido",
    author: "Inazo Nitobe",
    year: "2004",
    tradition: "Ethics",
    topic: "Honor and self-control",
    coverUrl: "https://covers.openlibrary.org/b/olid/OL21631200M-L.jpg?default=false",
    href: "https://openlibrary.org/books/OL21631200M/Bushido",
    note: "A reflection on honor, self-control, responsibility, and inner posture through the code of the samurai.",
  },
];

const passions = [
  {
    title: "Cooking",
    label: "Craft",
    description:
      "I’m a very good cook and I enjoy the precision, creativity, and attention to detail that great food requires.",
  },
  {
    title: "Tailoring",
    label: "Style",
    description:
      "I love tailoring and the culture of fit, materials, and refined construction. It sharpens how I think about form and detail.",
  },
  {
    title: "Singing",
    label: "Voice",
    description:
      "Singing is one of the ways I express rhythm, confidence, and presence beyond the technical side of my work.",
  },
  {
    title: "Gym & Football",
    label: "Energy",
    description:
      "Training consistently and playing football keep me disciplined, focused, and connected to teamwork and healthy competition.",
  },
];

const languages = [
  { name: "Italian", level: "Native", flag: "it" },
  { name: "English", level: "Professional", flag: "us" },
  { name: "Spanish", level: "Conversational", flag: "es" },
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero-grid">
        <div className="hero-copy">
          <div className="hero-intro">
            <div className="hero-heading">
              <div className="portrait-frame">
                <Image
                  src="/luca-paduano-portrait.png"
                  alt="Portrait of Luca Paduano"
                  fill
                  priority
                  sizes="112px"
                  className="portrait-image"
                />
              </div>

              <div>
              <h1 className="hero-title">
                Luca Paduano
                <span>
                  Senior Full Stack Engineer building modern digital products
                  with clarity, ownership, and taste.
                </span>
              </h1>
              </div>
            </div>

            <div>
              <p className="hero-description">
                I design and ship web experiences that sit between strong
                product thinking and solid engineering execution. My work ranges
                from enterprise-grade frontend ownership to founder-led SaaS
                architecture.
              </p>
            </div>
          </div>

          <div className="hero-actions">
            <a className="button-primary" href="mailto:lucapaduano09@outlook.it">
              Let&apos;s talk
            </a>
            <a
              className="button-secondary"
              href="/luca-paduano-cv.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Open CV PDF
            </a>
          </div>

          <div className="hero-languages">
            {languages.map((language) => (
              <article className="hero-language-item" key={language.name}>
                <span
                  className={`language-flag flag-${language.flag}`}
                  aria-hidden="true"
                />
                <span className="hero-language-name">{language.name}</span>
              </article>
            ))}
          </div>

          <div className="stats-grid">
            {stats.map((item) => (
              <article className="stat-card" key={item.label}>
                <p>{item.label}</p>
                <strong>{item.value}</strong>
              </article>
            ))}
          </div>
        </div>

        <aside className="hero-panel">
          <div className="hero-panel-content">
            <p className="panel-kicker">Current profile</p>
            <h2>Engineering leadership with a builder&apos;s mindset.</h2>
            <p>
              I thrive where product ambition, technical complexity, and visual
              quality need to work together. I like building systems that are
              scalable behind the scenes and memorable on the surface.
            </p>

            <div className="availability-card">
              <span>Available for</span>
              <strong>
                Senior frontend, full stack, and product engineering roles
              </strong>
            </div>

            <ul className="signal-list">
              <li>Enterprise collaboration and stakeholder communication</li>
              <li>Founder-level ownership from roadmap to implementation</li>
              <li>Interfaces that feel premium, intentional, and alive</li>
            </ul>
          </div>
        </aside>
      </section>

      <section className="section-block" id="projects">
        <div className="section-heading">
          <p>Selected work</p>
          <h2>Projects that reflect both product direction and execution quality.</h2>
        </div>

        <div className="project-grid">
          {featuredProjects.map((project) => (
            <article className="project-card" key={project.name}>
              <div className="project-topline">
                <span>{project.status}</span>
                <a href={project.url} target="_blank" rel="noreferrer">
                  Visit project
                </a>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-preview">
                <iframe
                  src={project.embedUrl}
                  title={`${project.name} preview`}
                  loading="lazy"
                  allow="fullscreen"
                  scrolling="no"
                />
              </div>
              <p className="embed-note">
                If the website blocks embedding, use the direct link above to
                open the live project.
              </p>
              <ul>
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block technology-banner-section" id="technologies">
        <div className="section-heading">
          <p>Technologies</p>
          <h2>The stack I use most to design, build, and ship products.</h2>
        </div>

        <div className="technology-marquee">
          <div className="technology-track">
            {[...technologies, ...technologies].map((tech, index) => (
              <article className="technology-pill-card" key={`${tech.name}-${index}`}>
                <span className={`technology-icon tone-${tech.tone}`}>{tech.short}</span>
                <span className="technology-name">{tech.name}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-block split-layout" id="experience">
        <div className="section-heading">
          <p>Experience</p>
          <h2>A mix of enterprise accountability and founder-speed product building.</h2>
        </div>

        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={`${item.role}-${item.company}`}>
              <div className="timeline-meta">
                <span>{item.period}</span>
                <p>{item.company}</p>
              </div>
              <div className="timeline-content">
                <h3>{item.role}</h3>
                <p>{item.summary}</p>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <PortfolioPlayground />

      <section className="section-block split-layout" id="education">
        <div className="section-heading">
          <p>Education</p>
          <h2>Training experiences that shaped my approach to software, products, and collaboration.</h2>
        </div>

        <div className="timeline">
          {education.map((item) => (
            <article className="timeline-item" key={`${item.title}-${item.school}`}>
              <div className="timeline-meta">
                <span>{item.period}</span>
                <p>{item.school}</p>
              </div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block" id="books">
        <div className="section-heading">
          <p>Reading list</p>
          <h2>Technical books I&apos;ve read and genuinely recommend.</h2>
        </div>

        <div className="books-grid">
          {books.map((book) => (
            <article className="book-card" key={book.title}>
              <a
                className="book-cover"
                href={book.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${book.title} reference page`}
                style={{ backgroundImage: `url(${book.coverUrl})` }}
              />
              <div className="book-content">
                <div className="book-meta">
                  <p className="book-author">{book.author}</p>
                  <span>{book.year}</span>
                </div>
                <h3>{book.title}</h3>
                <div className="book-tags">
                  <span>{book.category}</span>
                  <span>{book.topic}</span>
                </div>
                <p>{book.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block dual-panels" id="capabilities">
        <article className="content-panel">
          <div className="section-heading">
            <p>Capabilities</p>
            <h2>What I bring to a team, a product, and a growing platform.</h2>
          </div>
          <div className="capability-grid">
            {capabilities.map((item) => (
              <article className="capability-card" key={item.title}>
                <p className="capability-kicker">{item.kicker}</p>
                <h3>{item.title}</h3>
                <ul className="capability-points">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </article>

        <article className="content-panel cover-letter-panel" id="cover-letter">
          <div className="section-heading">
            <p>Cover letter</p>
            <h2>A short note about how I work.</h2>
          </div>
          <div className="letter-copy">
            <p>Dear team,</p>
            <p>
              I&apos;m a Senior Full Stack Engineer with a strong frontend lens and a
              product-first mindset. Over the last few years I&apos;ve worked in an
              enterprise context while also building my own SaaS product, which
              taught me how to connect technical depth with business direction.
            </p>
            <p>
              What motivates me most is creating software that feels clear,
              useful, and well considered. I enjoy stepping into complexity,
              defining structure, and turning ambiguous ideas into working
              systems that teams can trust and evolve over time.
            </p>
            <p>
              I&apos;m particularly strong when a role asks for ownership: translating
              requirements, designing architecture, aligning with stakeholders,
              and still staying close to implementation quality. I care about
              performance, maintainability, and the emotional impact of the user
              experience, not just whether a feature technically works.
            </p>
            <p>
              If you&apos;re looking for someone who can contribute with maturity,
              initiative, and a modern eye for product execution, I&apos;d be glad to
              bring that energy to the table.
            </p>
            <p>Best regards, Luca Paduano</p>
          </div>
        </article>
      </section>

      <section className="section-block" id="eastern-philosophy">
        <div className="section-heading">
          <p>Eastern philosophy</p>
          <h2>Books that shaped my interest in discipline, balance, presence, and inner clarity.</h2>
        </div>

        <div className="books-grid">
          {easternBooks.map((book) => (
            <article className="book-card eastern-book-card" key={book.title}>
              <a
                className="book-cover"
                href={book.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${book.title} reference page`}
                style={{ backgroundImage: `url(${book.coverUrl})` }}
              />
              <div className="book-content">
                <div className="book-meta">
                  <p className="book-author">{book.author}</p>
                  <span>{book.year}</span>
                </div>
                <h3>{book.title}</h3>
                <div className="book-tags">
                  <span>{book.tradition}</span>
                  <span>{book.topic}</span>
                </div>
                <p>{book.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block based-grid" id="based">
        <div className="based-copy">
          <div className="section-heading">
            <p>Where am I based?</p>
            <h2>Naples, Italy. Building from the Mediterranean with an international mindset.</h2>
          </div>
          <p className="based-description">
            I&apos;m based in Naples and I like working at the intersection of local
            identity and global product standards. It keeps me grounded in
            culture while staying open to international collaboration, remote
            work, and ambitious digital products.
          </p>
        </div>

        <div className="location-card">
          <div className="location-map">
            <iframe
              className="location-iframe"
              src="https://www.google.com/maps?q=Naples%2C%20Italy&z=11&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps view of Naples, Italy"
            />

            <div className="location-overlay">
              <div className="location-map-kicker">Google Maps · Naples</div>
              <div className="location-callout">
                <span className="location-callout-kicker">Coordinates</span>
                <strong>Naples, Italy</strong>
                <p>40.8518° N · 14.2681° E</p>
              </div>
              <div className="location-editorial-tag">Southern Italy / Naples</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block" id="passions">
        <div className="section-heading">
          <p>Other passions</p>
          <h2>Outside of technology, I care a lot about craft, expression, and discipline.</h2>
        </div>

        <div className="passions-grid">
          {passions.map((passion) => (
            <article className="passion-card" key={passion.title}>
              <p className="passion-label">{passion.label}</p>
              <h3>{passion.title}</h3>
              <p>{passion.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block contact-band" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s build something sharp, useful, and memorable.</h2>
          <p className="contact-summary">
            Open to senior frontend, full stack, and product-driven opportunities
            where execution quality, ownership, and taste actually matter.
          </p>
          <div className="contact-actions">
            <a className="button-primary" href="mailto:lucapaduano09@outlook.it">
              Send an email
            </a>
            <a className="button-secondary" href="https://trenova.it" target="_blank" rel="noreferrer">
              Visit Trenova
            </a>
          </div>
          <div className="contact-note">
            <span className="contact-note-label">Based in</span>
            <strong>Naples, Italy</strong>
          </div>
        </div>
        <div className="contact-panel">
          <div className="contact-panel-top">
            <span className="contact-panel-kicker">Direct links</span>
            <p>Available for selected collaborations, remote roles, and freelance product work.</p>
          </div>
          <div className="contact-links">
            <a href="mailto:lucapaduano09@outlook.it">
              <span className="contact-link-label">Email</span>
              <strong>lucapaduano09@outlook.it</strong>
            </a>
            <a href="tel:3426137684">
              <span className="contact-link-label">Phone</span>
              <strong>+39 3426137684</strong>
            </a>
            <a href="https://trenova.it" target="_blank" rel="noreferrer">
              <span className="contact-link-label">Website</span>
              <strong>trenova.it</strong>
            </a>
            <span className="contact-static">
              <span className="contact-link-label">Location</span>
              <strong>Naples, Italy</strong>
            </span>
          </div>
          <div className="contact-socials">
          <a
            href="https://www.linkedin.com/in/luca-paduano-30a270205/"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <span className="social-icon" aria-hidden="true">
              in
            </span>
            LinkedIn
          </a>
          <a
            href="https://github.com/LucaPaduano09"
            target="_blank"
            rel="noreferrer"
            className="social-link"
          >
            <span className="social-icon" aria-hidden="true">
              gh
            </span>
            GitHub
          </a>
          </div>
        </div>
      </section>
    </main>
  );
}
