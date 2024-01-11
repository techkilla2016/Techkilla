
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/effect-coverflow";
import "react-phone-input-2/lib/style.css";
import 'aos/dist/aos.css';
import './style.scss'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import App from './app'
export const metadata = {
  title: 'Techkilla',
  description: `With Techkilla's innovative experiential technology solutions, businesses can enhance their customer engagement and increase brand loyalty. Contact us today to learn more about how we can help you achieve your business goals.`,
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <App />
        {children}
      </body>
    </html>
  )
}
