import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Toaster } from "../components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="btn-primary inline-flex items-center rounded-md px-4 py-2 text-sm font-medium"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-primary rounded-md px-4 py-2 text-sm font-medium"
          >
            Try again
          </button>
          <a href="/" className="btn-ghost rounded-md px-4 py-2 text-sm font-medium">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Havn | Employee Background Verification for Nepal's Hiring Teams" },
      {
        name: "description",
        content:
          "Havn provides structured employment, education, identity, and reference verification for HR teams and recruiters hiring in Nepal. Technology-assisted, human-verified.",
      },
      { name: "author", content: "Havn" },
      {
        name: "keywords",
        content:
          "background verification Nepal, employment verification Nepal, education verification Nepal, HR background check Nepal, candidate verification Kathmandu, pre-employment screening Nepal",
      },
      { name: "robots", content: "index, follow" },
      {
        property: "og:title",
        content: "Havn | Employee Background Verification for Nepal's Hiring Teams",
      },
      {
        property: "og:description",
        content:
          "Reliable employee and candidate background verification for companies making important hiring decisions in Nepal. Structured process, human-verified sources.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Havn" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Havn | Employee Background Verification for Nepal's Hiring Teams" },
      {
        name: "twitter:description",
        content: "Reliable employee and candidate background verification for companies making important hiring decisions in Nepal.",
      },
      { name: "theme-color", content: "#071A2D" },
    ],
    links: [
      {
        rel: "preload",
        href: "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800&family=Geist+Mono:wght@400;500&display=swap",
        as: "style",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800&family=Geist+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-HBTSXHVMPR",
        async: true,
      },
      {
        children: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-HBTSXHVMPR');
        `,
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Havn",
          "description": "Employee and candidate background verification services for companies hiring in Nepal, covering employment history, education, identity, address, and reference checks.",
          "url": "https://havnverify.com/",
          "areaServed": {
            "@type": "Country",
            "name": "Nepal"
          },
          "serviceType": ["Employment Verification", "Education Verification", "Identity Verification", "Address Verification", "Reference Check", "Background Screening"],
          "audience": {
            "@type": "BusinessAudience",
            "audienceType": "HR Departments, Recruitment Agencies, IT and BPO Companies, Financial Institutions"
          }
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How long does a background verification take in Nepal?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Standard verifications (employment, education, identity) are completed in 3 to 5 business days. Complex address verifications or custom corporate checks may take up to 7 business days."
              }
            },
            {
              "@type": "Question",
              "name": "Is candidate consent required for verification?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. All background verification checks are performed strictly with candidate consent, compliant with Nepal's privacy frameworks and Individual Privacy Act requirements."
              }
            },
            {
              "@type": "Question",
              "name": "Can Havn integrate with our existing HRMS or core banking system?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Havn exposes a REST API, webhooks and pre-built connectors for major HRMS, ATS and core banking platforms. Enterprise deployments include a dedicated integration engineer."
              }
            },
            {
              "@type": "Question",
              "name": "What happens when a document is forged or tampered with?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Our verification engine flags anomalies in fonts, seals, watermarks and metadata. Suspicious cases automatically route to a human reviewer with a detailed evidence trail before a final verdict."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer bulk verification for enterprise onboarding?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Havn handles bulk verification workflows with priority queues, batch dashboards, and dedicated turnaround SLAs for enterprise clients running large hiring or KYC campaigns."
              }
            }
          ]
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <Toaster />
    </QueryClientProvider>
  );
}
