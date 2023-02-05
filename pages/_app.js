import '@/styles/globals.css'
import {useRouter} from "next/router";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }) {
    const router = useRouter();
  return (
      <>
          {(router.pathname !== '/login' && router.pathname !== '/signup') && <Navbar/>}
        <Component {...pageProps} />
      </>
  )
}
