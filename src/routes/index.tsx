import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  ShieldCheck,
  Scan,
  Fingerprint,
  FileCheck2,
  Building2,
  GraduationCap,
  UserCheck,
  Home as HomeIcon,
  Gavel,
  BadgeCheck,
  Lock,
  Cpu,
  Brain,
  Zap,
  Eye,
  Database,
  Activity,
  BarChart3,
  MapPin,
  ArrowRight,
  ArrowUpRight,
  Check,
  Plus,
  Minus,
  Landmark,
  Stethoscope,
  Briefcase,
  Building,
  Wallet,
  Sparkles,
  Radio,
  ChevronRight,
  Mail,
  Chrome,
  Menu,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [{ property: "og:url", content: "/" }],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: LandingPage,
});

const FAQS = [
  {
    q: "How fast can Havn complete a background verification in Nepal?",
    a: "Most verifications complete within 24 hours. Citizenship, identity, and education checks are typically ready in 4–12 hours through direct integrations with authorised registries; police clearance takes 24–72 hours depending on district processing times.",
  },
  {
    q: "Is Havn legally compliant with Nepal's data privacy laws?",
    a: "Yes. Havn operates under Nepal's Individual Privacy Act 2075, ISO 27001-aligned controls, and enterprise data processing agreements. All personally identifiable information is encrypted at rest with AES-256 and in transit with TLS 1.3.",
  },
  {
    q: "Which industries use Havn for verification?",
    a: "Banks, insurance companies, government agencies, hospitals, HR consultancies, real estate firms, educational institutions, fintechs and legal firms rely on Havn to verify identity, credentials and background before onboarding.",
  },
  {
    q: "Can Havn integrate with our existing HRMS or core banking system?",
    a: "Yes. Havn exposes a REST API, webhooks and pre-built connectors for major HRMS, ATS and core banking platforms. Enterprise deployments include a dedicated integration engineer.",
  },
  {
    q: "What happens when a document is forged or tampered with?",
    a: "Our verification engine flags anomalies in fonts, seals, watermarks and metadata. Suspicious cases automatically route to a human reviewer with a detailed evidence trail before a final verdict.",
  },
  {
    q: "Do you offer bulk verification for enterprise onboarding?",
    a: "Yes. Havn handles bulk verification workflows with priority queues, batch dashboards, and dedicated turnaround SLAs for enterprise clients running large hiring or KYC campaigns.",
  },
];

/* ---------------- Preloader ---------------- */
function Preloader({ progress, fadeOut }: { progress: number; fadeOut: boolean }) {
  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#061321] transition-all duration-700 ease-in-out ${
        fadeOut ? "opacity-0 pointer-events-none scale-105" : "opacity-100"
      }`}
    >
      {/* Glow background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Centered Logo */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="relative h-12 w-auto animate-pulse flex items-center justify-center">
          <img
            src="/logo.png"
            alt="Havn Logo"
            className="h-10 w-auto object-contain brightness-110"
          />
        </div>

        {/* Progress Bar Container */}
        <div className="relative w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-emerald-400 transition-all duration-300 ease-out shadow-[0_0_8px_#10b981]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage Counter */}
        <span className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase">
          Initializing &middot; {Math.round(progress)}%
        </span>
      </div>
    </div>
  );
}

function LandingPage() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setFadeOut(true);
          setTimeout(() => setLoading(false), 700); // Match transition duration
          return 100;
        }
        const diff = Math.random() * 15 + 5;
        return Math.min(prev + diff, 100);
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-clip text-foreground">
      {loading && <Preloader progress={progress} fadeOut={fadeOut} />}
      <BackgroundFX />
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Problem />
        <Approach />
        <Services />
        <WhyUs />
        <HowItWorks />
        <AIEngine />
        <Industries />
        <Security />
        <DashboardPreview />
        <TrustStatement />
        <ResearchForm />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}

/* ---------------- Background ---------------- */
function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute grid-bg animate-grid-drift opacity-60" />
      <div
        className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.35), transparent 70%)" }}
      />
      <div
        className="absolute top-1/2 -right-40 h-[500px] w-[500px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.18), transparent 70%)" }}
      />
      <div className="noise-overlay" />
    </div>
  );
}

/* ---------------- Nav ---------------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { href: "#services", label: "Services", icon: Fingerprint },
    { href: "#process", label: "Process", icon: Zap },
    { href: "#industries", label: "Industries", icon: Building },
    { href: "#research", label: "Research", icon: Brain },
  ];
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all ${
            scrolled ? "glass-strong" : "glass"
          }`}
        >
          <a href="#top" className="flex items-center">
            <img src="/logo.png" alt="Havn Logo" className="h-7 w-auto object-contain" />
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Dialog open={signInOpen} onOpenChange={setSignInOpen}>
              {/* <DialogTrigger asChild>
                <button className="hidden cursor-pointer text-sm text-muted-foreground transition hover:text-foreground sm:inline bg-transparent border-0 outline-none">
                  Sign in
                </button>
              </DialogTrigger> */}
              <DialogContent className="glass-strong border-white/10 bg-zinc-950/95 text-white max-w-sm rounded-2xl shadow-2xl backdrop-blur-xl p-6">
                <DialogHeader className="flex flex-col items-center text-center">
                  <Logo />
                  <DialogTitle className="mt-4 text-xl font-bold text-white">
                    Welcome back
                  </DialogTitle>
                  <DialogDescription className="text-xs text-muted-foreground">
                    Sign in to your Havn enterprise portal
                  </DialogDescription>
                </DialogHeader>
                <SignInForm onSuccess={() => setSignInOpen(false)} />
              </DialogContent>
            </Dialog>

            <a
              href="#contact"
              className="btn-primary group hidden sm:inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-sm font-medium"
            >
              Request Verification
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>

            {/* Mobile Navigation Drawer Toggle */}
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <button className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-muted-foreground transition hover:text-white md:hidden cursor-pointer bg-transparent outline-none">
                  <Menu className="h-4 w-4" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="glass-strong border-l border-white/10 bg-zinc-950/95 text-white p-6 flex flex-col justify-between"
              >
                <div>
                  <SheetHeader className="flex flex-row items-center gap-2 border-b border-white/5 pb-5 text-left">
                    <Logo />
                    <div>
                      <SheetTitle className="text-base font-semibold text-white leading-none">
                        Havn
                      </SheetTitle>
                      <SheetDescription className="text-[10px] text-muted-foreground mt-1">
                        Verified Hiring
                      </SheetDescription>
                    </div>
                  </SheetHeader>

                  <nav className="mt-8 flex flex-col gap-2">
                    {links.map((l, i) => (
                      <a
                        key={l.href}
                        href={l.href}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3.5 rounded-xl border border-white/5 bg-white/[0.01] px-4 py-3 text-sm font-medium text-muted-foreground transition hover:border-white/10 hover:bg-white/5 hover:text-white"
                        style={{
                          animation: "rise 0.4s ease forwards",
                          animationDelay: `${i * 0.05}s`,
                          opacity: 0,
                        }}
                      >
                        <div className="grid h-7 w-7 place-items-center rounded-lg bg-primary/10 text-primary">
                          <l.icon className="h-4 w-4" />
                        </div>
                        {l.label}
                      </a>
                    ))}
                  </nav>
                </div>

                <div className="mt-auto border-t border-white/5 pt-5 flex flex-col gap-2.5">
                  {/* <button
                    onClick={() => {
                      setMenuOpen(false);
                      setTimeout(() => setSignInOpen(true), 250);
                    }}
                    className="w-full h-10 border border-white/10 bg-white/5 text-white rounded-xl font-medium text-sm transition hover:bg-white/10 cursor-pointer"
                  >
                    Sign in
                  </button> */}
                  <a
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className="btn-primary flex h-10 items-center justify-center gap-1.5 rounded-xl text-sm font-medium"
                  >
                    Request Verification
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

