import BlogPage from "./blogPage";

// import { allRoutes } from "@/data/allRoutes";

const siteUrl = process.env.SITE_URL;

// const newLocal = {
//   metadataBase: new URL(siteUrl),
//   alternates: {
//     canonical: allRoutes.blogs,
//     languages: {
//       "en-US": `${allRoutes.blogs}/en-US`,
//       "de-DE": `${allRoutes.blogs}/de-DE`,
//     },
//   },
//   title: "Snapshawt Blog: AI Face Swap & Image Creation",
//   description:
//     "Explore AI face swaps, image creation tips, and photo transformation ideas with Snapshawt. Unleash creativity with fast, advanced AI tools!",
//   keywords:
//     "AI face swap, face changer, photo manipulation, image creation, face swap tips, free face swap, face reimagine, face switch, photo face swap free, AI photo editor, best face swap AI, face replace AI, swap face online, face transformation, face editing tools, advanced AI tools, swap faces in photos, face swap tutorials, AI face changer free, creative image ideas, AI-powered face swap, realistic face swap, easy face swap, face swap online free, picture transformation, professional face swap AI, AI face editor, face swap software, face swap app tips, free AI image tools, online face editing, face swap technology, custom photo editor",
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: siteUrl,
//     site_name: "Snapshawt",
//     title: "Snapshawt Blog: AI Face Swap & Image Creation",
//     description:
//       "Explore AI face swaps, image creation tips, and photo transformation ideas with Snapshawt. Unleash creativity with fast, advanced AI tools!",
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
//     title: "Snapshawt Blog: AI Face Swap & Image Creation",
//     description:
//       "Explore AI face swaps, image creation tips, and photo transformation ideas with Snapshawt. Unleash creativity with fast, advanced AI tools!",
//     images: {
//       url: "/og-images/home-og.png",
//       width: 1200,
//       height: 630,
//       alt: "AI-powered face swap preview image",
//     },
//   },
// };
// export const metadata = newLocal;

export default function page() {
  return (
    <>
      <BlogPage />
    </>
  );
}
