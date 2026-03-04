import Link from 'next/link'
import React from 'react'
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { LiaAngleDownSolid } from "react-icons/lia";
import { TiAdjustContrast } from "react-icons/ti";
import { TiMessages } from "react-icons/ti";
import { MdOutlinePerson } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

const NavBar = () => {
    return (
        <>
            <nav>
                <div>
                    <ul>
                        <li>
                            <span><MdOutlineKeyboardVoice /></span>
                            <span>English</span>
                            <span><LiaAngleDownSolid /></span>
                        </li>
                        <li>
                            <span>High Contrast</span>
                            <span><TiAdjustContrast /></span>
                        </li>
                        <li>
                            <Link href={``}>
                                <span>Customer Support</span>
                                <span><TiMessages /></span>
                            </Link>
                        </li>
                        <li>
                            <Link href={``}>
                                <span>Contact Sales</span>
                                <span><MdOutlinePerson /></span>
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li><IoIosSearch /></li>
                        <li>
                            <Link href={``}>Log in</Link>
                        </li>
                        <li>
                            <span>About</span>
                            <span><LiaAngleDownSolid /></span>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar
