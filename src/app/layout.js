import './globals.css'

export const metadata = {
  title: 'Deep Inside - Регрессия',
  description: 'Путешествие вглубь подсознания',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className="custom-cursor bg-black text-white antialiased">
        {children}
      </body>
    </html>
  )
}