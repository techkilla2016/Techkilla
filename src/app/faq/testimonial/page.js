import React from "react";
import FaqContainer from "@/components/faq/faqContainer";
const siteUrl = process.env.SITE_URL;

// export const metadata = {
//   metadataBase: new URL(siteUrl),
//   alternates: {
//     canonical: "/faq/general-query",
//     languages: {
//       "en-US": "/faq/general-query/en-US",
//       "de-DE": "/faq/general-query/de-DE",
//     },
//   },
//   title: "General Inquiries about Snapshawt AI",
//   description:
//     "Have a general question about Snapshawt? Find answers to common inquiries, from account setup to usage tips. Explore this section for quick and easy solutions to your most frequently asked questions.",
//   keywords:
//     "General FAQs, help and support guide, how to use the app, common app questions, troubleshooting tips, user guide assistance, app tutorial, frequently asked questions, app help center, resolving app issues, app support guide, feature overview FAQs, app functionality tips, general troubleshooting guide, user support questions, resolving technical issues, step-by-step app guide, common user queries, app walkthrough tutorial, app support FAQs, optimizing app usage, tips for beginners, app usage assistance, troubleshooting common problems, app setup guide, how-to guide for features, quick user support, fixing app errors, app tips and tricks, resolving technical glitches, app guidance for new users, problem-solving tips, improving app experience, getting started with the app, feature-specific queries, app usage best practices, resolving app bugs, quick app solutions, app functionality overview, app tutorial for users, resolving user issues, how-to resolve app errors, app feature questions, resolving app performance issues, technical support for apps, app troubleshooting workflow, user support tips, handling app errors effectively, enhancing app experience, app query resolution, frequently asked user questions, beginner's app guide, common app functionality issues",
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: siteUrl,
//     site_name: "Snapshawt",
//     title: "General Inquiries about Snapshawt AI",
//     description:
//       "Have a general question about Snapshawt? Find answers to common inquiries, from account setup to usage tips. Explore this section for quick and easy solutions to your most frequently asked questions.",
//     images: {
//       url: "/og-images/home-og.png",
//       width: 1200,
//       height: 630,
//       alt: "AI-powered face swap preview image",
//     },
//   },
//   twitter: {
//     card: "summary_large_image",
//     site: "@Snapshawt",
//     title: "General Inquiries about Snapshawt AI",
//     description:
//       "Have a general question about Snapshawt? Find answers to common inquiries, from account setup to usage tips. Explore this section for quick and easy solutions to your most frequently asked questions.",
//     images: {
//       url: "/og-images/home-og.png",
//       width: 1200,
//       height: 630,
//       alt: "AI-powered face swap preview image",
//     },
//   },
// };

export default function Testimonial() {
  const content = [
    {
      dt: "How does Techkilla capture live testimonials?",
      dd: "Our AI-powered video booths record attendee experiences, edit them in real time, and add brand elements for instant social sharing.",
    },
    {
      dt: "Can users share their experiences on social media instantly?",
      dd: " Absolutely! Our solutions allow users to share AI-generated videos and images directly from the event.",
    },
  ];

  return (
    <>
      <FaqContainer content={content} title={"Testimonial"} />
    </>
  );
}
