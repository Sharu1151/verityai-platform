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
          <Link to="/" className="btn-primary inline-flex items-center rounded-md px-4 py-2 text-sm font-medium">
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
        <h1 className="text-xl font-semibold tracking-tight text-foreground">This page didn't load</h1>
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
      { title: "Sentrust — AI Background Verification Platform for Enterprises in Nepal" },
      {
        name: "description",
        content:
          "Sentrust is Nepal's trust intelligence platform for enterprise background verification — citizenship, education, employment, property, CRC and police checks powered by AI and government-grade validation.",
      },
      { name: "author", content: "Sentrust" },
      { name: "keywords", content: "background verification Nepal, citizenship verification, police verification Nepal, education verification, employee verification, CRC verification, KYC Nepal, enterprise verification platform" },
      { property: "og:title", content: "Sentrust — AI Background Verification for Enterprises in Nepal" },
      { property: "og:description", content: "Verify before you trust. Enterprise-grade AI verification — citizenship, education, employment, property, CRC, police checks. 99.98% accuracy, 24-hour turnaround." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Sentrust" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sentrust — AI Background Verification Platform" },
      { name: "twitter:description", content: "Nepal's trust intelligence platform for enterprise verification." },
      { name: "theme-color", content: "#071A2D" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800&family=Geist+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Sentrust",
          url: "/",
          description: "AI-powered background verification platform for enterprises in Nepal.",
          areaServed: "NP",
          knowsAbout: [
            "Background Verification",
            "Citizenship Verification",
            "Police Verification",
            "Education Verification",
            "Employee Verification",
            "Property Verification",
            "CRC Verification",
          ],
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
    </QueryClientProvider>
  );
}
