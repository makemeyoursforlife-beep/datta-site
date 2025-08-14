import './globals.css'

export const metadata = {
  title: 'Datta Site',
  description: 'A Next.js application built with modern web technologies',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
