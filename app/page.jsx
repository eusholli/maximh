import Image from 'next/image';
import {
    ChevronDown,
    Cloud,
    Radio,
    BarChart3,
    Network,
    Lightbulb,
    Users,
    Linkedin,
    Github,
} from 'lucide-react';
import ScrollReveal from './components/ScrollReveal';
import ContactForm from './components/ContactForm';

export default function Home() {
    return (
        <div className="page-wrapper">
            {/* ───── HERO ───── */}
            <div className="hero-bg-wrapper">
                <section className="hero">
                    <div className="hero-accent" />
                    <Image
                        src="/logo.png"
                        alt="maximH logo"
                        width={72}
                        height={72}
                        className="hero-logo"
                        priority
                    />
                    <span className="hero-llc">maximH LLC</span>
                    <p className="hero-tagline">Executive Technology Advisory</p>
                    <h1 className="hero-name">Geoff Hollingworth</h1>
                    <p className="hero-title">
                        Executive Technology Leader &nbsp;·&nbsp; CMO &nbsp;·&nbsp; Strategic
                        Advisor
                    </p>
                    <p className="hero-description">
                        30+ years transforming how technology companies compete and win — from
                        the particle accelerators of CERN to the global telecom disruption at
                        Rakuten Symphony.
                    </p>
                    <a href="#contact" className="hero-cta">
                        Get in touch <ChevronDown />
                    </a>
                </section>
            </div>

            <div className="divider">
                <div className="divider-line" />
            </div>

            {/* ───── ABOUT ───── */}
            <div className="section-bg-wrapper">
                <section className="section" id="about">
                    <ScrollReveal>
                        <p className="section-label">About</p>
                        <h2 className="section-title">
                            Not a traditional CMO.
                        </h2>
                        <p className="section-subtitle">
                            I bridge deep engineering roots with strategic marketing vision to
                            help technology companies find unfair advantage in complex
                            ecosystems.
                        </p>
                    </ScrollReveal>

                    <div className="about-content">
                        <ScrollReveal>
                            <div className="about-text">
                                <p>
                                    I specialise in the intersection of technology, marketing, and
                                    ecosystem strategy. My career spans software engineering at CERN,
                                    16+ years leading cloud infrastructure and digital marketing at
                                    Ericsson, defining the Edge Computing market category at
                                    MobiledgeX (acquired by Google), and driving global telecom
                                    disruption as CMO of Rakuten Symphony.
                                </p>
                                <p>
                                    I help companies rethink how they position, partner, and compete
                                    in markets where cloud, telecom, and software automation are
                                    reshaping the rules. My approach is grounded in customer
                                    motivation, ecosystem dynamics, and executable strategy — not
                                    slide decks.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="about-highlights">
                                <div className="highlight-item">
                                    <div className="highlight-number">30+</div>
                                    <div className="highlight-label">
                                        Years in software, cloud &amp; telecom
                                    </div>
                                </div>
                                <div className="highlight-item">
                                    <div className="highlight-number">6</div>
                                    <div className="highlight-label">
                                        Global companies led at executive level
                                    </div>
                                </div>
                                <a href="https://www.linkedin.com/newsletters/6990529376970842112/" target="_blank" rel="noopener noreferrer" className="highlight-item highlight-item-link">
                                    <div className="highlight-number">Not Normal</div>
                                    <div className="highlight-label">
                                        LinkedIn newsletter — Provoking conversation and breaking taboos
                                    </div>
                                </a>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>
            </div>

            <div className="divider">
                <div className="divider-line" />
            </div>

            {/* ───── EXPERIENCE ───── */}
            <section className="section" id="experience">
                <ScrollReveal>
                    <p className="section-label">Experience</p>
                    <h2 className="section-title">Career timeline</h2>
                    <p className="section-subtitle">
                        A track record of building brands, markets, and teams at the cutting
                        edge of technology.
                    </p>
                </ScrollReveal>

                <div className="timeline">
                    <ScrollReveal>
                        <div className="timeline-item">
                            <div className="timeline-dot" />
                            <div className="timeline-header">
                                <span className="timeline-company">Rakuten Symphony</span>
                                <span className="timeline-badge">Current</span>
                            </div>
                            <div className="timeline-role">Chief Marketing Officer</div>
                            <div className="timeline-period">Nov 2021 — Present</div>
                            <p className="timeline-description">
                                Leading global positioning and brand strategy for the disruption
                                of the telecom industry through software automation and open
                                network architecture.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="timeline-item">
                            <div className="timeline-dot" />
                            <div className="timeline-header">
                                <span className="timeline-company">
                                    MobiledgeX
                                </span>
                                <span className="timeline-badge">→ Acquired by Google</span>
                            </div>
                            <div className="timeline-role">
                                CMO → Advisor to the CEO
                            </div>
                            <div className="timeline-period">Mar 2018 — Nov 2021</div>
                            <p className="timeline-description">
                                Defined the Edge Computing market category. Built global brand,
                                developer ecosystem, and go-to-market strategy for Deutsche
                                Telekom&apos;s edge computing venture.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="timeline-item timeline-inactive">
                            <div className="timeline-dot" />
                            <div className="timeline-header">
                                <span className="timeline-company">Ericsson</span>
                            </div>
                            <div className="timeline-role">
                                Head of Digital Marketing · Cloud Infrastructure · Strategy &amp;
                                Consulting
                            </div>
                            <div className="timeline-period">1988 — 2018 · 16+ years</div>
                            <p className="timeline-description">
                                Multiple executive roles spanning digital marketing, cloud
                                infrastructure product marketing (co-created Intel Rack Scale
                                Design), North America strategy &amp; consulting, and the Volvo
                                Ocean Race mobile media channel (2M+ downloads, world-first
                                global mobile site).
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="timeline-item timeline-inactive">
                            <div className="timeline-dot" />
                            <div className="timeline-header">
                                <span className="timeline-company">AT&amp;T Foundries</span>
                            </div>
                            <div className="timeline-role">
                                Head of Innovation
                            </div>
                            <div className="timeline-period">Jul 2012 — Jun 2014</div>
                            <p className="timeline-description">
                                Led innovation programs including collaborations with high-profile
                                campaigns and enterprise partners.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="timeline-item timeline-inactive">
                            <div className="timeline-dot" />
                            <div className="timeline-header">
                                <span className="timeline-company">CERN</span>
                            </div>
                            <div className="timeline-role">Software Engineer</div>
                            <div className="timeline-period">1986 — 1987</div>
                            <p className="timeline-description">
                                Developed control software for the Large Electron-Positron (LEP)
                                ring accelerator — where fundamental physics meets
                                mission-critical engineering.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            <div className="divider">
                <div className="divider-line" />
            </div>

            {/* ───── EXPERTISE ───── */}
            <div className="section-bg-wrapper">
                <section className="section" id="expertise">
                    <ScrollReveal>
                        <p className="section-label">Expertise</p>
                        <h2 className="section-title">What I bring</h2>
                        <p className="section-subtitle">
                            Deep experience across the full spectrum of technology
                            commercialisation.
                        </p>
                    </ScrollReveal>

                    <div className="expertise-grid">
                        <ScrollReveal>
                            <div className="expertise-card">
                                <div className="expertise-icon">
                                    <Cloud size={28} />
                                </div>
                                <h3 className="expertise-card-title">
                                    Cloud &amp; Telecom Strategy
                                </h3>
                                <p className="expertise-card-desc">
                                    Navigating the convergence of cloud-native infrastructure,
                                    network automation, and software-defined telecom.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="expertise-card">
                                <div className="expertise-icon">
                                    <Radio size={28} />
                                </div>
                                <h3 className="expertise-card-title">Edge Computing</h3>
                                <p className="expertise-card-desc">
                                    Category creation and market positioning for edge platforms —
                                    from concept to global ecosystem.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="expertise-card">
                                <div className="expertise-icon">
                                    <BarChart3 size={28} />
                                </div>
                                <h3 className="expertise-card-title">
                                    Marketing &amp; Brand
                                </h3>
                                <p className="expertise-card-desc">
                                    Global brand strategy, product marketing, and thought leadership
                                    for complex B2B technology markets.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="expertise-card">
                                <div className="expertise-icon">
                                    <Network size={28} />
                                </div>
                                <h3 className="expertise-card-title">
                                    Ecosystem Development
                                </h3>
                                <p className="expertise-card-desc">
                                    Building partner ecosystems and developer communities that
                                    create compounding market advantage.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="expertise-card">
                                <div className="expertise-icon">
                                    <Lightbulb size={28} />
                                </div>
                                <h3 className="expertise-card-title">Innovation Programs</h3>
                                <p className="expertise-card-desc">
                                    Incubating and scaling new ventures, from AT&amp;T Foundries to
                                    edge computing startups.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal>
                            <div className="expertise-card">
                                <div className="expertise-icon">
                                    <Users size={28} />
                                </div>
                                <h3 className="expertise-card-title">Executive Advisory</h3>
                                <p className="expertise-card-desc">
                                    Strategic counsel for CEOs and boards navigating technology
                                    transitions and market disruption.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>
            </div>

            <div className="divider">
                <div className="divider-line" />
            </div>

            {/* ───── CONTACT ───── */}
            <section className="section" id="contact">
                <ScrollReveal>
                    <p className="section-label">Contact</p>
                    <h2 className="section-title">Let&apos;s talk</h2>
                    <p className="section-subtitle">
                        Interested in working together? Send a message or connect on
                        LinkedIn.
                    </p>
                </ScrollReveal>

                <div className="contact-layout">
                    <ScrollReveal>
                        <div className="contact-info">
                            <p>
                                I take on a select number of strategic engagements each year.
                                Whether you need help with market positioning, ecosystem
                                strategy, or executive advisory — I&apos;d like to hear about
                                the challenge.
                            </p>
                            <div className="contact-links">
                                <a
                                    href="https://www.linkedin.com/in/geoffhollingworth/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-link"
                                >
                                    <Linkedin /> LinkedIn
                                </a>
                                <a
                                    href="https://github.com/eusholli"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-link"
                                >
                                    <Github /> GitHub
                                </a>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <ContactForm />
                    </ScrollReveal>
                </div>
            </section>

            {/* ───── FOOTER ───── */}
            <footer className="footer">
                <span className="footer-text">
                    © {new Date().getFullYear()} maximH LLC. All rights reserved.
                </span>
                <div className="footer-links">
                    <a href="#about">About</a>
                    <a href="#experience">Experience</a>
                    <a href="#expertise">Expertise</a>
                    <a href="#contact">Contact</a>
                </div>
            </footer>
        </div>
    );
}
