import BlogPage from "./blogPage";

const siteUrl = "https://www.techkilla.com";

const newLocal = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/blogs",
    languages: {
      "en-US": `/blogs/en-US`,
      "de-DE": `/blogs/de-DE`,
    },
  },
  title: "Theckilla Blog: Photobooth & Image Creation",
  description:
    "Explore Photobooth, image creation tips, and photo transformation ideas with Techkilla. Unleash creativity with fast, advanced AI!",
  keywords:
    "AI Photo booth, face changer, photo manipulation, image creation, face swap tips, free face swap, face reimagine, face switch, photo face swap free, AI photo editor, best face swap AI, face replace AI, swap face online, face transformation, face editing tools, advanced AI tools, swap faces in photos, face swap tutorials, AI face changer free, creative image ideas, AI-powered face swap, realistic face swap, easy face swap, face swap online free, picture transformation, professional face swap AI, AI face editor, face swap software, face swap app tips, free AI image tools, online face editing, face swap technology, custom photo editor",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    site_name: "Techkilla",
    title: "Theckilla Blog: Photobooth & Image Creation",
    description:
      "Explore Photobooth, image creation tips, and photo transformation ideas with Techkilla. Unleash creativity with fast, advanced AI!",
    images: {
      url: "/og-images/blogs/blog-01-og-image.jpg",
      width: 1200,
      height: 630,
      alt: "AI-powered Photobooth preview image",
    },
  },
  twitter: {
    card: "summary_large_image",
    site: "@Techkilla",
    title: "Theckilla Blog: Photobooth & Image Creation",
    description:
      "Explore Photobooth, image creation tips, and photo transformation ideas with Techkilla. Unleash creativity with fast, advanced AI!",
    images: {
      url: "/og-images/blogs/blog-01-og-image.jpg",
      width: 1200,
      height: 630,
      alt: "AI-powered photobooth preview image",
    },
  },
};
export const metadata = newLocal;

export default function page() {
  return (
    <>
      <BlogPage />
    </>
  );
}
