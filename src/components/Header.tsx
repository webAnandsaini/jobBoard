'use client';
import { BookHeart, DiamondPlus, TextSearch } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

function Header() {
    const pathname = usePathname();
    const menusItems = [
        {
            label: 'Jobs',
            Icon: <TextSearch className='size-4 sm:size-5' />,
            path: '/'
        },
        {
            label: 'post Job',
            Icon: <DiamondPlus className='size-4 sm:size-5' />,
            path: '/postJob'
        },
        {
            label: 'favorites',
            Icon: <BookHeart className='size-4 sm:size-5' />,
            path: '/favorites'
        }
    ]
    return (
        <header className='flex justify-between items-center px-4 py-2 max-w-6xl mx-auto'>
            <div className="">
                <Link href="/">
                    <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 508 508"
                        fill="#000000"
                        className='size-10 sm:size-16'
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <circle style={{ fill: "#324A5E" }} cx="254" cy="254" r="254" />
                            <rect
                                x="271.517"
                                y="263.875"
                                transform="matrix(-0.7342 0.6789 -0.6789 -0.7342 686.7891 304.8825)"
                                style={{ fill: "#2C9984" }}
                                width="24.399"
                                height="45.999"
                            />
                            <path
                                style={{ fill: "#FFFFFF" }}
                                d="M420,418l-16.8,15.6c-5.2,4.8-13.6,4.8-18.8-0.8L283.6,323.2c-4.8-5.2-4.8-13.6,0.8-18.8l16.8-15.6
        c5.2-4.8,13.6-4.8,18.8,0.8l101.2,109.6C425.6,404.4,425.6,412.8,420,418z"
                            />
                            <rect
                                x="293.337"
                                y="336.352"
                                transform="matrix(-0.6789 -0.7342 0.7342 -0.6789 326.19 864.5511)"
                                style={{ fill: "#4CDBC4" }}
                                width="117.597"
                                height="49.199"
                            />
                            <circle style={{ fill: "#FFFFFF" }} cx="197.2" cy="183.6" r="127.6" />
                            <circle style={{ fill: "#84DBFF" }} cx="197.2" cy="183.6" r="98.8" />
                            <g>
                                <path style={{ fill: "#E6E9EE" }} d="M182.8,281.6c1.2,0,2.4,0.4,3.6,0.4C185.2,282,184,281.6,182.8,281.6L182.8,281.6z" />
                                <path style={{ fill: "#E6E9EE" }} d="M186.4,282c1.2,0,2.4,0.4,3.6,0.4l0,0C188.8,282,187.6,282,186.4,282z" />
                                <path style={{ fill: "#E6E9EE" }} d="M197.2,204.8L197.2,204.8L197.2,204.8L197.2,204.8z" />
                                <path
                                    style={{ fill: "#E6E9EE" }}
                                    d="M204.4,282.4c2.4,0,4.8-0.4,6.8-0.8l0,0c-4.8,0.8-9.2,1.2-14,1.2c-2.4,0-4.8,0-7.2-0.4
          c-8.8-22-13.6-42.4-16-59.2c5.2-16.8,23.2-18.4,23.2-18.4s18,1.6,23.2,18.4C218,239.6,213.2,260,204.4,282.4z"
                                />
                            </g>
                            <g>
                                <path
                                    style={{ fill: "#F9B54C" }}
                                    d="M218.4,178c0,0,2.8,15.2-21.2,26.8h-0.4c-24-11.6-21.2-26.8-21.2-26.8l0,0c0-0.4,0-0.4,0-0.8
          c6,7.2,13.2,12,21.2,12s15.2-4.8,21.2-12C218.4,177.6,218.4,178,218.4,178L218.4,178z"
                                />
                                <path
                                    style={{ fill: "#F9B54C" }}
                                    d="M180.4,182l-4,2c-1.2-3.6-0.4-6-0.4-6l0,0c0-0.4,0-0.4,0-0.8C177.2,179.2,178.8,180.8,180.4,182z"
                                />
                                <path
                                    style={{ fill: "#F9B54C" }}
                                    d="M218.4,178c0,0,0.4,2.4-0.4,6l-4-2c1.6-1.6,3.2-3.2,4.4-4.8C218.4,177.6,218.4,178,218.4,178
          L218.4,178z"
                                />
                            </g>
                            <g>
                                <path style={{ fill: "#F1543F" }} d="M197.2,204.8L197.2,204.8L197.2,204.8L197.2,204.8z" />
                                <path
                                    style={{ fill: "#F1543F" }}
                                    d="M205.6,207.2l-2.8,8.4h-11.2l-2.8-8.4c4.8-2,8.4-2.4,8.4-2.4S200.8,205.2,205.6,207.2z"
                                />
                            </g>
                            <path
                                style={{ fill: "#FF7058" }}
                                d="M210,266.8c-1.6,5.2-3.6,10.4-5.6,15.6c-2.4,0-4.8,0.4-7.2,0.4s-4.8,0-7.2-0.4
        c-2-5.2-4-10.4-5.6-15.6l7.2-51.2h11.2L210,266.8z"
                            />
                            <g>
                                <path
                                    style={{ fill: "#324A5E" }}
                                    d="M277.2,241.6c-16.8,22.8-42.8,38.4-72.8,40.4c8.8-22,13.6-42.4,16-59.2l0,0c0.4-0.4,6-22.8,3.2-36.4
          l42.4,20.8L277.2,241.6z"
                                />
                                <path
                                    style={{ fill: "#324A5E" }}
                                    d="M190,282.4c-30-2-56-17.6-72.8-40.4l11.2-34.4l42.8-20.4c-3.2,13.6,2.8,35.6,3.2,36.4l0,0
          C176.4,239.6,181.2,260,190,282.4z"
                                />
                            </g>
                            <g>
                                <path
                                    style={{ fill: "#FFFFFF" }}
                                    d="M218.4,178c0,0,2.8,15.2-21.2,26.8c0,0,18,1.6,23.2,18.4C220.4,223.6,230.4,186.8,218.4,178z"
                                />
                                <path
                                    style={{ fill: "#FFFFFF" }}
                                    d="M175.6,178c0,0-2.8,15.2,21.2,26.8c0,0-18,1.6-23.2,18.4C173.6,223.6,164,186.8,175.6,178z"
                                />
                            </g>
                            <path
                                style={{ fill: "#FFD05B" }}
                                d="M224.4,160.8c-2.8,8.8-4,13.6-4,14l0,0c-6.4,8.4-14.4,14.4-23.2,14.4c-8.4,0-16-5.2-22-12.8h0.4
        c-13.2-16-4-46-4-46c6.4,7.6,27.6,8,27.6,8c-9.2-1.6-10.8-8.8-10.8-8.8c1.6,4.4,22,7.2,22,7.2C231.6,140,224.4,160.8,224.4,160.8z"
                            />
                            <path
                                style={{ fill: "#324A5E" }}
                                d="M184.8,99.6c0,0,28.8-11.6,43.6,14.8c15.6,28-4,58.4-8,60.8c0,0,1.2-4.8,4-14c0,0,7.2-20.8-14-24
        c0,0-20.4-2.8-22-7.2c0,0,1.6,7.6,10.8,8.8c0,0-21.2-0.4-27.6-8c0,0-9.2,29.6,4,46c0,0-22.8-18.4-20-46.4
        C155.2,130.4,154,92,184.8,99.6z"
                            />
                        </g>
                    </svg>

                </Link>
            </div>

            <div>
                <ul className='flex gap-2 sm:gap-5'>
                {
                  menusItems.map((menusItem, index) => (
                    <li key={index}>
                        <Link href={menusItem.path} className={`px-2 py-2 text-base flex items-center gap-1 ${pathname === menusItem.path ? 'text-blue-500' : 'text-black'}`}>{menusItem.Icon}  <span>{menusItem.label}</span></Link>

                    </li>
                  ))
                }
                </ul>
            </div>
        </header>
    )
}

export default Header
