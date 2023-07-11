import './globals.css'
import Document from './page/_document'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Document/>
      <body>{children}</body>
    </html>
  )
}
