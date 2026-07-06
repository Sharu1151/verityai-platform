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
    q: "How fast can Sentrust complete a background verification in Nepal?",
    a: "Most verifications complete within 24 hours. Citizenship and education checks are typically ready in 4–12 hours through direct integrations with authorised registries; police clearance takes 24–72 hours depending on district processing times.",
  },
  {
    q: "Is Sentrust legally compliant with Nepal's data privacy laws?",
    a: "Yes. Sentrust operates under Nepal's Individual Privacy Act 2075, ISO 27001-aligned controls, and enterprise data processing agreements. All personally identifiable information is encrypted at rest with AES-256 and in transit with TLS 1.3.",
  },
  {
    q: "Which industries use Sentrust for verification?",
    a: "Banks, insurance companies, government agencies, hospitals, HR consultancies, real estate firms, educational institutions, fintechs and legal firms rely on Sentrust to verify identity, credentials and background before onboarding.",
  },
  {
    q: "Can Sentrust integrate with our existing HRMS or core banking system?",
    a: "Yes. Sentrust exposes a REST API, webhooks and pre-built connectors for major HRMS, ATS and core banking platforms. Enterprise deployments include a dedicated integration engineer.",
  },
  {
    q: "What happens when a document is forged or tampered with?",
    a: "Our forgery detection engine flags anomalies in fonts, seals, watermarks and metadata. Suspicious cases automatically route to a human reviewer with a detailed evidence trail before a final verdict.",
  },
  {
    q: "Do you offer bulk verification for enterprise onboarding?",
    a: "Yes. Sentrust handles bulk verification workflows with priority queues, batch dashboards, and dedicated turnaround SLAs for enterprise clients running large hiring or KYC campaigns.",
  },
];

