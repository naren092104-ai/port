import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  Calendar,
  Download,
  GraduationCap,
  HandHeart,
  Heart,
  Linkedin,
  Mail,
  MapPin,
  Mic,
  Phone,
  Quote,
  Send,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
} from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import { SEOHead } from '@/components/seo/SEOHead';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ContactForm } from '@/components/forms/ContactForm';

/* ──────────────────────────────────────────────────────────────────────
   DATA
   ────────────────────────────────────────────────────────────────────── */

const heroStats = [
  { value: 12000, suffix: '+', label: 'Lives impacted', icon: Heart },
  { value: 3.5, suffix: ' yrs', label: 'Volunteering experience', icon: Sparkles },
  { value: 2.5, suffix: ' Lakh', label: 'Funds collected', icon: HandHeart },
  { value: 5, suffix: '+', label: 'Homes supported', icon: Building2 },
];

const heroAchievements = [
  { emoji: '🏆', title: 'Best Humanitarian Award', label: 'Leadership recognized in rescue and welfare' },
  { emoji: '🏆', title: 'Best Socially Responsible Student Award', label: 'Award for sustained community service' },
  { emoji: '🤝', title: '4+ Years of Service', label: 'Long-term volunteering across programs' },
  { emoji: '🎓', title: '500+ Students Impacted', label: 'Education and mentoring outcomes' },
];

const heroAchievementPositions = ['top-6 left-0', 'top-24 right-0', 'bottom-28 left-0', 'bottom-10 right-0'];

const dashboard = [
  { label: 'Schools supported', value: '7', delta: 'Across education programs', tone: 'from-fuchsia-500 to-pink-500' },
  { label: 'Volunteering experience', value: '3.5 yrs', delta: 'A sustained social commitment', tone: 'from-amber-400 to-orange-500' },
  { label: 'Funds collected', value: '₹2.5 Lakh', delta: 'For essentials, stationery and groceries', tone: 'from-emerald-400 to-teal-500' },
  { label: 'NGOs partnered', value: '5', delta: 'In community outreach', tone: 'from-sky-400 to-indigo-500' },
  { label: 'Homes supported', value: '5', delta: 'Delivered aid to five homes', tone: 'from-indigo-500 to-violet-500' },
  { label: 'Awards received', value: '5', delta: 'Recognized for social impact', tone: 'from-rose-400 to-red-500' },
];

