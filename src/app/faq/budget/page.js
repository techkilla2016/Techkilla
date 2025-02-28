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

export default function Budget() {
  const content = [
    {
      dt: "How much do Techkilla’s event technology solutions cost?",
      dd: "Pricing varies based on the solution, event scale, and customization. We offer flexible packages to fit different budgets.",
    },
    {
      dt: " Do you offer budget-friendly engagement solutions for small events?",
      dd: " Yes! We provide scalable solutions, from basic AI photobooths to advanced AR/VR experiences, tailored to your budget.",
    },
    {
      dt: " Is there a setup or installation fee?",
      dd: " It depends on the solution. Some setups require on-site installation, while others can be deployed remotely.",
    },
  ];

  return (
    <>
      <FaqContainer content={content} title={"Budget"} />
    </>
  );
}
