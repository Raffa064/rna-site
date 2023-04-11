'use client'
import '../styles/globals.css'
import Link from "next/link";
import { useRef } from "react";

export default function RootLayout({children}) {
  const docNavSwitcherRef = useRef({})

  return (
    <main>
      <header>
        <h1>RNA.js</h1>
        <input ref={docNavSwitcherRef} id="doc-nav-switcher" type="checkbox" />
        <label htmlFor='doc-nav-switcher'>DOC</label>
        <div>
          <label htmlFor='doc-nav-switcher'>X</label>
          <ul>
            {
              [
                { label: "Sobre", url: "/" },
                { label: "Primeiros passos", url: "/first-step" }
              ].map(item => {
                return <li><Link onClick={() => { docNavSwitcherRef.current.checked = false; }} href={item.url}>{item.label}</Link></li>
              })
            }
          </ul>
        </div>
      </header>
      <div>
        {/* <Component {...pageProps} /> */}
        {children}
      </div>
      <footer>
        <a href='https://github.com/Raffa064/'>Raffa064</a>
        <a href='https://github.com/Raffa064/rna-site'>Source code</a>
        <a href='https://raffa064.github.io/rna.js'>Show case</a>
      </footer>
    </main>
  )
}