function SignInForm({ onSuccess }: { onSuccess: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Successfully logged in!");
      onSuccess();
    }, 1200);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-4">
      <div className="space-y-1.5">
        <label htmlFor="signin-email" className="text-xs font-medium text-zinc-300">
          Email address
        </label>
        <div className="relative">
          <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="signin-email"
            type="email"
            placeholder="name@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-white/10 bg-white/5 pl-10 text-white placeholder-muted-foreground focus:ring-1 focus:ring-primary focus-visible:ring-primary focus-visible:ring-1"
            required
            disabled={isLoading}
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label htmlFor="signin-password" className="text-xs font-medium text-zinc-300">
            Password
          </label>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toast.info("Password reset instructions sent to your email (Mock).");
            }}
            className="text-[11px] text-primary hover:underline"
          >
            Forgot?
          </a>
        </div>
        <div className="relative">
          <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="signin-password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-white/10 bg-white/5 pl-10 text-white placeholder-muted-foreground focus:ring-1 focus:ring-primary focus-visible:ring-primary focus-visible:ring-1"
            required
            disabled={isLoading}
          />
        </div>
      </div>

      <div className="flex items-center space-x-2 pt-1">
        <input
          type="checkbox"
          id="signin-remember"
          className="h-3.5 w-3.5 rounded border-white/10 bg-white/5 text-primary focus:ring-0 focus:ring-offset-0"
        />
        <label htmlFor="signin-remember" className="text-xs text-muted-foreground select-none">
          Remember me for 30 days
        </label>
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-blue-600 to-emerald-500 hover:opacity-90 text-white py-2 rounded-xl font-semibold shadow-lg shadow-blue-500/10 transition-all duration-300 h-10 mt-2 cursor-pointer"
      >
        {isLoading ? "Signing in..." : "Sign in to Havn"}
      </Button>

      <div className="relative my-4 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white/5"></div>
        </div>
        <span className="relative bg-zinc-950/95 px-3 text-[10px] uppercase tracking-wider text-muted-foreground">
          or login with
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => {
            setIsLoading(true);
            setTimeout(() => {
              setIsLoading(false);
              toast.success("Successfully logged in via Google!");
              onSuccess();
            }, 1000);
          }}
          className="flex h-9 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] text-xs font-medium hover:bg-white/5 cursor-pointer transition duration-200 text-white"
          disabled={isLoading}
        >
          <Chrome className="h-3.5 w-3.5 text-red-400" />
          Google
        </button>
        <button
          type="button"
          onClick={() => {
            setIsLoading(true);
            setTimeout(() => {
              setIsLoading(false);
              toast.success("Successfully logged in via SSO!");
              onSuccess();
            }, 1000);
          }}
          className="flex h-9 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] text-xs font-medium hover:bg-white/5 cursor-pointer transition duration-200 text-white"
          disabled={isLoading}
        >
          <Landmark className="h-3.5 w-3.5 text-emerald-400" />
          SSO
        </button>
      </div>

      <p className="mt-4 text-center text-[11px] text-muted-foreground">
        Don't have an enterprise account?{" "}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            onSuccess();
            const element = document.getElementById("contact");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="text-white hover:underline cursor-pointer"
        >
          Contact Sales
        </a>
      </p>
    </form>
  );
}

