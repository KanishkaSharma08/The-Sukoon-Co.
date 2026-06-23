import React, { useEffect } from 'react';
import PageHero from '@/components/ui/PageHero/PageHero';
import RevealWrapper from '@/components/ui/RevealWrapper/RevealWrapper';
import PageMeta from '@/components/ui/PageMeta/PageMeta';
import { trackEvent } from '@/utils/analytics';
import styles from './AboutPage.module.scss';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.subpagePad}>
      <PageMeta
        title="About Us — The Sukoon Co"
        description="Meet the founders of The Sukoon Co. We design journeys around stillness, intention, and the India you haven't yet seen. Every destination personally visited — multiple times."
        canonical="/about"
      />
      <PageHero
        index="01 / About"
        label="Who We Are"
        title={
          <>
            A company of two people
            <br />
            who have been <em>everywhere we sell.</em>
          </>
        }
        subtitle="The Sukoon Co. is a bootstrapped, founder-led boutique travel company built on one belief: the best trip you will ever take is one designed entirely around you."
      />

      {/* ETYMOLOGY */}
      <section className={styles.etymology} id="etymology">
        <RevealWrapper className={styles.etyWord}>سکون</RevealWrapper>
        <RevealWrapper className={styles.etySub} delay={1}>
          Sukoon — Urdu for peace, stillness
        </RevealWrapper>
        <RevealWrapper className={styles.etyBody} delay={2}>
          "Sukoon for us is not a marketing word. It is the sound of wind through a Himalayan valley. Water running over stones in a stream. A language you do not understand but whose warmth you feel. Children playing in a village square. Cattle grazing on a hillside at 4,000 metres. The particular silence of a mountain lake at 5am, before anyone else is awake."
        </RevealWrapper>
      </section>

      {/* FOUNDERS */}
      <section className={styles.founders} id="founders">
        <div className={styles.foundersIntro}>
          <RevealWrapper as="p" className="sec-label">
            Our Story
          </RevealWrapper>
          <RevealWrapper as="h2" className="sec-title" delay={1}>
            Built by two people
            <br />
            who couldn't stop travelling.
          </RevealWrapper>
        </div>

        {/* Aditya */}
        <div className={styles.founderBlock}>
          <div className={styles.founderPortrait}>A</div>
          <div>
            <h3 className={styles.founderName}>Aditya</h3>
            <p className={styles.founderRole}>Operations, Ground &amp; Soul</p>
            <div className={styles.founderBio}>
              <p>
                Aditya completed his engineering and later pursued an MBA, after which he built a career in banking. But every weekend, every leave, every gap between the rows of numbers — he was in the mountains. Ladakh became his second home. He has driven and trekked across Ladakh, Spiti, Kashmir, Uttarakhand, Rajasthan, and the length of the Western Himalayas over many years, building relationships with local guesthouses, drivers, permit offices, and the kind of dhaba owners whose names you remember.
              </p>
              <p>
                A year before starting The Sukoon Co., Aditya quit his banking job. Not impulsively — deliberately, after spending two years planning trips for friends and family every single month, always refusing to give them a template, always building something specific to them.{' '}
                <em>He realised what he was already doing was the company. It just needed a name.</em>
              </p>
              <p>
                He manages all operations on the ground: itinerary design, vendor relationships, route logistics, permit handling, hotel selection, and being reachable at 11pm when things need solving.
              </p>
            </div>
          </div>
        </div>

        {/* Kanishka */}
        <div className={styles.founderBlock}>
          <div className={styles.founderPortrait}>K</div>
          <div>
            <h3 className={styles.founderName}>Kanishka</h3>
            <p className={styles.founderRole}>Product, Design &amp; Digital</p>
            <div className={styles.founderBio}>
              <p>
                Kanishka is a product designer specialising in UI/UX. He and Aditya met during engineering and stayed connected through years of separate careers. When Aditya decided to give his travel obsession a name and a business model, Kanishka was the obvious partner — someone who understood both technology and beautiful, thoughtful design.
              </p>
              <p>
                Kanishka owns everything digital at The Sukoon Co.: the website, built from scratch and not a template; social media presence; brand identity; marketing; and the tools that make the customer experience seamless.{' '}
                <em>The Sukoon Co. brand — its warmth, its typefaces, its colours drawn from Himalayan landscapes — is Kanishka's work.</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className={styles.philosophy} id="philosophy">
        <RevealWrapper as="p" className="sec-label">
          What We Stand For
        </RevealWrapper>
        <RevealWrapper as="h2" className="sec-title" delay={1} style={{ color: 'var(--black)' }}>
          Five things we will never compromise on.
        </RevealWrapper>
        <div className={styles.philGrid}>
          <div className={styles.philList}>
            <RevealWrapper className={styles.philItem} delay={2}>
              <div className={styles.philItemTitle}>Slow over rushed</div>
              <p className={styles.philItemBody}>
                We build breathing room into every itinerary. No checklist tourism, no racing between sights.
              </p>
            </RevealWrapper>
            <RevealWrapper className={styles.philItem} delay={2}>
              <div className={styles.philItemTitle}>Specific over generic</div>
              <p className={styles.philItemBody}>
                Every trip is a response to a conversation, not a catalogue selection. No two Sukoon itineraries are identical.
              </p>
            </RevealWrapper>
            <RevealWrapper className={styles.philItem} delay={2}>
              <div className={styles.philItemTitle}>Real over curated</div>
              <p className={styles.philItemBody}>
                Our photos are from our own travel. Our hotel recommendations come from having slept there. Our permit knowledge comes from having queued for them.
              </p>
            </RevealWrapper>
          </div>
          <div className={styles.philList}>
            <RevealWrapper className={styles.philItem} delay={3}>
              <div className={styles.philItemTitle}>Warm without being performative</div>
              <p className={styles.philItemBody}>
                We are not cheerful brochure language. We are honest about altitude, about road conditions, about what "offbeat" actually means.
              </p>
            </RevealWrapper>
            <RevealWrapper className={styles.philItem} delay={3}>
              <div className={styles.philItemTitle}>Personal over scalable</div>
              <p className={styles.philItemBody}>
                We will stay small deliberately. The Sukoon Co. will never process 500 bookings a month. We will be the people whose number you have — who pick up when you call from a remote valley.
              </p>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* VISUAL IDENTITY */}
      <section className={styles.identity} id="identity">
        <RevealWrapper as="p" className="sec-label">
          Visual Identity
        </RevealWrapper>
        <RevealWrapper as="h2" className="sec-title" delay={1}>
          Colours drawn from
          <br />
          North Indian landscapes.
        </RevealWrapper>
        <div className={styles.identityColors}>
          <RevealWrapper className={`${styles.colorSwatch} ${styles.colorInk}`} delay={2}>
            <span className={`${styles.colorSwatchName} ${styles.light}`}>Ink</span>
          </RevealWrapper>
          <RevealWrapper className={`${styles.colorSwatch} ${styles.colorSand}`} delay={2}>
            <span className={`${styles.colorSwatchName} ${styles.dark}`}>Sand</span>
          </RevealWrapper>
          <RevealWrapper className={`${styles.colorSwatch} ${styles.colorSage}`} delay={2}>
            <span className={`${styles.colorSwatchName} ${styles.dark}`}>Sage</span>
          </RevealWrapper>
          <RevealWrapper className={`${styles.colorSwatch} ${styles.colorRose}`} delay={2}>
            <span className={`${styles.colorSwatchName} ${styles.light}`}>Rose</span>
          </RevealWrapper>
          <RevealWrapper className={`${styles.colorSwatch} ${styles.colorBrass}`} delay={2}>
            <span className={`${styles.colorSwatchName} ${styles.light}`}>Brass</span>
          </RevealWrapper>
        </div>
        <RevealWrapper
          as="p"
          style={{
            marginTop: '32px',
            fontSize: '13px',
            fontWeight: 300,
            color: 'rgba(255,255,255,.4)',
            maxWidth: '560px',
            lineHeight: 1.8,
          }}
          delay={3}
        >
          Ink — night sky over the Thar. Sand — Jaisalmer sandstone. Sage — Spiti alpine meadows. Rose — Rajasthani haveli walls. Brass — Varanasi temple lamps.
        </RevealWrapper>
      </section>

      {/* TAGLINE BLOCK */}
      <section className={styles.taglineBlock} id="tagline-block">
        <RevealWrapper className={styles.taglineText}>
          "The Co." signals
          <br />
          a small, deliberate company.
          <br />
          <em>
            Not a corporation.
            <br />
            Not a platform.
          </em>
        </RevealWrapper>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection} id="cta">
        <RevealWrapper as="p" className="sec-label">
          Begin Your Journey
        </RevealWrapper>
        <RevealWrapper as="h2" className={styles.ctaH} delay={1}>
          Travel at ease.
        </RevealWrapper>
        <RevealWrapper as="p" className={styles.ctaSub} delay={2}>
          Start with a WhatsApp message. Tell us where you want to go, when, and with whom. We build the rest.
        </RevealWrapper>
        <div className={styles.btnGroup}>
          <RevealWrapper delay={3}>
            <a
              href="https://wa.me/919689833000"
              className={styles.btnP}
              onClick={() => trackEvent('click_whatsapp_cta', 'lead_generation', 'about_page_cta')}
            >
              WhatsApp Us
            </a>
          </RevealWrapper>
          <RevealWrapper delay={3}>
            <a
              href="mailto:team@sukoonco.com"
              className={styles.btnS}
              onClick={() => trackEvent('click_email_cta', 'lead_generation', 'about_page_cta')}
            >
              Email Us
            </a>
          </RevealWrapper>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
