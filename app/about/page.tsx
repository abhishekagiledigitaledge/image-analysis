export const metadata = {
  title: "About Granite & Quartz Countertop Services | Stone Concepts",
  description:
    "Learn about Stone Concepts, a trusted provider of granite and quartz countertop installations in Massachusetts. Committed to quality and customer satisfaction.",
  keywords:
    "Stone Concepts about, countertop experts Massachusetts, granite quartz marble, kitchen countertops, stone craftsmanship, company story",
  openGraph: {
    title: "About Granite & Quartz Countertop Services | Stone Concepts",
    description:
      "Learn about Stone Concepts, a trusted provider of granite and quartz countertop installations in Massachusetts. Committed to quality and customer satisfaction.",
    url: "https://stoneconcepts.net/about",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://stoneconcepts.net/images/family-kitchen-countertop.webp",
        width: 1200,
        height: 630,
        alt: "Stone Concepts About Us - Countertop Experts Massachusetts",
      },
    ],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://stoneconcepts.net/about",
  },
}

import About from "./About"

export default function AboutPage() {
  return <About />
}