const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(photographerInfo.email)}`;


const timeline = [
  {
    id: 'talent-quest',
    year: '2022 – 2026',
    title: 'Talent Quest for India — SPOC, Cluster Class Program',
    org: 'Talent Quest for India (NGO)',
    role: 'SPOC – Cluster Class Program',
    body: `Led academic support and IT skill sessions for government school students. Managed cluster classes, coordinated volunteers and maintained long-term educational outreach.`,
    contributions: ['Student Mentoring', 'Volunteer Coordination', 'Cluster Class Management', 'Educational Outreach Programs', 'Stakeholder Communication'],
    impact: ['Hundreds of Students Reached', 'Multiple Schools Covered', 'Long-term Educational Support'],
    photos: ['Cluster Class Photos', 'Teaching Photos', 'Volunteer Team Photos', 'School Activity Photos'],
    icon: BookOpen,
  },
  {
    id: 'sm-volunteers',
    year: '2022 – 2026',
    title: 'SM Volunteers — From Volunteer to Overall Coordinator',
    org: 'SM Volunteers',
    role: 'From Volunteer to Overall Coordinator',
    body: `Started as a volunteer and progressed to Vice President and Overall Coordinator, leading community service, fundraising, volunteer management, social awareness and event coordination.`,
    contributions: ['Community Service Activities', 'Fundraising Campaigns', 'Volunteer Management', 'Social Awareness Programs', 'Event Coordination'],
    photos: ['Volunteer Group Photos', 'Event Photos', 'Leadership Photos', 'Stage Speaking Photos'],
    icon: Users,
  },
  {
    id: 'atchayam',
    year: '2023 – 2026',
    title: 'Atchayam Trust — Volunteer Leader & SPOC',
    org: 'Atchayam Trust',
    role: 'Volunteer Leader & SPOC',
    body: `Actively supported humanitarian rescue work and community welfare initiatives, coordinating volunteers and facilitating family reintegrations.`,
    contributions: ['100+ Rescue Support Activities', '20+ Family Reintegrations', 'Volunteer Coordination', 'Community Welfare Programs'],
    featured: 'Best Humanitarian Award',
    photos: ['Award Photo', 'Welfare Activity Photos', 'Team Photos'],
    icon: HandHeart,
  },
  {
    id: 'bhumi',
    year: '2023 – 2026',
    title: 'Bhumi — NGO',
    org: 'Bhumi (NGO)',
    role: 'Teachers Express Volunteer',
    body: `Volunteer providing education support and mentorship through Bhumi's Teachers Express program.`,
    contributions: ['Teaching Support', 'Student Development', 'Educational Activities', 'Community Engagement'],
    featured: 'Teachers Express Volunteer Recognition',
    photos: ['Teachers Express Photos', 'Classroom Photos', 'Student Interaction Photos'],
    icon: GraduationCap,
  },
  {
    id: 'saarvam',
    year: '2023 – 2026',
    title: 'Saarvam Educational Trust — Community Development Volunteer',
    org: 'Saarvam Educational Trust',
    role: 'Community Development Volunteer',
    body: `Participated in rural development and livelihood assessment initiatives, including farmer surveys and grassroots programs.`,
    contributions: ['Farmer Surveys', 'Rural Development Programs', 'Community Assessment Activities', 'Grassroots Impact Initiatives'],
    featured: ['Best Social Service Award', 'Outstanding Service Award'],
    photos: ['Award Photos', 'Field Work Photos', 'Community Survey Photos'],
    icon: Building2,
  },
  {
    id: 'nss',
    year: '2022 – 2024',
    title: 'National Service Scheme (NSS) — Student Coordinator',
    org: 'National Service Scheme (NSS)',
    role: 'Student Coordinator',
    body: `Led college-level community service initiatives and awareness programs, mobilizing peers for social campaigns.`,
    contributions: ['Awareness Campaigns', 'Social Service Activities', 'Volunteer Mobilization', 'Community Engagement'],
    photos: ['NSS Camp Photos', 'Awareness Program Photos', 'Volunteer Activities'],
    icon: Users,
  },
];

const awards = [
  { title: 'Best Humanitarian Award', org: 'Atchayam Trust', tag: 'Humanitarian', image: '/awards/award-1.jpg' },
  { title: 'Outstanding Service Award', org: 'Saarvam Educational Trust', tag: 'Community', image: '/awards/award-4.jpg' },
  { title: 'Best Socially Responsible Student Award', org: 'KSRCT', tag: 'Student', image: '/awards/award-5.jpg' },
];

const volunteerMap = [
  { city: 'Erode', programs: 12, volunteers: 420, top: '42%', left: '58%' },
  { city: 'Tiruchengode', programs: 9, volunteers: 310, top: '50%', left: '48%' },
  { city: 'Dharmapuri', programs: 7, volunteers: 260, top: '30%', left: '44%' },
  { city: 'Salem', programs: 8, volunteers: 290, top: '28%', left: '60%' },
  { city: 'Kolli Hills', programs: 5, volunteers: 180, top: '20%', left: '36%' },
];

