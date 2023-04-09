import '@/styles/globals.css'
import Link from 'next/link'

export default function App({ Component, pageProps }) {
  return (
    <main>
      <header>
        <h1>RNA.js</h1>
        <input id="doc-nav-switcher" type="checkbox" />
        <label htmlFor='doc-nav-switcher'>DOC</label>
        <div>
          <label htmlFor='doc-nav-switcher'>X</label>
          <ul>
            <li><Link href="#">GHsjhsgdfs</Link></li>
            <li><Link href="#">GHsjhsgdfs</Link></li>
            <li><Link href="#">GHsjhsgdfs</Link></li>
            <li><Link href="#">GHsjhsgdfs</Link></li>
            <li><Link href="#">GHsjhsgdfs</Link></li>
            <li><Link href="#">GHsjhsgdfs</Link></li>
            <li><Link href="#">GHsjhsgdfs</Link></li>
            <li><Link href="#">GHsjhsgdfs</Link></li>
            <li><Link href="#">GHsjhsgdfs</Link></li>
            <li><Link href="#">GHsjhsgdfs</Link></li>
            <li><Link href="#">GHsjhsgdfs</Link></li>
            <li><Link href="#">GHsjhsgdfs</Link></li>
            <li><Link href="#">GHsjhsgdfs</Link></li>
            <li><Link href="#">GHsjhsgdfs</Link></li>
            <li><Link href="#">GHsjhsgdfs</Link></li>
            <li><Link href="#">GHsjhsgdfs</Link></li>
            <li><Link href="#">GHsjhsgdfs</Link></li>
            <li><Link href="#">GHsjhsgdfs</Link></li>
            <li><Link href="#">GHsjhsgdfs</Link></li>
            <li><Link href="#">GHsjhsgdfs</Link></li>
            <li><Link href="#">GHsjhsgdfs</Link></li>
            <li><Link href="#">GHsjhsgdfs</Link></li>
            <li><Link href="#">GHsjhsgdfs</Link></li>
            <li><Link href="#">GHsjhsgdfs</Link></li>
            <li><Link href="#">GHsjhsgdfs</Link></li>
          </ul>
        </div>
      </header>
      <div>
        <Component {...pageProps} />
      </div>
      <footer>
        <a href='https://github.com/Raffa064/'>Raffa064</a>
        <a href='https://github.com/Raffa064/rna.js'>Source code</a>
        <a href='https://raffa064.github.io/rna.js'>Show case</a>
      </footer>
    </main>
  )
}