function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip text-foreground">
      <BackgroundFX />
      <Nav />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <WhyUs />
        <HowItWorks />
        <AIEngine />
        <Industries />
        <Security />
        <DashboardPreview />
        <Testimonials />
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
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 grid-bg animate-grid-drift opacity-60" />
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
    { href: "#engine", label: "AI Engine", icon: Brain },
    { href: "#industries", label: "Industries", icon: Building },
    { href: "#security", label: "Security", icon: Lock },
    { href: "#faq", label: "FAQ", icon: ShieldCheck },
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
          <a href="#top" className="flex items-center gap-2.5">
            <Logo />
            <span className="text-[15px] font-semibold tracking-tight">Sentrust</span>
            <span className="ml-1 hidden rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 text-[10px] uppercase tracking-widest text-muted-foreground sm:inline">
              NP
            </span>
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
              <DialogTrigger asChild>
                <button className="hidden cursor-pointer text-sm text-muted-foreground transition hover:text-foreground sm:inline bg-transparent border-0 outline-none">
                  Sign in
                </button>
              </DialogTrigger>
              <DialogContent className="glass-strong border-white/10 bg-zinc-950/95 text-white max-w-sm rounded-2xl shadow-2xl backdrop-blur-xl p-6">
                <DialogHeader className="flex flex-col items-center text-center">
                  <Logo />
                  <DialogTitle className="mt-4 text-xl font-bold text-white">
                    Welcome back
                  </DialogTitle>
                  <DialogDescription className="text-xs text-muted-foreground">
                    Sign in to your Sentrust enterprise portal
                  </DialogDescription>
                </DialogHeader>
                <SignInForm onSuccess={() => setSignInOpen(false)} />
              </DialogContent>
            </Dialog>

            <a
              href="#contact"
              className="btn-primary group hidden sm:inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-sm font-medium"
            >
              Start Verification
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
                  <SheetHeader className="flex flex-row items-center gap-2.5 border-b border-white/5 pb-5 text-left">
                    <Logo />
                    <div>
                      <SheetTitle className="text-base font-semibold text-white leading-none">
                        Sentrust
                      </SheetTitle>
                      <SheetDescription className="text-[10px] text-muted-foreground mt-1">
                        Nepal's Trust Intelligence
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
                  <button
                    onClick={() => {
                      setMenuOpen(false);
                      setTimeout(() => setSignInOpen(true), 250);
                    }}
                    className="w-full h-10 border border-white/10 bg-white/5 text-white rounded-xl font-medium text-sm transition hover:bg-white/10 cursor-pointer"
                  >
                    Sign in
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className="btn-primary flex h-10 items-center justify-center gap-1.5 rounded-xl text-sm font-medium"
                  >
                    Start Verification
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
        {isLoading ? "Signing in..." : "Sign in to Sentrust"}
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
    <div
      className="relative grid h-8 w-8 place-items-center rounded-lg"
      style={{
        background: "linear-gradient(135deg,#2563EB,#10B981)",
        boxShadow: "0 6px 20px -4px rgba(37,99,235,.55)",
      }}
    >
      <ShieldCheck className="h-4 w-4 text-white" />
      <span className="absolute inset-0 rounded-lg ring-1 ring-white/20" />
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
              Nepal's Trust Intelligence Platform · Live
            </div>

            <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl animate-rise">
              <span className="text-gradient">Verify before</span>
              <br />
              <span className="text-gradient-brand">you trust.</span>
            </h1>

            <p
              className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground animate-rise"
              style={{ animationDelay: ".1s" }}
            >
              Enterprise-grade background verification for banks, government, insurance, healthcare
              and HR — powered by AI, human review and direct integrations with Nepal's authorised
              registries.
            </p>

            <div
              className="mt-8 flex flex-wrap items-center gap-3 animate-rise"
              style={{ animationDelay: ".2s" }}
            >
              <a
                href="#contact"
                className="btn-primary group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold"
              >
                Start Verification
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="btn-ghost inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium"
              >
                Schedule Consultation
              </a>
            </div>

            <dl
              className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 animate-rise"
              style={{ animationDelay: ".3s" }}
            >
              {[
                { v: "250,000+", l: "Successful Verifications" },
                { v: "99.98%", l: "Accuracy" },
                { v: "24 hrs", l: "Avg Turnaround" },
                { v: "500+", l: "Enterprise Clients" },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="text-2xl font-semibold tracking-tight sm:text-3xl text-gradient">
                    {s.v}
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    {s.l}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5">
            <HeroDashboard />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroDashboard() {
  const items = [
    {
      icon: Fingerprint,
      label: "Identity Verified",
      meta: "Citizenship · 987-654-321",
      status: "verified",
    },
    {
      icon: GraduationCap,
      label: "Education Verified",
      meta: "Tribhuvan University · BSc",
      status: "verified",
    },
    { icon: BadgeCheck, label: "Police Clearance", meta: "Kathmandu · Clear", status: "verified" },
    {
      icon: HomeIcon,
      label: "Property Verified",
      meta: "Lalitpur · Plot 2841/B",
      status: "verified",
    },
    { icon: Activity, label: "Risk Score Updated", meta: "Low · 04/100", status: "info" },
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

      <div className="glass-strong glow-ring relative overflow-hidden rounded-2xl p-5">
        {/* scan line */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-full">
          <div
            className="absolute inset-x-0 h-24 animate-scan"
            style={{
              background:
                "linear-gradient(180deg, transparent, rgba(16,185,129,0.22), transparent)",
            }}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-red-400/70" />
            <div className="h-2 w-2 rounded-full bg-yellow-400/70" />
            <div className="h-2 w-2 rounded-full bg-emerald-400/70" />
          </div>
          <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-muted-foreground">
            <Radio className="h-3 w-3 text-emerald-400" />
            Live Verification
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/20 text-primary">
            <Fingerprint className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium">Aayush Sharma</div>
            <div className="text-xs text-muted-foreground">
              Application #NP-4482 · Enterprise HR
            </div>
          </div>
          <div className="rounded-md bg-emerald-500/15 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
            Verified
          </div>
        </div>

        <ul className="mt-3 space-y-2">
          {items.map((it, i) => (
            <li
              key={it.label}
              className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2.5 animate-rise"
              style={{ animationDelay: `${0.3 + i * 0.08}s` }}
            >
              <div className="grid h-8 w-8 place-items-center rounded-md bg-white/5">
                <it.icon className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium">{it.label}</div>
                <div className="text-[11px] text-muted-foreground">{it.meta}</div>
              </div>
              {it.status === "verified" ? (
                <Check className="h-4 w-4 text-emerald-400" />
              ) : (
                <span className="text-[11px] text-emerald-400">Low</span>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-4 grid grid-cols-3 gap-2 rounded-xl border border-white/5 bg-white/[0.02] p-3">
          <MiniStat label="Turnaround" value="4h 12m" />
          <MiniStat label="Confidence" value="99.4%" />
          <MiniStat label="Sources" value="7" />
        </div>
      </div>

      {/* floating chips */}
      <div className="pointer-events-none absolute lg:-left-20 xl:-left-28 top-16 hidden animate-float-slow lg:block">
        <FloatingChip icon={Cpu} title="AI OCR" sub="Document parsed · 1.2s" />
      </div>
      <div
        className="pointer-events-none absolute lg:-right-20 xl:-right-28 bottom-12 hidden animate-float-slow lg:block"
        style={{ animationDelay: "1.5s" }}
      >
        <FloatingChip icon={Lock} title="AES-256 Encrypted" sub="At rest & in transit" />
      </div>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="mt-0.5 text-sm font-semibold">{value}</div>
    </div>
  );
}

function FloatingChip({
  icon: Icon,
  title,
  sub,
}: {
  icon: typeof Cpu;
  title: string;
  sub: string;
}) {
  return (
    <div className="glass-strong flex items-center gap-2.5 rounded-xl px-3 py-2 shadow-2xl">
      <div className="grid h-7 w-7 place-items-center rounded-md bg-primary/20 text-primary">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="text-xs font-semibold leading-tight">{title}</div>
        <div className="text-[10px] text-muted-foreground">{sub}</div>
      </div>
    </div>
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
      icon: Fingerprint,
      title: "Citizenship Verification",
      desc: "Real-time validation against Nepal's national citizenship registry with biometric matching.",
      accent: "from-blue-500/40 to-blue-500/0",
    },
    {
      icon: GraduationCap,
      title: "Education Verification",
      desc: "Direct integration with universities, boards and colleges across Nepal to validate transcripts.",
      accent: "from-emerald-500/40 to-emerald-500/0",
    },
    {
      icon: UserCheck,
      title: "Employee Verification",
      desc: "Past employer confirmation, tenure, designation and reason-for-leaving with reference calls.",
      accent: "from-indigo-500/40 to-indigo-500/0",
    },
    {
      icon: HomeIcon,
      title: "Property Verification",
      desc: "Land ownership, encumbrance, malpot records and physical site verification across districts.",
      accent: "from-cyan-500/40 to-cyan-500/0",
    },
    {
      icon: FileCheck2,
      title: "CRC Verification",
      desc: "Court record and criminal history checks aggregated across district and appellate courts.",
      accent: "from-violet-500/40 to-violet-500/0",
    },
    {
      icon: BadgeCheck,
      title: "Police Verification",
      desc: "District-level police clearance with digital chain-of-custody and evidence audit trail.",
      accent: "from-emerald-500/40 to-teal-500/0",
    },
  ];
  return (
    <section id="services" className="relative mx-auto mt-32 max-w-7xl px-4">
      <SectionHeader
        eyebrow="Verification Suite"
        title="Every check your compliance team needs — in one platform"
        sub="Six production verification services built for the pace of enterprise onboarding in Nepal. More coming soon: identity, document, address, business and vendor verification."
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
                  Live in Nepal
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
        eyebrow="Why Enterprises Choose Sentrust"
        title="Built for scale, audited for trust"
        sub="A verification stack designed with the operational and regulatory reality of Nepali enterprises."
      />
      <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-4">
        <Bento
          className="md:col-span-3 md:row-span-2"
          title="AI-first verification engine"
          desc="OCR, forgery detection, face-match and risk scoring across every submission — trained on Nepal-specific documents."
        >
          <NeuralViz />
        </Bento>
        <Bento
          className="md:col-span-3 md:row-span-2"
          title="Human review, on every edge case"
          desc="AI drives speed. Certified reviewers make the final call on anomalies, protecting you from false positives."
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
  const steps = [
    {
      icon: FileCheck2,
      title: "Submit request",
      desc: "Trigger a verification via dashboard, API or bulk import.",
    },
    {
      icon: Scan,
      title: "Upload documents",
      desc: "Secure vault ingests documents with instant OCR & structuring.",
    },
    {
      icon: Cpu,
      title: "AI verification",
      desc: "OCR, face-match, forgery detection and registry cross-check run in parallel.",
    },
    {
      icon: Eye,
      title: "Human review",
      desc: "Certified reviewers validate flagged anomalies with a full evidence trail.",
    },
    {
      icon: BadgeCheck,
      title: "Verification report",
      desc: "Signed, tamper-evident report delivered with API webhook & PDF.",
    },
  ];
  return (
    <section className="relative mx-auto mt-32 max-w-7xl px-4">
      <SectionHeader
        eyebrow="How It Works"
        title="From request to signed report in under 24 hours"
        sub="A workflow designed for enterprise volumes and audit-grade traceability."
      />
      <ol className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-5">
        {steps.map((s, i) => (
          <li key={s.title} className="card-surface relative p-5">
            <div className="flex items-center justify-between">
              <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
            </div>
            <h3 className="mt-5 text-base font-semibold">{s.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
            {i < steps.length - 1 && (
              <ChevronRight className="absolute right-[-14px] top-1/2 hidden h-5 w-5 -translate-y-1/2 text-white/20 md:block" />
            )}
          </li>
        ))}
      </ol>
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
    <section id="engine" className="relative mx-auto mt-32 max-w-7xl px-4">
      <SectionHeader
        eyebrow="Sentrust AI Engine"
        title="Eight verification models. One trust decision."
        sub="Our proprietary engine combines document intelligence, biometrics, government-registry validation and risk scoring into a single trust verdict."
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
    { icon: Building, name: "Banking" },
    { icon: Wallet, name: "Insurance" },
    { icon: Landmark, name: "Government" },
    { icon: Briefcase, name: "Recruitment" },
    { icon: Stethoscope, name: "Healthcare" },
    { icon: GraduationCap, name: "Education" },
    { icon: HomeIcon, name: "Real Estate" },
    { icon: BarChart3, name: "Finance" },
    { icon: Gavel, name: "Legal" },
    { icon: Cpu, name: "IT & Fintech" },
  ];
  return (
    <section id="industries" className="relative mx-auto mt-32 max-w-7xl px-4">
      <SectionHeader
        eyebrow="Industries"
        title="Trusted across Nepal's most regulated sectors"
        sub="From central-bank supervised financial institutions to national hospitals — Sentrust powers verification at scale."
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
    <section id="contact" className="relative mx-auto mt-32 max-w-6xl px-4">
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
            Trust begins with verification.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Talk to our enterprise team about verification workflows for your bank, HR, insurance or
            government use case in Nepal.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold"
            >
              Book Consultation <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="btn-ghost inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium"
            >
              Start Verification
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
    { h: "Services", l: ["Citizenship", "Education", "Employment", "Property", "CRC", "Police"] },
    { h: "Industries", l: ["Banking", "Insurance", "Government", "Healthcare", "Legal"] },
    { h: "Legal", l: ["Privacy", "Terms", "Data Processing", "Security"] },
  ];
  return (
    <footer className="relative mx-auto mt-32 max-w-7xl px-4 pb-10">
      <div className="border-t border-white/[0.06] pt-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5">
              <Logo />
              <span className="text-[15px] font-semibold tracking-tight">Sentrust</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Nepal's trust intelligence platform for enterprise background verification.
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
            © {new Date().getFullYear()} Sentrust Technologies Pvt. Ltd. All rights reserved.
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