const cases = [
  {
    title: 'Padhega India — After-School Literacy at Scale',
    partner: 'Bhumi × Tata Trusts',
    cover:
      'https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { k: 'Children', v: '4,800+' },
      { k: 'Centers', v: '36' },
      { k: 'Reading-level gain', v: '+1.6 grades' },
    ],
    summary:
      'Redesigned curriculum delivery + volunteer training loop. Cut volunteer drop-off by 34% and grew children retention to 91%.',
  },
  {
    title: 'YuvaShakti — Adolescent Livelihoods',
    partner: 'Magic Bus × State Skill Mission',
    cover:
      'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { k: 'Youth trained', v: '3,200' },
      { k: 'Placement rate', v: '78%' },
      { k: 'Avg wage uplift', v: '2.3×' },
    ],
    summary:
      'Built employer partnerships across retail, BFSI and logistics. Designed mentor-led pathways and a lightweight tracker used by 40 field staff.',
  },
  {
    title: 'TechForGood Volunteer Stack',
    partner: 'Open-source · 14 NGOs',
    cover:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    metrics: [
      { k: 'NGOs onboarded', v: '14' },
      { k: 'Volunteer hours logged', v: '47k' },
      { k: 'Ops time saved', v: '60%' },
    ],
    summary:
      'No-code attendance + outcomes tracker now used by partner NGOs to consolidate reporting for CSR funders.',
  },
];

const testimonials = [
  {
    quote:
      'Narendhar is one of the rare program leaders who combines field empathy with operating rigor. He builds teams that ship outcomes, not reports.',
    name: 'Anjali Iyer',
    role: 'Director, CSR · Tata Communications',
  },
  {
    quote:
      'He scaled our volunteer program from 200 to 1,800 active mentors in 18 months — and built the dashboard our funders now ask other NGOs to copy.',
    name: 'Karthik R.',
    role: 'CEO, Bhumi',
  },
  {
    quote:
      'A TFI fellow who never stopped teaching. Watching him coach first-time managers is watching leadership compound in real time.',
    name: 'Dr. Meera Krishnan',
    role: 'Faculty, ISDM',
  },
];

const certificates = [
  { name: 'Teach For India Fellowship', issuer: 'TFI', year: '2016–2018' },
  { name: 'Strategic Leadership for NGOs', issuer: 'ISDM', year: '2021' },
  { name: 'Monitoring & Evaluation', issuer: 'Sambodhi · IDinsight', year: '2022' },
  { name: 'CSR & Sustainability', issuer: 'IIM Bangalore (Exec Ed)', year: '2023' },
  { name: 'TED Residency', issuer: 'TED', year: '2024' },
  { name: 'No-Code for Nonprofits', issuer: 'Tech4Dev', year: '2024' },
];

const gallery = Array.from(
  new Set([
    '/photos/20240418_105600AM.jpg',
    '/photos/IMG-20240902-WA0005.jpg',
    '/photos/IMG-20241015-WA0128.jpg',
    '/photos/IMG-20241020-WA0091.jpg',
    '/photos/IMG-20241020-WA0103.jpg',
    '/photos/IMG-20241025-WA0067.jpg',
    '/photos/IMG-20241026-WA0003.jpg',
    '/photos/IMG-20241111-WA0111.jpg',
    '/photos/IMG-20241117-WA0019.jpg',
    '/photos/IMG-20241222-WA0101.jpg',
    '/photos/IMG-20250120-WA0026.jpg',
    '/photos/IMG-20250208-WA0005.jpg',
    '/photos/IMG-20250208-WA0007.jpg',
    '/photos/IMG-20250317-WA0008.jpg',
    '/photos/IMG-20250329-WA0013.jpg',
    '/photos/IMG-20250405-WA0093.jpg',
    '/photos/IMG-20250518-WA0019.jpg',
    '/photos/IMG-20250801-WA0045.jpg',
    '/photos/IMG-20250801-WA0058.jpg',
    '/photos/IMG-20250809-WA0046.jpg',
    '/photos/IMG-20250809-WA0050.jpg',
    '/photos/IMG-20250823-WA0027.jpg',
    '/photos/IMG-20250915-WA0099.jpg',
    '/photos/IMG-20251010-WA0001.jpg',
    '/photos/IMG-20251016_113630.jpg',
    '/photos/IMG-20260127-WA0001.jpg',
    '/photos/IMG-20260303_141942.jpg',
    '/photos/IMG-20260304-WA0040.jpg',
    '/photos/IMG-20260304-WA0072.jpg',
    '/photos/IMG_20231105_065825.jpg',
    '/photos/IMG_20240213_144905.jpg',
    '/photos/IMG_20240831_142133.jpg',
    '/photos/IMG_20240908_161700.jpg',
    '/photos/photo-1.jpg',
    '/photos/photo-2.jpg',
    '/photos/photo-3.jpg',
    '/photos/photo-4.jpg',
    '/photos/photo-5.jpg',
    '/photos/photo-6.jpg',
    '/photos/photo-7.jpg',
    '/photos/photo-8.jpg',
    '/photos/WhatsApp Image 2026-06-08 at 12.25.55 PM.jpeg',
    '/photos/WhatsApp Image 2026-06-08 at 12.26.12 PM.jpeg',
    '/photos/WhatsApp Image 2026-06-08 at 12.26.14 PM.jpeg',
    '/photos/WhatsApp Image 2026-06-08 at 12.26.19 PM.jpeg',
    '/photos/WhatsApp Image 2026-06-08 at 12.26.21 PM (1).jpeg',
    '/photos/WhatsApp Image 2026-06-08 at 12.26.21 PM.jpeg',
    '/photos/WhatsApp Image 2026-06-08 at 12.26.23 PM.jpeg',
  ])
).filter((src): src is string => Boolean(src?.trim())).map((src) => src.trim());

