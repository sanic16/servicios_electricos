'use client'

import { useState } from "react"
import Link from "next/link"
import logo from '@/../public/images/logo.png'
import { links } from '@/utils/data'
import { FaBars } from "react-icons/fa"
import { MdOutlineClose } from "react-icons/md"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Montserrat } from "next/font/google"

const roboto = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "700"]
})

import './navbar.css'

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false)  
  const pathname = usePathname()
  return (
    <nav>
        <div className="container nav__container">

            <Link
                href={'/'}
                className="logo"
                onClick={() => setIsNavShowing(false)} 
            >
                {/* <Image src={logo} alt="logo" /> */}
                <div className={`logo__desc `}>
                Electroser
                </div>
            </Link>

            <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                {
                    links.map(({name, path}, index) => (
                        <li key={path}>
                            <Link
                                href={path}
                                key={index}
                                className={`${pathname === path ? 'active-nav' : ''}`}
                                onClick={() => setIsNavShowing(prevState => !prevState) }
                            >
                                { name }
                            </Link>
                        </li>
                    ))
                }
            </ul>

            <button className="nav__toggle-btn" onClick={() => setIsNavShowing(prevState => !prevState)}>
                { !isNavShowing ? <FaBars /> : <MdOutlineClose />}
            </button>

        </div>
    </nav>
  )
}

export default Navbar