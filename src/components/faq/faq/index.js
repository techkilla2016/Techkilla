import React from "react";
import "./faq.scss";
import Link from "next/link";
import Head from "next/head";
import Header from "@/components/header";

import { MdKeyboardDoubleArrowRight } from "react-icons/md";
// import { allRoutes } from "@/data/allRoutes";

const siteUrl = process.env.SITE_URL;

// export const metadata = {
//   metadataBase: new URL(siteUrl),
//   alternates: {
//     canonical: `${allRoutes.faq.self}`,
//     languages: {
//       "en-US": `${allRoutes.faq.self}/en-US`,
//       "de-DE": `${allRoutes.faq.self}/de-DE`,
//     },
//   },
//   title: "FAQ - Snapshawt AI Face Swap & Image Tools",
//   description:
//     "Find answers to your most common questions about Snapshawt's AI face swap, image generation, and other services. Our FAQ page provides helpful information to guide you through using our powerful AI tools",
//   keywords:
//     "AI face swap FAQs, face swap guide, face swap help, how to use face swap, AI-powered face changer FAQs, best face swap app questions, free face swap tool guide, image transformation FAQs, face replacement help, troubleshooting face swap, face swap tutorial, AI face editing tips, face switch guide, realistic face swap assistance, face swap support, online face swap tips, face swap app questions, common face swap issues, face editor FAQs, improving face swap quality, swap faces easily guide, AI face switch help, photo transformation FAQs, face changer app questions, advanced face swap tips, seamless face editing guide, photo face replacement help, troubleshooting AI face swap, face editing support, quick face swap guide, face morphing tool help, AI avatars FAQs, custom face editing help, online face swap answers, AI-powered photo editing FAQs, face blending guide, best practices for face swap, personalized face editing help, face modification FAQs, tips for realistic face swap, face swap app troubleshooting, deep learning face swap tips, creative face swap help, fun face swap guide, professional face editing FAQs, resolving face swap errors, AI face retouching tips",
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: siteUrl,
//     site_name: "Snapshawt",
//     title: "FAQ - Snapshawt AI Face Swap & Image Tools",
//     description:
//       "Find answers to your most common questions about Snapshawt's AI face swap, image generation, and other services. Our FAQ page provides helpful information to guide you through using our powerful AI tools",
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
//     title: "FAQ - Snapshawt AI Face Swap & Image Tools",
//     description:
//       "Find answers to your most common questions about Snapshawt's AI face swap, image generation, and other services. Our FAQ page provides helpful information to guide you through using our powerful AI tools",
//     images: {
//       url: "/og-images/home-og.png",
//       width: 1200,
//       height: 630,
//       alt: "AI-powered face swap preview image",
//     },
//   },
// };

export default function Faq() {
  // const jsonLdData = {
  //   "@context": "https://schema.org",
  //   "@type": "FAQPage",
  //   mainEntity: [
  //     {
  //       "@type": "Question",
  //       name: "What is Snapshawt?",
  //       acceptedAnswer: {
  //         "@type": "Answer",
  //         text: "Snapshawt is an AI-powered platform offering tools like face swap and image enhancement to help transform photos and videos.",
  //       },
  //     },
  //     {
  //       "@type": "Question",
  //       name: "How does Snapshawt's face swap work?",
  //       acceptedAnswer: {
  //         "@type": "Answer",
  //         text: "Snapshawt's face swap uses AI to seamlessly replace faces in images with high accuracy and realism.",
  //       },
  //     },
  //   ],
  // };
  return (
    <>
      <Head>
        {/* Inject the JSON-LD structured data
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        /> */}
      </Head>
      <Header />
      <div className="flex-col-center Faq">
        <header className="header">
          <h1 className={`grd-txt`}>FAQs</h1>
        </header>

        <div className="main">
          <ul className="flex-col-center ul">
            <Link href="/faq/general-query" className="a">
              <li className="txt1 flex-row-center li">
                General <MdKeyboardDoubleArrowRight />
              </li>
            </Link>

            <Link href="/faq/gamification" className="a">
              <li className="txt1 flex-row-center li">
                Crowd Engagement & Gamification
                <MdKeyboardDoubleArrowRight />
              </li>
            </Link>

            <Link href="/faq/ai-creation" className="a">
              <li className="txt1 flex-row-center li">
                AI & Content Creation <MdKeyboardDoubleArrowRight />
              </li>
            </Link>

            <Link href="/faq/experience" className="a">
              <li className="txt1 flex-row-center li">
                AR & VR Experiences
                <MdKeyboardDoubleArrowRight />
              </li>
            </Link>

            <Link href="/faq/testimonial" className="a">
              <li className="txt1 flex-row-center li">
                Live Testimonials & Social Sharing
                <MdKeyboardDoubleArrowRight />
              </li>
            </Link>

            <Link href="/faq/budget" className="a">
              <li className="txt1 flex-row-center li">
                Pricing & Budget
                <MdKeyboardDoubleArrowRight />
              </li>
            </Link>

            <Link href="/faq/timeline" className="a">
              <li className="txt1 flex-row-center li">
                Timelines & Execution
                <MdKeyboardDoubleArrowRight />
              </li>
            </Link>
            <Link href="/faq/customization" className="a">
              <li className="txt1 flex-row-center li">
                Customization & Integration
                <MdKeyboardDoubleArrowRight />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}
