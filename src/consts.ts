// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "LaunchFast - MVP Development Agency";
export const SITE_DESCRIPTION =
  "We build MVPs that validate your ideas fast. From concept to launch in weeks, not months. Expert development team focused on speed and quality.";

export const SITE_METADATA = {
  title: {
    default: SITE_TITLE,
    template: "%s | LaunchFast",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "MVP Development",
    "Startup Agency",
    "Product Development",
    "Web Development",
    "Mobile Apps",
    "Software Agency",
    "Rapid Prototyping",
    "Tech Startup",
  ],
  authors: [{ name: "LaunchFast Team" }],
  creator: "LaunchFast Team",
  publisher: "launchfast",
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon.ico" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon/favicon.ico" }],
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "LaunchFast",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LaunchFast - MVP Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
    creator: "@shadcnblockscom",
  },
};
