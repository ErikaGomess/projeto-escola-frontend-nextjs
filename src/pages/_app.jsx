import { AppProvider } from '@/data/context/AppContext'
import '@/styles/globals.css'
import { LocalStorageProvider } from '@/data/context/LocalStorageContext'

export default function App({ Component, pageProps }) {
  return (
    <LocalStorageProvider>
      <Component {...pageProps} />
    </LocalStorageProvider>
  )
}