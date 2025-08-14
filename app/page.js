export default function Home() {
  return (
    <div className="container">
      <header>
        <h1>Welcome to Datta Site</h1>
        <p>A modern Next.js application</p>
      </header>
      
      <main>
        <section>
          <h2>About This Site</h2>
          <p>
            This is a Next.js application built with the app directory structure.
            It demonstrates modern React patterns and Next.js 13+ features.
          </p>
        </section>
        
        <section>
          <h2>Features</h2>
          <ul>
            <li>Server-side rendering</li>
            <li>App Router</li>
            <li>Modern React components</li>
            <li>Responsive design</li>
          </ul>
        </section>
      </main>
      
      <footer>
        <p>&copy; 2025 Datta Site. Built with Next.js.</p>
      </footer>
    </div>
  )
}
