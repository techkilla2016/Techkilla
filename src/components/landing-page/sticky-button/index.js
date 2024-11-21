// // src/components/StickyButtons.js

// "use client"; // Add this line at the top

// import { useEffect, useState } from "react";

// export default function StickyButtons() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
//     window.addEventListener("resize", handleResize);
//     handleResize();
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const openWhatsApp = () => {
//     window.location.href = "https://wa.me/YOUR_BUSINESS_WHATSAPP_NUMBER";
//   };

//   return (
//     <div className={`sticky-buttons ${isMobile ? "mobile" : "desktop"}`}>
//       <button onClick={openWhatsApp}>WhatsApp</button>
//       <button
//         onClick={() => document.getElementById("banner").scrollIntoView()}
//       >
//         Get Quote
//       </button>
//     </div>
//   );
// }