function Logo() {
  return (
    <div className="flex items-center text-emerald-400">
      <Check className="h-5 w-5 stroke-[3px]" />
    </div>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="top" className="relative pt-32 sm:pt-40">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground animate-rise">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              BACKGROUND VERIFICATION · NEPAL
            </div>

            <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl animate-rise text-white">
              Building Trust in <br />
              <span className="text-gradient-brand">Nepal's Workforce</span>
            </h1>

            <p
              className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground animate-rise"
              style={{ animationDelay: ".1s" }}
            >
              Reliable employee and candidate background verification for companies making important hiring decisions.
            </p>

            <div
              className="mt-8 flex flex-wrap items-center gap-3 animate-rise"
              style={{ animationDelay: ".2s" }}
            >
              <a
                href="#contact"
                className="btn-primary group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold"
              >
                Request Verification
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="btn-ghost inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium"
              >
                Talk to an Expert
              </a>
            </div>

            <p className="mt-6 text-sm text-muted-foreground animate-rise" style={{ animationDelay: ".25s" }}>
              Currently onboarding early partner companies in Kathmandu.
            </p>
          </div>

          <div className="lg:col-span-5">
            <CaseStatusCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStatusCard() {
  const verifications = [
    { label: "Employment History", status: "Confirmed" },
    { label: "Education Record", status: "Confirmed" },
    { label: "Identity Document", status: "Confirmed" },
    { label: "Address", status: "Verifying" },
    { label: "Reference Check", status: "Verifying" },
  ];

  return (
    <div className="relative animate-rise" style={{ animationDelay: ".15s" }}>
      {/* pulse rings behind */}
      <div className="pointer-events-none absolute -inset-8">
        <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30 animate-pulse-ring" />
        <div
          className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/30 animate-pulse-ring"
          style={{ animationDelay: "1.2s" }}
        />
      </div>

      <div className="relative overflow-hidden rounded-3xl bg-white p-7 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-slate-800 max-w-md mx-auto">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <span className="font-sans text-xs font-bold text-slate-400 uppercase tracking-wider">
            CASE #VR-2026-0417
          </span>
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
            In Review
          </span>
        </div>

        <ul className="mt-4 divide-y divide-slate-100">
          {verifications.map((item) => (
            <li key={item.label} className="flex items-center justify-between py-3.5">
              <span className="text-sm font-semibold text-slate-700">{item.label}</span>
              <span
                className={`text-sm font-bold ${
                  item.status === "Confirmed" ? "text-emerald-600" : "text-slate-400"
                }`}
              >
                {item.status}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-4 border-t border-slate-100 pt-4 flex items-center justify-between text-xs text-slate-400 font-bold">
          <span>Reviewed by verification analyst</span>
          <span>Source-checked</span>
        </div>
      </div>
    </div>
  );
}

/* ---------------- The Problem ---------------- */
function Problem() {
  const problems = [
    {
      title: "Inflated experience",
      desc: "Job titles, durations, and responsibilities that don't match what previous employers actually confirm.",
    },
    {
      title: "Unverifiable credentials",
      desc: "Certificates and degrees that are difficult to confirm without contacting the issuing institution directly.",
    },
    {
      title: "Manual effort, every time",
      desc: "HR teams spend hours calling previous employers and references — work that pulls them away from hiring itself.",
    },
  ];

  return (
    <section className="relative mx-auto mt-32 max-w-7xl px-4">
      <SectionHeader
        eyebrow="The Problem"
        title="Hiring mistakes cost businesses."
        sub="Fake experience, incorrect information, and unverified backgrounds create risk for every company that hires without independently checking what a candidate has claimed."
      />
      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {problems.map((p) => (
          <article
            key={p.title}
            className="card-surface relative overflow-hidden p-6 border-l-4 border-l-blue-500"
          >
            <h3 className="text-lg font-semibold tracking-tight text-white">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------------- The Approach ---------------- */
function Approach() {
  const techHandles = [
    "Case intake and tracking",
    "Document collection",
    "Status updates",
    "Report generation",
    "Pattern checks for inconsistencies",
  ];

  const teamHandles = [
    "Calling previous employers",
    "Confirming with institutions",
    "Reference conversations",
    "Reviewing every report before delivery",
    "Final sign-off",
  ];

  return (
    <section id="process" className="relative mx-auto mt-32 max-w-7xl px-4">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <div className="text-xs uppercase tracking-[0.25em] text-primary">The Approach</div>
          <h2 className="mt-3 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl text-gradient">
            Structured verification, not guesswork.
          </h2>
          <p className="mt-5 max-w-xl text-muted-foreground">
            Havn helps organizations verify candidate information through a structured verification
            workflow — built on real sources and reviewed by people, not just software.
          </p>
        </div>

        <div className="lg:col-span-6">
          <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl border border-white/10 bg-white shadow-2xl overflow-hidden">
            {/* Technology handles */}
            <div className="p-6 bg-white text-slate-800">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                Technology Handles
              </h3>
              <ul className="space-y-3">
                {techHandles.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm font-medium text-slate-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Our team handles */}
            <div className="p-6 bg-[#0c1e30] text-white flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                  Our Team Handles
                </h3>
                <ul className="space-y-3">
                  {teamHandles.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm font-medium text-zinc-100">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Trust Strip ---------------- */
function TrustStrip() {
  const items = [
    "Government-ready process",
    "Enterprise-grade security",
    "24-hour turnaround",
    "Data privacy compliant",
    "ISO 27001 aligned",
    "Human + AI review",
    "Nepal Rastra Bank ready",
  ];
  return (
    <section
      aria-label="Trust indicators"
      className="relative mt-24 border-y border-white/[0.06] bg-white/[0.015] py-4"
    >
      <div className="mx-auto max-w-7xl overflow-hidden px-4">
        <div className="flex gap-10 whitespace-nowrap animate-marquee">
          {[...items, ...items].map((t, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground"
            >
              <Check className="h-3.5 w-3.5 text-emerald-400" /> {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */
function Services() {
  const services = [
    {
      icon: Briefcase,
      title: "Employment Verification",
      desc: "Company, designation, employment dates, and experience claims confirmed with previous employers.",
      accent: "from-blue-500/40 to-blue-500/0",
    },
    {
      icon: GraduationCap,
      title: "Education Verification",
      desc: "Degree, certificate, and institution validation directly with the issuing college or university.",
      accent: "from-emerald-500/40 to-emerald-500/0",
    },
    {
      icon: Fingerprint,
      title: "Identity Verification",
      desc: "Citizenship, PAN, and other government-issued document validation where legally accessible.",
      accent: "from-indigo-500/40 to-indigo-500/0",
    },
    {
      icon: MapPin,
      title: "Address Verification",
      desc: "Confirmation of stated residential address against available records and documentation.",
      accent: "from-cyan-500/40 to-cyan-500/0",
    },
    {
      icon: UserCheck,
      title: "Reference Check",
      desc: "Direct conversations with professional references to confirm work ethic and conduct.",
      accent: "from-violet-500/40 to-violet-500/0",
    },
    {
      icon: Building2,
      title: "Custom Business Verification",
      desc: "Tailored checks for vendor, partner, or business-entity verification on request.",
      accent: "from-emerald-500/40 to-teal-500/0",
    },
  ];
  return (
    <section id="services" className="relative mx-auto mt-32 max-w-7xl px-4">
      <SectionHeader
        eyebrow="Verification Services"
        title="What we verify"
        sub="Six background verification services built for candidate screening and compliance onboarding in Nepal."
      />
      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <article key={s.title} className="card-surface group relative overflow-hidden p-6">
            <div
              className={`pointer-events-none absolute -inset-40 opacity-0 blur-3xl transition duration-700 group-hover:opacity-100 bg-gradient-to-br ${s.accent}`}
            />
            <div className="relative">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-primary transition group-hover:border-primary/40 group-hover:text-white">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              <div className="mt-6 flex items-center justify-between text-sm">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  Nepal coverage
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Why Us — Bento ---------------- */
function WhyUs() {
  return (
    <section className="relative mx-auto mt-32 max-w-7xl px-4">
      <SectionHeader
        eyebrow="Why Enterprises Choose Havn"
        title="Built for scale, audited for trust"
        sub="A verification stack designed with the operational and regulatory reality of Nepali enterprises."
      />
      <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-4">
        <Bento
          className="md:col-span-3 md:row-span-2"
          title="Tech-enabled verification workflow"
          desc="Structured data extraction, case tracking, and automatic checks integrated with expert human validation."
        >
          <NeuralViz />
        </Bento>
        <Bento
          className="md:col-span-3 md:row-span-2"
          title="Human review, on every edge case"
          desc="Automation drives speed. Certified reviewers make the final call on anomalies, protecting you from false positives."
        >
          <ReviewerViz />
        </Bento>
        <Bento
          className="md:col-span-2 md:row-span-2"
          title="AES-256 encryption"
          desc="Data encrypted at rest and in transit with tenant-isolated keys."
        >
          <Lock className="h-10 w-10 text-emerald-400" />
        </Bento>
        <Bento
          className="md:col-span-2 md:row-span-2"
          title="Compliance-ready"
          desc="Aligned with Nepal Privacy Act 2075, ISO 27001 controls, NRB & IRDA guidance."
        >
          <div className="grid grid-cols-2 gap-2">
            {["ISO 27001", "NRB", "Privacy Act", "SOC 2"].map((t) => (
              <div
                key={t}
                className="rounded-md border border-white/10 bg-white/5 px-2 py-1.5 text-center text-[11px] font-medium"
              >
                {t}
              </div>
            ))}
          </div>
        </Bento>
        <Bento
          className="md:col-span-2 md:row-span-2"
          title="Enterprise APIs"
          desc="REST, webhooks, HRMS & core-banking connectors."
        >
          <ApiViz />
        </Bento>
      </div>
    </section>
  );
}

function Bento({
  children,
  title,
  desc,
  className = "",
}: {
  children?: React.ReactNode;
  title: string;
  desc: string;
  className?: string;
}) {
  return (
    <div
      className={`card-surface group relative flex flex-col justify-between overflow-hidden p-6 ${className}`}
    >
      <div className="min-h-24">{children}</div>
      <div className="mt-4">
        <h3 className="text-base font-semibold tracking-tight">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}

function NeuralViz() {
  const nodes = [
    { x: 15, y: 30 },
    { x: 15, y: 60 },
    { x: 15, y: 90 },
    { x: 50, y: 20 },
    { x: 50, y: 55 },
    { x: 50, y: 90 },
    { x: 50, y: 125 },
    { x: 85, y: 40 },
    { x: 85, y: 75 },
    { x: 85, y: 110 },
  ];
  const layerA = nodes.slice(0, 3);
  const layerB = nodes.slice(3, 7);
  const layerC = nodes.slice(7, 10);
  return (
    <svg viewBox="0 0 100 140" className="h-32 w-full">
      <defs>
        <linearGradient id="edge" x1="0" x2="1">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#10B981" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      {layerA.map((a, i) =>
        layerB.map((b, j) => (
          <line
            key={`ab${i}${j}`}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="url(#edge)"
            strokeWidth="0.35"
            opacity="0.6"
          />
        )),
      )}
      {layerB.map((a, i) =>
        layerC.map((b, j) => (
          <line
            key={`bc${i}${j}`}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="url(#edge)"
            strokeWidth="0.35"
            opacity="0.6"
          />
        )),
      )}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r="2"
          fill="#fff"
          className="animate-glow-pulse"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </svg>
  );
}

function ReviewerViz() {
  return (
    <div className="relative h-32 w-full">
      <div className="absolute inset-0 flex items-center justify-center gap-3">
        {[Brain, Eye, UserCheck].map((I, i) => (
          <div
            key={i}
            className="glass grid h-16 w-16 place-items-center rounded-xl animate-float-slow"
            style={{ animationDelay: `${i * 0.4}s` }}
          >
            <I className="h-6 w-6 text-primary" />
          </div>
        ))}
      </div>
    </div>
  );
}

function ApiViz() {
  return (
    <div className="rounded-lg border border-white/10 bg-black/30 p-3 font-mono text-[11px] leading-relaxed">
      <div className="text-emerald-400">POST /v1/verify</div>
      <div className="text-muted-foreground">{`{ "type": "citizenship",`}</div>
      <div className="text-muted-foreground">{`  "id": "12-01-73-04482" }`}</div>
      <div className="mt-1 text-primary">{`→ 200  verified: true`}</div>
    </div>
  );
}

/* ---------------- How It Works ---------------- */
function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "Submit candidate details",
      desc: "Share the information you'd like verified through a simple request form.",
    },
    {
      title: "Verification begins",
      desc: "Your case is logged and assigned to a verification analyst.",
    },
    {
      title: "Source validation",
      desc: "We contact employers, institutions, and references directly.",
    },
    {
      title: "Quality review",
      desc: "Findings are cross-checked before anything is finalized.",
    },
    {
      title: "Verification report delivered",
      desc: "You receive a clear, structured report ready for your hiring decision.",
    },
  ];

  const visualData = [
    // Step 1
    (
      <div className="space-y-4 animate-fade-in">
        <div className="flex items-center justify-between border-b border-white/5 pb-3">
          <span className="text-xs uppercase tracking-wider text-muted-foreground font-mono">INTAKE PORTAL</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/10 px-2 py-0.5 text-[10px] text-blue-400 font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400 animate-pulse" /> Ready
          </span>
        </div>
        <div className="space-y-3">
          <div>
            <div className="text-[10px] uppercase text-zinc-400 tracking-wider">Candidate Name</div>
            <div className="mt-1 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-1.5 text-xs text-white">
              Aayush Shrestha
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase text-zinc-400 tracking-wider">Position Claimed</div>
            <div className="mt-1 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-1.5 text-xs text-white">
              Senior React Developer
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase text-zinc-400 tracking-wider">Submitted Attachments</div>
            <div className="mt-2 space-y-1.5">
              <div className="flex items-center justify-between rounded-lg bg-emerald-500/5 border border-emerald-500/10 px-3 py-1.5 text-[11px] text-emerald-400">
                <span className="truncate font-mono">kathmandu_uni_degree.pdf</span>
                <Check className="h-3 w-3 shrink-0 stroke-[3px]" />
              </div>
              <div className="flex items-center justify-between rounded-lg bg-emerald-500/5 border border-emerald-500/10 px-3 py-1.5 text-[11px] text-emerald-400">
                <span className="truncate font-mono">experience_letter.pdf</span>
                <Check className="h-3 w-3 shrink-0 stroke-[3px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    // Step 2
    (
      <div className="space-y-4 animate-fade-in">
        <div className="flex items-center justify-between border-b border-white/5 pb-3">
          <span className="text-xs uppercase tracking-wider text-muted-foreground font-mono">WORKSPACE ALLOCATION</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-yellow-500/10 px-2 py-0.5 text-[10px] text-yellow-400 font-medium">
            Assigned
          </span>
        </div>
        <div className="font-mono text-xs text-zinc-400 space-y-2">
          <div className="flex justify-between border-b border-white/5 pb-1">
            <span>CASE ID:</span>
            <span className="text-white">#VR-2026-0417</span>
          </div>
          <div className="flex justify-between border-b border-white/5 pb-1">
            <span>LEAD ANALYST:</span>
            <span className="text-white">Nabin Rajbhandari</span>
          </div>
          <div className="flex justify-between border-b border-white/5 pb-1">
            <span>DATA STORAGE:</span>
            <span className="text-emerald-400">SECURE VAULT</span>
          </div>
          <div className="flex justify-between">
            <span>ACTIVITY LOGGER:</span>
            <span className="text-blue-400">INITIATED</span>
          </div>
          <div className="mt-3 rounded-lg bg-white/[0.01] border border-white/5 p-3 text-[10px] text-muted-foreground leading-relaxed">
            Case files isolated. Analyst assigned to contact university administrator and verify registry signatures.
          </div>
        </div>
      </div>
    ),
    // Step 3
    (
      <div className="space-y-4 animate-fade-in">
        <div className="flex items-center justify-between border-b border-white/5 pb-3">
          <span className="text-xs uppercase tracking-wider text-muted-foreground font-mono">SOURCE CHECK STATUS</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/10 px-2 py-0.5 text-[10px] text-blue-400 font-medium">
            Verifying
          </span>
        </div>
        <div className="space-y-2.5">
          <div className="rounded-lg border border-white/5 bg-white/[0.02] p-2.5">
            <div className="flex items-center justify-between text-xs text-white">
              <span className="font-semibold">Kathmandu University Registry</span>
              <span className="text-emerald-400 font-mono text-[10px] uppercase font-bold">MATCHED</span>
            </div>
            <p className="mt-1 text-[10px] text-muted-foreground">Degree credentials verified against central office registers.</p>
          </div>
          <div className="rounded-lg border border-white/5 bg-white/[0.02] p-2.5">
            <div className="flex items-center justify-between text-xs text-white">
              <span className="font-semibold">Nimble Technologies HR</span>
              <span className="text-emerald-400 font-mono text-[10px] uppercase font-bold">CONFIRMED</span>
            </div>
            <p className="mt-1 text-[10px] text-muted-foreground">Job title, tenure dates, and exit details validated by phone check.</p>
          </div>
        </div>
      </div>
    ),
    // Step 4
    (
      <div className="space-y-4 animate-fade-in">
        <div className="flex items-center justify-between border-b border-white/5 pb-3">
          <span className="text-xs uppercase tracking-wider text-muted-foreground font-mono">QUALITY CHECKLIST</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-purple-500/10 px-2 py-0.5 text-[10px] text-purple-400 font-medium">
            QC Review
          </span>
        </div>
        <div className="space-y-2">
          {[
            { t: "Verification discrepancy check", s: "Passed" },
            { t: "University registrar signature hash", s: "Passed" },
            { t: "Employment history data audit", s: "Passed" },
            { t: "Local reference statement alignment", s: "Approved" },
          ].map((item) => (
            <div key={item.t} className="flex items-center justify-between border-b border-white/5 pb-1.5 text-xs">
              <span className="text-zinc-400">{item.t}</span>
              <span className="text-emerald-400 font-semibold">{item.s}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    // Step 5
    (
      <div className="text-center py-6 animate-fade-in space-y-4">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 shadow-lg shadow-emerald-500/5">
          <Check className="h-6 w-6 stroke-[3px]" />
        </div>
        <div>
          <h4 className="text-base font-bold text-white">Verification Report Complete</h4>
          <p className="mt-1.5 text-xs text-muted-foreground max-w-xs mx-auto leading-relaxed">
            All details verified against official sources. A secure, cryptographically signed report has been finalized.
          </p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 px-4 py-2.5 text-xs font-semibold text-white hover:opacity-90 shadow-lg shadow-blue-500/10 cursor-pointer">
          Download PDF Report
        </button>
      </div>
    ),
  ];

  return (
    <section id="process" className="relative mx-auto mt-32 max-w-7xl px-4">
      <SectionHeader
        eyebrow="How It Works"
        title="A verification, not a shortcut."
        sub="A detailed look at our thorough background verification lifecycle."
      />

      <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
        {/* Interactive Steps List */}
        <div className="lg:col-span-5 space-y-3 lg:space-y-0 lg:flex lg:flex-col lg:justify-between h-full">
          {steps.map((s, i) => {
            const isActive = activeStep === i;
            return (
              <button
                key={s.title}
                onClick={() => setActiveStep(i)}
                onMouseEnter={() => setActiveStep(i)}
                className={`w-full text-left flex items-start gap-4 p-4 rounded-xl border transition-all duration-300 outline-none ${
                  isActive
                    ? "bg-white/[0.04] border-white/15 shadow-lg shadow-black/10"
                    : "bg-white/[0.01] border-white/5 hover:bg-white/[0.02] hover:border-white/10"
                }`}
              >
                <div
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border text-xs font-semibold transition-all duration-300 ${
                    isActive
                      ? "border-emerald-500 bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
                      : "border-white/10 bg-zinc-950 text-zinc-400"
                  }`}
                >
                  {i + 1}
                </div>
                <div>
                  <h3
                    className={`text-base font-semibold transition-colors duration-300 ${
                      isActive ? "text-white" : "text-zinc-400"
                    }`}
                  >
                    {s.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Live Visual Board */}
        <div className="lg:col-span-7 flex flex-col">
          {/* Card Container on Desktop */}
          <div className="glass-strong rounded-3xl border border-white/10 p-6 sm:p-8 shadow-2xl relative overflow-hidden flex-1 flex flex-col justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-emerald-500/5 pointer-events-none" />
            <div className="relative z-10">
              {visualData[activeStep]}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- AI Engine ---------------- */
function AIEngine() {
  const modules = [
    { icon: Scan, title: "OCR", desc: "Nepali & English document parsing" },
    { icon: Eye, title: "Face Match", desc: "Liveness + biometric similarity" },
    { icon: Sparkles, title: "Forgery Detection", desc: "Font, seal, watermark analysis" },
    { icon: Activity, title: "Risk Analysis", desc: "Composite score across signals" },
    { icon: Fingerprint, title: "Identity Matching", desc: "Cross-source identity graph" },
    { icon: Landmark, title: "Registry Validation", desc: "Authorised government registries" },
    { icon: FileCheck2, title: "Document Intelligence", desc: "Field-level structuring" },
    { icon: ShieldCheck, title: "Compliance Engine", desc: "Policy checks & audit trail" },
  ];
  return (
    <section id="research" className="relative mx-auto mt-32 max-w-7xl px-4">
      <SectionHeader
        eyebrow="Havn Verification Engine"
        title="Eight check categories. One trust decision."
        sub="Our platform combines document intelligence, biometrics, and manual validation into a single verified report."
      />
      <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <EngineOrbit />
        </div>
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {modules.map((m) => (
              <div key={m.title} className="card-surface group flex items-start gap-3 p-4">
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 text-primary">
                  <m.icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold">{m.title}</div>
                  <div className="mt-0.5 text-xs text-muted-foreground">{m.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EngineOrbit() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      {[220, 300, 380].map((s, i) => (
        <div
          key={s}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
          style={{ width: s, height: s }}
        >
          <div
            className="absolute inset-0 rounded-full border border-primary/20 animate-glow-pulse"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
        </div>
      ))}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="grid h-24 w-24 place-items-center rounded-2xl glow-ring"
          style={{ background: "linear-gradient(135deg,#2563EB,#10B981)" }}
        >
          <Brain className="h-10 w-10 text-white" />
        </div>
      </div>
      {[
        { i: Fingerprint, x: "80%", y: "12%" },
        { i: Eye, x: "92%", y: "55%" },
        { i: Landmark, x: "72%", y: "88%" },
        { i: FileCheck2, x: "20%", y: "88%" },
        { i: Lock, x: "6%", y: "50%" },
        { i: Scan, x: "18%", y: "14%" },
      ].map(({ i: Icon, x, y }, k) => (
        <div
          key={k}
          className="glass absolute grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-xl animate-float-slow"
          style={{ left: x, top: y, animationDelay: `${k * 0.4}s` }}
        >
          <Icon className="h-5 w-5 text-primary" />
        </div>
      ))}
    </div>
  );
}

/* ---------------- Industries ---------------- */
function Industries() {
  const industries = [
    { icon: Cpu, name: "Technology Companies" },
    { icon: Briefcase, name: "Recruitment Firms" },
    { icon: Building2, name: "BPO & Outsourcing" },
    { icon: Landmark, name: "Banks & Finance" },
    { icon: Briefcase, name: "Growing Businesses" },
  ];
  return (
    <section id="industries" className="relative mx-auto mt-32 max-w-7xl px-4">
      <SectionHeader
        eyebrow="Who We Work With"
        title="Built for organizations that hire often"
        sub="Verification tailored for the needs of high-growth teams and regulated sectors in Nepal."
      />
      <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
        {industries.map((i) => (
          <div
            key={i.name}
            className="card-surface flex flex-col items-center justify-center p-6 text-center"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-primary">
              <i.icon className="h-5 w-5" />
            </div>
            <div className="mt-3 text-sm font-medium">{i.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Security ---------------- */
function Security() {
  const features = [
    { icon: Lock, title: "AES-256 encryption at rest" },
    { icon: ShieldCheck, title: "TLS 1.3 in transit" },
    { icon: Database, title: "Tenant-isolated data vaults" },
    { icon: Activity, title: "Immutable audit logs" },
    { icon: UserCheck, title: "Role-based access control" },
    { icon: Eye, title: "Privacy-first architecture" },
  ];
  return (
    <section id="security" className="relative mx-auto mt-32 max-w-7xl px-4">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <BigLock />
        </div>
        <div className="lg:col-span-7">
          <div className="text-xs uppercase tracking-widest text-primary">Security</div>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl text-gradient">
            Bank-grade infrastructure. Government-ready controls.
          </h2>
          <p className="mt-5 max-w-xl text-muted-foreground">
            Every verification runs on isolated infrastructure with defence-in-depth controls,
            immutable audit trails, and access governance that satisfies internal audit and
            regulator review alike.
          </p>
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {features.map((f) => (
              <li key={f.title} className="glass flex items-center gap-3 rounded-xl px-4 py-3">
                <div className="grid h-8 w-8 place-items-center rounded-md bg-primary/15 text-primary">
                  <f.icon className="h-4 w-4" />
                </div>
                <span className="text-sm">{f.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function BigLock() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm">
      <div className="absolute inset-8 rounded-full border border-white/10 animate-glow-pulse" />
      <div
        className="absolute inset-16 rounded-full border border-primary/30 animate-glow-pulse"
        style={{ animationDelay: ".3s" }}
      />
      <div
        className="absolute inset-24 rounded-full border border-emerald-400/30 animate-glow-pulse"
        style={{ animationDelay: ".6s" }}
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div
          className="grid h-28 w-28 place-items-center rounded-3xl glow-ring"
          style={{ background: "linear-gradient(135deg,#2563EB,#10B981)" }}
        >
          <Lock className="h-12 w-12 text-white" />
        </div>
      </div>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 200">
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="rgba(37,99,235,.5)"
          strokeWidth="1"
          className="animate-dash"
        />
      </svg>
    </div>
  );
}

/* ---------------- Dashboard preview ---------------- */
function DashboardPreview() {
  return (
    <section className="relative mx-auto mt-32 max-w-7xl px-4">
      <SectionHeader
        eyebrow="Enterprise Dashboard"
        title="Command center for your verification operations"
        sub="Live queue, analytics, risk maps and activity feed — everything your compliance team needs on one screen."
      />
      <div className="mt-14 glass-strong glow-ring relative overflow-hidden rounded-3xl p-4 sm:p-6">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          {/* Queue */}
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 lg:col-span-5">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold">Verification queue</div>
              <span className="text-[10px] uppercase tracking-widest text-emerald-400">Live</span>
            </div>
            <ul className="mt-3 space-y-2">
              {[
                { n: "Nabin K.C.", t: "Citizenship", s: "Verified", c: "text-emerald-400" },
                { n: "Sneha Rai", t: "Education", s: "In review", c: "text-yellow-300" },
                { n: "Rohit Adhikari", t: "Property", s: "Verified", c: "text-emerald-400" },
                { n: "Pooja Shrestha", t: "Police", s: "In progress", c: "text-primary" },
                { n: "Bikash Tamang", t: "CRC", s: "Verified", c: "text-emerald-400" },
              ].map((r) => (
                <li
                  key={r.n}
                  className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2"
                >
                  <div>
                    <div className="text-sm">{r.n}</div>
                    <div className="text-[11px] text-muted-foreground">{r.t}</div>
                  </div>
                  <span className={`text-xs font-medium ${r.c}`}>{r.s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Analytics + chart */}
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 lg:col-span-4">
            <div className="text-sm font-semibold">This month</div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <Metric label="Verifications" value="12,438" delta="+18%" />
              <Metric label="Avg TAT" value="18h" delta="-6%" />
              <Metric label="Flag rate" value="2.1%" delta="-0.3%" />
              <Metric label="Auto-clear" value="82%" delta="+4%" />
            </div>
            <BarChart />
          </div>

          {/* Map + activity */}
          <div className="flex flex-col gap-4 lg:col-span-3">
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <MapPin className="h-4 w-4 text-primary" /> Coverage · Nepal
              </div>
              <NepalMap />
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <div className="text-sm font-semibold">Activity</div>
              <ul className="mt-2 space-y-1.5 text-[11px] text-muted-foreground">
                <li>✓ Citizenship verified · 2m ago</li>
                <li>✓ Report signed · 4m ago</li>
                <li>⟳ Registry sync · 7m ago</li>
                <li>✓ Property record fetched · 12m</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value, delta }: { label: string; value: string; delta: string }) {
  const up = delta.startsWith("+");
  return (
    <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="mt-1 text-lg font-semibold">{value}</div>
      <div className={`text-[10px] ${up ? "text-emerald-400" : "text-primary"}`}>{delta}</div>
    </div>
  );
}

function BarChart() {
  const bars = [40, 62, 48, 78, 55, 90, 72, 84, 68, 96, 80, 92];
  return (
    <div className="mt-4 flex h-24 items-end gap-1.5">
      {bars.map((b, i) => (
        <div
          key={i}
          className="flex-1 rounded-t"
          style={{
            height: `${b}%`,
            background: "linear-gradient(180deg,#60a5fa,#2563EB)",
            opacity: 0.4 + (i / bars.length) * 0.6,
          }}
        />
      ))}
    </div>
  );
}

function NepalMap() {
  // Stylised map
  return (
    <svg viewBox="0 0 200 100" className="mt-3 h-24 w-full">
      <defs>
        <linearGradient id="mg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2563EB" stopOpacity=".55" />
          <stop offset="100%" stopColor="#10B981" stopOpacity=".35" />
        </linearGradient>
      </defs>
      <path
        d="M10 55 C 30 30, 55 25, 80 32 C 105 38, 130 30, 155 40 C 175 48, 190 55, 192 70 C 170 78, 140 82, 110 78 C 80 74, 55 82, 30 78 C 18 76, 10 70, 10 55 Z"
        fill="url(#mg)"
        stroke="rgba(255,255,255,.15)"
      />
      {[
        [50, 55],
        [90, 50],
        [130, 55],
        [70, 65],
        [155, 60],
        [110, 62],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="2" fill="#fff" />
          <circle
            cx={x}
            cy={y}
            r="6"
            fill="none"
            stroke="#10B981"
            opacity=".4"
            className="animate-glow-pulse"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        </g>
      ))}
    </svg>
  );
}

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  const items = [
    {
      quote:
        "Sentrust cut our onboarding time from 9 days to under 24 hours across 42 branches — with zero compliance escalations.",
      author: "Head of HR",
      org: "Tier-1 Commercial Bank, Kathmandu",
    },
    {
      quote:
        "The only vendor whose forgery detection consistently catches manipulated academic transcripts we would have missed manually.",
      author: "Chief Compliance Officer",
      org: "National Insurance Group",
    },
    {
      quote:
        "Sentrust's API let us wire verification into our loan flow in a week. Approvals are faster and defaults are down.",
      author: "CTO",
      org: "Digital Lending Fintech",
    },
    {
      quote:
        "For property due diligence across districts, nothing else comes close. The reports are audit-grade.",
      author: "Partner",
      org: "Legal Advisory Firm",
    },
  ];
  return (
    <section className="relative mx-auto mt-32 max-w-7xl px-4">
      <SectionHeader
        eyebrow="Voices from the field"
        title="Enterprises trust Sentrust with their most sensitive decisions"
      />
      <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
        {items.map((t) => (
          <figure key={t.author} className="card-surface p-6">
            <div className="flex items-center gap-2 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-sm">
                  ★
                </span>
              ))}
            </div>
            <blockquote className="mt-4 text-lg leading-relaxed text-foreground/90">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-xs font-semibold">
                {t.author
                  .split(" ")
                  .map((w) => w[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <div>
                <div className="text-sm font-medium">{t.author}</div>
                <div className="text-xs text-muted-foreground">{t.org}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Logo marquee */}
      <div className="mt-10 overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.015] py-6">
        <div className="flex items-center gap-16 whitespace-nowrap animate-marquee px-8 opacity-60">
          {[...Array(2)].flatMap((_, k) =>
            [
              "HIMALAYAN BANK",
              "EVEREST INSURANCE",
              "NEPAL FINANCE",
              "SUMMIT HR",
              "KATHMANDU LEGAL",
              "ANNAPURNA HEALTH",
              "LUMBINI TRUST",
              "POKHARA CAPITAL",
            ].map((n, i) => (
              <div
                key={`${k}-${i}`}
                className="text-xs uppercase tracking-[0.35em] text-muted-foreground"
              >
                {n}
              </div>
            )),
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Trust Statement Callout ---------------- */
function TrustStatement() {
  return (
    <section className="relative mx-auto mt-32 max-w-5xl px-4 text-center">
      <div className="glass-strong glow-ring rounded-3xl p-8 sm:p-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 opacity-30 pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient-brand leading-tight">
            Built for Nepal's hiring ecosystem.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed">
            Verification you can hand to a hiring manager, a compliance officer, or a client — and stand behind.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Early Access & Research Form ---------------- */
function ResearchForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [industry, setIndustry] = useState("");
  const [currentProcess, setCurrentProcess] = useState("");
  const [willingness, setWillingness] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !company || !email) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setIsLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/xjgqzweg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          company,
          role,
          industry,
          current_process: currentProcess,
          willingness,
          email,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        toast.success("Thank you for your feedback!");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="research" className="relative mx-auto mt-32 max-w-7xl px-4">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-primary">Early Access & Research</span>
            <h2 className="text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl text-gradient">
              We're building this with real HR teams.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Havn is at an early stage. If you're hiring in Nepal, we'd like to understand how your team currently handles background verification — and, if it's useful, offer an early verification at no cost in exchange for your feedback.
            </p>
          </div>

          <div className="mt-8 space-y-4 border-t border-white/5 pt-6">
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="h-3 w-3 stroke-[3px]" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Influence the Roadmap</h4>
                <p className="text-xs text-muted-foreground">Help shape candidate screening tools built specifically for Nepal.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="h-3 w-3 stroke-[3px]" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Free Verification Trial</h4>
                <p className="text-xs text-muted-foreground">Get your first few candidate checks completely free of charge.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="h-3 w-3 stroke-[3px]" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Direct Expert Access</h4>
                <p className="text-xs text-muted-foreground">Work closely with our local verification analysts and developers.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="glass-strong rounded-2xl border border-white/10 p-6 sm:p-8 shadow-2xl relative">
            {isSuccess ? (
              <div className="text-center py-10 animate-rise">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <Check className="h-6 w-6 stroke-[3px]" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-white">Thank you!</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We've received your details and will reach out to you soon.
                </p>
                <Button
                  onClick={() => setIsSuccess(false)}
                  className="mt-6 bg-white/5 border border-white/10 text-white hover:bg-white/10 rounded-xl cursor-pointer"
                >
                  Submit Another Response
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="research-name" className="text-xs font-medium text-zinc-300">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <Input
                      id="research-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="border-white/10 bg-white/5 text-white placeholder-muted-foreground focus:ring-1 focus:ring-primary focus-visible:ring-primary focus-visible:ring-1"
                      required
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="research-company" className="text-xs font-medium text-zinc-300">
                      Company <span className="text-red-400">*</span>
                    </label>
                    <Input
                      id="research-company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="border-white/10 bg-white/5 text-white placeholder-muted-foreground focus:ring-1 focus:ring-primary focus-visible:ring-primary focus-visible:ring-1"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="research-role" className="text-xs font-medium text-zinc-300">
                      Role
                    </label>
                    <Input
                      id="research-role"
                      placeholder="e.g. HR Manager"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="border-white/10 bg-white/5 text-white placeholder-muted-foreground focus:ring-1 focus:ring-primary focus-visible:ring-primary focus-visible:ring-1"
                      disabled={isLoading}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="research-industry" className="text-xs font-medium text-zinc-300">
                      Industry
                    </label>
                    <select
                      id="research-industry"
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      style={{
                        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(161,161,170)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 12px center",
                        backgroundSize: "16px",
                      }}
                      className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 pl-3 pr-10 text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary focus-visible:ring-primary focus-visible:ring-1 appearance-none cursor-pointer"
                      disabled={isLoading}
                    >
                      <option value="" className="bg-[#0c1e30]">Select one</option>
                      <option value="IT Company" className="bg-[#0c1e30]">IT Company</option>
                      <option value="BPO / Outsourcing" className="bg-[#0c1e30]">BPO / Outsourcing</option>
                      <option value="Recruitment Agency" className="bg-[#0c1e30]">Recruitment Agency</option>
                      <option value="Bank / Financial Institution" className="bg-[#0c1e30]">Bank / Financial Institution</option>
                      <option value="Startup" className="bg-[#0c1e30]">Startup</option>
                      <option value="Other" className="bg-[#0c1e30]">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="research-process" className="text-xs font-medium text-zinc-300">
                    How do you currently verify candidates?
                  </label>
                  <textarea
                    id="research-process"
                    rows={3}
                    value={currentProcess}
                    onChange={(e) => setCurrentProcess(e.target.value)}
                    className="flex w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus-visible:ring-primary focus-visible:ring-1"
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="research-willingness" className="text-xs font-medium text-zinc-300">
                    Would your team consider paying for this?
                  </label>
                  <select
                    id="research-willingness"
                    value={willingness}
                    onChange={(e) => setWillingness(e.target.value)}
                    style={{
                      backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='rgb(161,161,170)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 12px center",
                      backgroundSize: "16px",
                    }}
                    className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 pl-3 pr-10 text-sm text-white focus:outline-none focus:ring-1 focus:ring-primary focus-visible:ring-primary focus-visible:ring-1 appearance-none cursor-pointer"
                    disabled={isLoading}
                  >
                    <option value="" className="bg-[#0c1e30]">Select one</option>
                    <option value="Yes, actively looking for this" className="bg-[#0c1e30]">Yes, actively looking for this</option>
                    <option value="Maybe, depends on pricing" className="bg-[#0c1e30]">Maybe, depends on pricing</option>
                    <option value="Not sure" className="bg-[#0c1e30]">Not sure</option>
                    <option value="No" className="bg-[#0c1e30]">No</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="research-email" className="text-xs font-medium text-zinc-300">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <Input
                    id="research-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-white/10 bg-white/5 text-white placeholder-muted-foreground focus:ring-1 focus:ring-primary focus-visible:ring-primary focus-visible:ring-1"
                    required
                    disabled={isLoading}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-emerald-500 hover:opacity-90 text-white py-2.5 rounded-xl font-semibold shadow-lg shadow-blue-500/10 transition-all duration-300 h-11 mt-4 cursor-pointer"
                >
                  {isLoading ? "Sharing..." : "Share Feedback"}
                </Button>
                <p className="text-center text-[10px] text-muted-foreground mt-2">
                  Used only for our product research — not published or shared.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative mx-auto mt-32 max-w-4xl px-4">
      <SectionHeader eyebrow="FAQ" title="Answers before you ask" />
      <div className="mt-10 divide-y divide-white/[0.06] rounded-2xl border border-white/[0.06] bg-white/[0.02]">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between px-5 py-5 text-left"
              >
                <span className="text-base font-medium">{f.q}</span>
                <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-muted-foreground">
                  {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
              <div
                className="grid overflow-hidden transition-all duration-500"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div className="min-h-0">
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */
function FinalCTA() {
  return (
    <section id="request" className="relative mx-auto mt-32 max-w-6xl px-4">
      <div className="glass-strong glow-ring relative overflow-hidden rounded-3xl p-10 sm:p-16 text-center">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, rgba(37,99,235,.2), transparent 60%)",
          }}
        />
        <div className="relative">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground">
            <Zap className="h-3.5 w-3.5 text-emerald-400" /> Onboard in 48 hours
          </div>
          <h2 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-6xl text-gradient-brand">
            Request a verification, or talk to us first.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Tell us what you need verified and how many candidates — we'll respond with turnaround time and pricing.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:hello@havnverify.com"
              className="btn-primary inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold"
            >
              Email hello@havnverify.com <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  const cols = [
    { h: "Company", l: ["About", "Careers", "Press", "Contact"] },
    { h: "Services", l: ["Employment", "Education", "Identity", "Address", "Reference Check", "Custom Business"] },
    { h: "Industries", l: ["Banking", "Insurance", "Recruitment", "Healthcare", "Legal"] },
    { h: "Legal", l: ["Privacy", "Terms", "Data Processing", "Security"] },
  ];
  return (
    <footer className="relative mx-auto mt-32 max-w-7xl px-4 pb-10">
      <div className="border-t border-white/[0.06] pt-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <a href="#top" className="flex items-center">
              <img src="/logo.png" alt="Havn Logo" className="h-7 w-auto object-contain" />
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Nepal's background verification platform for verified hiring.
            </p>
            <div className="mt-5 text-xs text-muted-foreground">Kathmandu · Nepal</div>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.h}</div>
              <ul className="mt-4 space-y-2.5 text-sm">
                {c.l.map((x) => (
                  <li key={x}>
                    <a
                      href="#contact"
                      className="text-foreground/80 transition hover:text-foreground"
                    >
                      {x}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>
            © {new Date().getFullYear()} Havn. All rights reserved.
          </div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-foreground">
              LinkedIn
            </a>
            <a href="#" className="hover:text-foreground">
              Status
            </a>
            <a href="#" className="hover:text-foreground">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FloatingContact() {
  return (
    <a
      href="#contact"
      className="btn-primary fixed bottom-5 right-5 z-40 hidden items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold shadow-2xl sm:inline-flex"
      aria-label="Talk to sales"
    >
      <Sparkles className="h-4 w-4" /> Talk to Sales
    </a>
  );
}

/* ---------------- Shared ---------------- */
function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="text-xs uppercase tracking-[0.25em] text-primary">{eyebrow}</div>
      <h2 className="mt-3 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl text-gradient">
        {title}
      </h2>
      {sub && <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{sub}</p>}
    </div>
  );
}