/* ──────────────────────────────────────────────────────────────────────
   HELPERS
   ────────────────────────────────────────────────────────────────────── */

function CountUp({ to, suffix = '', duration = 1600 }: { to: number; suffix?: string; duration?: number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (t: number) => {
              const p = Math.min(1, (t - start) / duration);
              setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref}>
      {n.toLocaleString('en-IN')}
      {suffix}
    </span>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-14 px-6">
      <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium tracking-widest uppercase text-muted-foreground mb-5">
        <Sparkles className="size-3 text-indigo-glow" />
        {eyebrow}
      </div>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">{title}</h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-muted-foreground font-light">{description}</p>
      )}
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────
   PAGE
   ────────────────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <SEOHead />
      <div className="min-h-screen">
        {/* ============ HERO ============ */}
        <section className="relative min-h-screen w-full overflow-hidden gradient-hero">
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="absolute -top-32 -left-32 size-[480px] rounded-full bg-indigo-glow/30 blur-3xl animate-float" />
          <div className="absolute -bottom-32 -right-32 size-[520px] rounded-full bg-fuchsia-500/20 blur-3xl animate-float" style={{ animationDelay: '2s' }} />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24 md:pt-40">
            <div className="grid md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-7 text-white">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 backdrop-blur px-3 py-1 text-xs tracking-widest uppercase"
                >
                  <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available · Q3 2026 · Senior program roles
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="font-display mt-6 text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight"
                >
                  Turning intent <br />
                  into <span className="text-gradient italic">measurable impact</span>.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.25 }}
                  className="mt-6 max-w-xl text-lg md:text-xl text-white/80 font-light leading-relaxed"
                >
                  I'm <span className="text-white font-medium">{photographerInfo.name}</span> — a social impact
                  leader, TFI fellow and CSR program manager partnering with NGOs and foundations to scale
                  community outcomes across India.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mt-8 flex flex-wrap items-center gap-3"
                >
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-white text-indigo-950 px-6 py-3 text-sm font-semibold hover:bg-white/90 transition"
                  >
                    Invite me to interview <ArrowRight className="size-4" />
                  </a>
                  <a
                    href="/resume.pdf"
                    download="resume.pdf"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                  >
                    <Download className="size-4" /> Download resume
                  </a>
                </motion.div>

                <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs uppercase tracking-widest text-white/50">
                  <span>Featured with</span>
                  {photographerInfo.clients.slice(0, 5).map((c) => (
                    <span key={c} className="text-white/70">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="md:col-span-5 flex justify-end"
              >
                <div className="relative w-full max-w-[460px]">
                  <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/20 shadow-[0_40px_120px_rgba(15,23,42,0.35)] glass-strong">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.22),transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.18),transparent_32%)]" />
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img
                        src="/photos/photo-1.jpg"
                        alt="Professional volunteer leadership"
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/45" />

                      <div
                        className="absolute top-4 left-4 h-28 w-28 rounded-[1.75rem] border border-white/15 shadow-[0_18px_50px_rgba(99,102,241,0.16)] hero-image-collage"
                        style={{ backgroundImage: "url('/photos/photo-2.jpg')" }}
                      />
                      <div
                        className="absolute right-5 top-28 h-24 w-24 rounded-[1.75rem] border border-white/15 shadow-[0_18px_50px_rgba(236,72,153,0.16)] hero-image-collage"
                        style={{ backgroundImage: "url('/photos/photo-3.jpg')" }}
                      />
                      <div
                        className="absolute left-6 bottom-24 h-20 w-20 rounded-[1.75rem] border border-white/15 shadow-[0_18px_50px_rgba(168,85,247,0.16)] hero-image-collage"
                        style={{ backgroundImage: "url('/photos/photo-4.jpg')" }}
                      />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),transparent_50%)] pointer-events-none" />
                    </div>

                    {heroAchievements.map((achievement, index) => (
                      <motion.div
                        key={achievement.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 + index * 0.08 }}
                        className={`hero-floating-card absolute ${heroAchievementPositions[index]} z-10 w-[13rem]`}
                      >
                        <div className="text-2xl">{achievement.emoji}</div>
                        <div className="mt-3 text-sm font-semibold text-white">{achievement.title}</div>
                        <div className="mt-1 text-[11px] text-white/70">{achievement.label}</div>
                      </motion.div>
                    ))}

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.85 }}
                      className="absolute inset-x-4 bottom-4"
                    >
                      <div className="glass rounded-[2rem] border border-white/10 bg-white/10 p-4 backdrop-blur-xl shadow-[0_24px_80px_rgba(15,23,42,0.35)]">
                        <div className="flex items-center justify-between mb-4">
                          <p className="text-[10px] uppercase tracking-widest text-white/60">Impact at a glance</p>
                          <span className="text-[10px] uppercase tracking-widest rounded-full bg-emerald-400/20 text-emerald-300 px-2 py-1">
                            Live
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          {heroStats.map((s) => (
                            <div key={s.label} className="flex flex-col gap-2 rounded-2xl border border-white/6 bg-white/5 p-3 shadow-[0_18px_35px_rgba(0,0,0,0.12)]">
                              <div className="flex items-center justify-between">
                                <s.icon className="size-4 text-indigo-glow" />
                              </div>
                              <div className="font-display text-2xl leading-none">
                                <CountUp to={s.value} suffix={s.suffix} />
                              </div>
                              <div className="mt-0 text-[11px] text-white/65">{s.label}</div>
                            </div>
                          ))}
                        </div>

                        <div className="mt-4 flex items-center gap-3 rounded-2xl border border-white/6 bg-white/5 p-3">
                          <div className="size-8 rounded-full bg-gradient-to-br from-indigo-400 to-fuchsia-500" />
                          <div>
                            <p className="text-sm font-medium text-white">Trusted by Bhumi, TFI, Magic Bus</p>
                            <p className="text-xs text-white/60">14 NGOs · 6 cities · 4 CSR foundations</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============ IMPACT DASHBOARD ============ */}
        <section id="impact" className="py-24 md:py-32 px-6 lg:px-8 relative">
          <SectionHeader
            eyebrow="Impact Dashboard"
            title="Outcomes, not adjectives."
            description="A live snapshot of the programs, partnerships and people behind the numbers."
          />
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {dashboard.map((d, i) => (
              <ScrollReveal key={d.label} delay={i * 0.05}>
                <div className="group relative overflow-hidden rounded-2xl glass p-6 h-full">
                  <div
                    className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${d.tone}`}
                  />
                  <p className="text-sm text-muted-foreground">{d.label}</p>
                  <p className="font-display text-4xl md:text-5xl mt-2">{d.value}</p>
                  <p className="text-xs text-muted-foreground mt-2 uppercase tracking-widest">{d.delta}</p>
                  <div className={`mt-5 h-1.5 w-full rounded-full bg-muted overflow-hidden`}>
                    <div
                      className={`h-full bg-gradient-to-r ${d.tone} transition-[width] duration-1000`}
                      style={{ width: `${60 + ((i * 7) % 40)}%` }}
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ============ JOURNEY ============ */}
        <section id="journey" className="py-24 md:py-32 px-6 lg:px-8 bg-secondary/40">
          <SectionHeader eyebrow="Leadership Journey" title="3 years in the social sector." />
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
            <div className="space-y-10">
              {timeline.map((t, i) => (
                <ScrollReveal key={t.year} delay={i * 0.05}>
                  <div
                    className={`relative md:grid md:grid-cols-2 md:gap-12 items-center ${
                      i % 2 ? 'md:[&>*:first-child]:order-2' : ''
                    }`}
                  >
                    <div className="pl-12 md:pl-0 md:pr-12 md:text-right">
                      <p className="text-xs uppercase tracking-widest text-primary">{t.year}</p>
                      <h3 className="font-display text-2xl mt-1">{t.title}</h3>
                      <p className="text-sm text-muted-foreground">{t.org}</p>
                    </div>
                    <div className="pl-12 md:pl-12 mt-3 md:mt-0">
                      <div className="glass rounded-2xl p-5">
                        <p className="text-sm leading-relaxed">{t.body}</p>
                      </div>
                    </div>
                    <span className="absolute left-0 md:left-1/2 top-2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 size-8 rounded-full glass-strong flex items-center justify-center glow-ring">
                      <t.icon className="size-4 text-primary" />
                    </span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ AWARDS ============ */}
        <section id="awards" className="py-24 md:py-32 px-6 lg:px-8">
          <SectionHeader
            eyebrow="Awards & Recognitions"
            title="A wall of trust."
            description="Recognized by speaker platforms, fellowships, foundations and civic networks."
          />
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {awards.map((a, i) => (
              <ScrollReveal key={a.title} delay={i * 0.04}>
                <div className="relative glass rounded-2xl overflow-hidden h-full hover:-translate-y-1 transition">
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-950 text-white">
                    {a.image ? (
                      <>
                        <img
                          src={a.image}
                          alt={`Award photo for ${a.title}`}
                          loading="lazy"
                          className="size-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      </>
                    ) : (
                      <div className="size-full flex flex-col items-center justify-center gap-3 bg-slate-900/90 p-6 text-center">
                        <div className="size-20 rounded-3xl bg-white/10 flex items-center justify-center">
                          <Trophy className="size-8 text-primary" />
                        </div>
                        <p className="text-sm uppercase tracking-widest text-white/70">Image unavailable</p>
                      </div>
                    )}
                    <span className="absolute right-4 top-4 text-[10px] uppercase tracking-widest rounded-full bg-white/10 px-2 py-1 text-white">
                      {a.tag}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="size-11 rounded-xl gradient-accent flex items-center justify-center mb-4">
                      <Trophy className="size-5 text-white" />
                    </div>
                    <h3 className="font-display text-xl mt-3 leading-snug">{a.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{a.org}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ============ VOLUNTEER MAP ============ */}
        <section className="py-24 md:py-32 px-6 lg:px-8 bg-secondary/40">
          <SectionHeader
            eyebrow="Volunteer Footprint"
            title="Where the work happens."
            description="Active volunteer mobilization across Erode, Tiruchengode, Dharmapuri, Salem and Kolli Hills."
          />
          <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3 relative aspect-[4/5] rounded-3xl glass overflow-hidden">
              {/* Stylized India map placeholder using gradients */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,hsl(243_75%_30%/0.4),transparent_60%)]" />
              <svg viewBox="0 0 100 120" className="absolute inset-0 w-full h-full opacity-40 text-primary" fill="currentColor">
                <path d="M30 5 L55 4 L72 12 L80 28 L78 48 L86 60 L78 78 L60 95 L48 112 L40 105 L30 90 L22 78 L18 60 L24 42 L20 22 Z" />
              </svg>
              {volunteerMap.map((m) => (
                <div
                  key={m.city}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ top: m.top, left: m.left }}
                >
                  <div className="relative">
                    <span className="absolute inset-0 size-3 rounded-full bg-indigo-glow/60 animate-ping" />
                    <span className="relative block size-3 rounded-full bg-indigo-glow ring-2 ring-background" />
                  </div>
                  <div className="mt-2 -translate-x-1/2 whitespace-nowrap text-[10px] uppercase tracking-widest text-foreground/80">
                    {m.city}
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:col-span-2 space-y-3">
              {volunteerMap.map((m) => (
                <div key={m.city} className="glass rounded-2xl p-4 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <MapPin className="size-4 text-primary" />
                      <p className="font-medium">{m.city}</p>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {m.programs} programs · {m.volunteers} volunteers
                    </p>
                  </div>
                  <HandHeart className="size-5 text-indigo-glow" />
                </div>
              ))}
            </div>
          </div>
        </section>

        
        

        {/* ============ RESUME ============ */}
        <section id="resume" className="py-24 md:py-32 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto relative overflow-hidden rounded-3xl gradient-hero p-10 md:p-16 text-white">
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <p className="text-xs uppercase tracking-widest text-white/60">Resume · 2026</p>
                <h2 className="font-display text-4xl md:text-5xl mt-3 leading-tight">
                  A two-page case for why I belong on your team.
                </h2>
                <p className="mt-4 text-white/80 max-w-xl">
                  Roles, programs, KPIs and references — formatted for CSR & NGO recruiters at Bhumi, Teach For
                  India, Magic Bus, Hand in Hand India and Fortune-500 CSR foundations.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="/resume.pdf"
                  download="resume.pdf"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-indigo-950 px-6 py-3 text-sm font-semibold hover:bg-white/90 transition"
                >
                  <Download className="size-4" /> Download PDF
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============ GALLERY ============ */}
        <section className="py-24 md:py-32 px-6 lg:px-8">
          <SectionHeader
            eyebrow="Community Gallery"
            title="From the field."
            description="Moments from classrooms, training halls, volunteer drives and partner convenings."
          />
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
            {gallery.map((src, i) => (
              <ScrollReveal key={src + i} delay={i * 0.04}>
                <div
                  className={`overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 shadow-[0_35px_120px_rgba(15,23,42,0.35)] group ${
                    i % 5 === 0 ? 'aspect-[3/4]' : 'aspect-square'
                  }`}
                >
                  <img
                    src={src}
                    alt="Community impact moment"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="high"
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = '/photos/photo-1.jpg';
                    }}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* ============ CONTACT ============ */}
        <section id="contact" className="py-24 md:py-32 px-6 lg:px-8 bg-secondary/40">
          <SectionHeader
            eyebrow="Get in touch"
            title="Let's build the next program."
            description="Recruiting for a senior program / impact / CSR role? I'd love to talk."
          />
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="glass rounded-3xl p-7 space-y-5">
              <div className="flex items-center gap-3">
                <Mail className="size-5 text-primary" />
                <a href={gmailComposeUrl} target="_blank" rel="noreferrer" className="hover:underline">
                  {photographerInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="size-5 text-primary" />
                <span>{photographerInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="size-5 text-primary" />
                <span>{photographerInfo.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="size-5 text-primary" />
                <span>{photographerInfo.availability}</span>
              </div>
              <div className="flex items-center gap-3">
                <BookOpen className="size-5 text-primary" />
                <span>{photographerInfo.education}</span>
              </div>
              <div className="pt-5 border-t border-border flex items-center gap-3">
                <a
                  href={photographerInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:bg-muted transition"
                >
                  <Linkedin className="size-4" /> LinkedIn
                </a>
                <a
                  href={gmailComposeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm hover:opacity-90 transition"
                >
                  <Send className="size-4" /> Email me
                </a>
              </div>
            </div>

            <div className="glass rounded-3xl p-7">
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
