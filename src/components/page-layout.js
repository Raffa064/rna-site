'use client'

import { useRef } from "react"
import Link from "next/link"

export function PageLayout({children}) {
    const docNavSwitcherRef = useRef(null)

    const hideDocNavContainer = () => {
        docNavSwitcherRef.current.checked = false
    }

    return (
    <>
        <input ref={docNavSwitcherRef} id="doc-nav-switcher" type="checkbox" />
        <main>
            <header>
                <h1>RNA.js</h1>
                <label htmlFor='doc-nav-switcher'>DOC</label>
                <div id="doc-nav-container">
                    <label htmlFor='doc-nav-switcher'>X</label>
                    <ul>
                        {
                            [
                                { label: "Sobre", url: "/" },
                                { label: "Primeiros passos", url: "/first-step" }
                            ].map(item => {
                                return <li><Link href={item.url} onClick={hideDocNavContainer}>{item.label}</Link></li>
                            })
                        }
                    </ul>
                </div>
            </header>

            {children}

            <footer>
                <a href='https://github.com/Raffa064/'>Raffa064</a>
                <a href='https://github.com/Raffa064/rna-site'>Source code</a>
                <a href='https://raffa064.github.io/rna.js'>Show case</a>
            </footer>
        </main>
    </>
    )
}