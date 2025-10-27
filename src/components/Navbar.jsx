import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useMatch, useMatchRoute, useRouterState } from "@tanstack/react-router"
import { closeSideBar, openSideBar } from "../Redux/Navbar/navbarSlice"
import Links from "../links"

export const NavBar = () => {
    let routerState = useRouterState()
    let { sideBar } = useSelector((state) => state.navbar)
    let dispatch = useDispatch()
    function sideBarOpen() {
        dispatch(openSideBar())
    }

    // current selected link 
    let currentUrl = routerState.location.pathname
    let isHomeActive = currentUrl.startsWith("/home")
    let isSubHomeActive = currentUrl.startsWith("/home/slider")
    let isAboutActive = currentUrl.startsWith("/about")
    let isExploreActive = currentUrl.startsWith("/explore")
    let isPagesActive = currentUrl.startsWith("/myPages")
    let isSubPagesActive = currentUrl.startsWith("/myPages/1")
    let isBlogActive = currentUrl.startsWith("/blog")
    let isContactActive = currentUrl.startsWith("/contact")

    return (
        <div className="flex justify-center items-center pt-[40px] px-10 bg-[#161616]">
            {/* Nav container */}
            <div className="flex w-full lg:w-auto justify-between items-center gap-10">
                {/* Logo */}
                <div className="flex items-center gap-4 mr-9">
                    <img loading="lazy" src="/assets/Logo.png" alt="Logo" />
                    <p className="text-[26px] font-medium font-[sans-serif]">OpeN
                        <span className="textYellow text-[27px] font-semibold">9</span>
                    </p>
                </div>
                {/* Nav links */}
                <nav className="hidden lg:inline-block">
                    <ul className="flex text-[16px] font-bold gap-5 xl:gap-7 ">
                        <li className="group cursor-pointer relative">
                            <a className={`transition duration-200 flex items-center gap-2 decoration-0`}>
                                <span className={`${isHomeActive && "textYellow"} group-hover:textYellow`}>Home</span>
                                <div className="flex items-center">
                                    <span className={`${isHomeActive && "bg-[#ddf247]"} inline-block bg-[#5a5a5a] group-hover:yellow w-[5px] h-0.5 transform rotate-45 transition duration-200`}></span>
                                    <span className={`${isHomeActive && "bg-[#ddf247]"} inline-block -ml-0.5 bg-[#5a5a5a] group-hover:yellow w-[5px] h-0.5 transform -rotate-45 transition duration-200`}></span>
                                </div>
                            </a>
                            <ul className="absolute z-20 -left-4 top-9 mt-2  flex-col gap-3 bg-black text-white text-[16px] font-semibold shadow-md rounded-md p-2 w-[250px] px-9 py-[26px] flex opacity-0 pointer-events-none translate-y-2 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 text-nowrap transition-all duration-300">
                                {/* Home links */}
                                {
                                    Links.homeLinks.map(link => {
                                        let match = routerState.location.pathname === link.to
                                        return <Link key={link.to} to={link.to} className={`${match ? "textYellow" : "text-white"} hover:textYellow`}>{link.label}</Link>
                                    })
                                }
                                <li className="group/sub">
                                    <Link to={"/"}>
                                        <div className={`${isSubHomeActive && "textYellow"} group-hover/sub:textYellow flex items-center justify-between`}>
                                            Home Slider Style
                                            <div className="flex items-center -rotate-90">
                                                <span className={`${isSubHomeActive && "bg-[#ddf247]"} inline-block bg-[#5a5a5a] group-hover/sub:yellow w-[5px] h-[2px] transform rotate-45 transition duration-200`}></span>
                                                <span className={`${isSubHomeActive && "bg-[#ddf247]"} inline-block -ml-[2px] bg-[#5a5a5a] group-hover/sub:yellow w-[5px] h-[2px] transform -rotate-45 transition duration-200`}></span>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="absolute bottom-[5%] left-[70%]  w-[30px] h-[20%] group-hover/sub:w-full group-hover:block"></div>
                                    <ul className="absolute left-full top-[80%] ml-0.5 flex-col gap-3 bg-black text-white text-[16px] font-[600] shadow-md rounded-md p-2 w-[250px] px-[36px] py-[26px] flex opacity-0 group-hover/sub:opacity-100 text-nowrap transition-all duration-500">
                                        {/* Home sub links */}
                                        {
                                            Links.subHomeLinks.map(sub => {
                                                let subMatch = routerState.location.pathname.startsWith(sub.to)
                                                return <Link key={sub.to} to={sub.to} className={`${subMatch ? "textYellow" : "text-white"} hover:textYellow`}>{sub.label}</Link>
                                            })
                                        }
                                    </ul>
                                </li>
                            </ul>
                            <div className="absolute top-full left-0 w-full h-[3px] group-hover:h-full group-hover:block"></div>
                        </li>

                        <li className="hover:textYellow cursor-pointer transition duration-200">
                            <Link to={"/aboutUS"} className={`${isAboutActive ? "textYellow" : "text-white"} hover:textYellow`}>About us</Link>
                        </li>

                        <li className="group cursor-pointer relative">
                            <a className="transition duration-200 flex items-center gap-2">
                                <span className={`${isExploreActive && 'textYellow'} group-hover:textYellow`}>Explore</span>
                                <div className="flex items-center">
                                    <span className={`${isExploreActive && "bg-[#ddf247]"} inline-block bg-[#5a5a5a] group-hover:yellow w-[5px] h-[2px] transform rotate-45 transition duration-200`}></span>
                                    <span className={`${isExploreActive && "bg-[#ddf247]"} inline-block -ml-[2px] bg-[#5a5a5a] group-hover:yellow w-[5px] h-[2px] transform -rotate-45 transition duration-200`}></span>
                                </div>
                            </a>
                            <ul className="absolute -left-4 top-9 mt-2  flex-col gap-3 bg-black text-white text-[16px] font-[600] shadow-md rounded-md p-2 w-[250px] px-[36px] py-[26px] flex opacity-0 pointer-events-none translate-y-2 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 text-nowrap transition-all duration-300">
                                {/* Explore links */}
                                {
                                    Links.exploreLinks.map(link => {
                                        let match = routerState.location.pathname === link.to
                                        return <Link key={link.to} to={link.to} className={`${match ? "textYellow" : "text-white"} hover:textYellow`}>{link.label}</Link>
                                    })
                                }
                            </ul>
                            <div className="absolute top-full left-0 w-full h-[3px] group-hover:h-full group-hover:block"></div>
                        </li>

                        <li className="group cursor-pointer relative">
                            <a className="transition duration-200 flex items-center gap-2">
                                <span className={`${isPagesActive && "textYellow"} group-hover:textYellow`}>Pages</span>
                                <div className="flex items-center">
                                    <span className={`${isPagesActive && "bg-[#ddf247]"} inline-block bg-[#5a5a5a] group-hover:yellow w-[5px] h-[2px] transform rotate-45 transition duration-200`}></span>
                                    <span className={`${isPagesActive && "bg-[#ddf247]"} inline-block -ml-[2px] bg-[#5a5a5a] group-hover:yellow w-[5px] h-[2px] transform -rotate-45 transition duration-200`}></span>
                                </div>
                            </a>
                            <ul className="absolute -left-4 top-9 mt-2  flex-col gap-3 bg-black text-white text-[16px] font-[600] shadow-md rounded-md p-2 w-[250px] px-[36px] py-[26px] flex opacity-0 pointer-events-none translate-y-2 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 text-nowrap transition-all duration-300">
                                <li className="group/sub">
                                    <Link>
                                        <div className={`${isSubPagesActive && "textYellow"} group-hover/sub:textYellow flex items-center justify-between`}>
                                            Market
                                            <div className="flex items-center -rotate-90">
                                                <span className={`${isSubPagesActive && "bg-[#ddf247]"} inline-block bg-[#5a5a5a] group-hover/sub:yellow w-[5px] h-[2px] transform rotate-45 transition duration-200`}></span>
                                                <span className={`${isSubPagesActive && "bg-[#ddf247]"} inline-block -ml-[2px] bg-[#5a5a5a] group-hover/sub:yellow w-[5px] h-[2px] transform -rotate-45 transition duration-200`}></span>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="absolute top-0 left-[80%] w-[30px] h-[60px] group-hover/sub:w-full group-hover:block"></div>
                                    <ul className="absolute left-full top-0 ml-0.5 flex-col gap-3 bg-black text-white text-[16px] font-[600] shadow-md rounded-md p-2 w-[250px] px-[36px] py-[26px] flex opacity-0 group-hover/sub:opacity-100 text-nowrap transition-all duration-500">
                                        {/* Sub Page links */}
                                        {
                                            Links.subPageLinks.map(sub => {
                                                let subMatch = routerState.location.pathname === sub.to
                                                return <Link key={sub.to} to={sub.to} className={`${subMatch ? "textYellow" : "text-white"} hover:textYellow`}>{sub.label}</Link>
                                            })
                                        }
                                    </ul>
                                </li>
                                {/* Page links */}
                                {
                                    Links.pageLinks.map(link => {
                                        let match = routerState.location.pathname === link.to
                                        return <Link key={link.to} to={link.to} className={`${match ? "textYellow" : "text-white"} hover:textYellow`}>{link.label}</Link>
                                    })
                                }
                            </ul>
                            <div className="absolute top-[70%] left-0 w-full h-[3px] group-hover:h-[120%] group-hover:block"></div>
                        </li>

                        <li className="group cursor-pointer relative">
                            <a className="transition duration-200 flex items-center gap-2">
                                <span className={`${isBlogActive && "textYellow"} group-hover:textYellow`}>Blog</span>
                                <div className="flex items-center">
                                    <span className={`${isBlogActive && "bg-[#ddf247]"} inline-block bg-[#5a5a5a] group-hover:yellow w-[5px] h-[2px] transform rotate-45 transition duration-200`}></span>
                                    <span className={`${isBlogActive && "bg-[#ddf247]"} inline-block -ml-[2px] bg-[#5a5a5a] group-hover:yellow w-[5px] h-[2px] transform -rotate-45 transition duration-200`}></span>
                                </div>
                            </a>
                            <ul className="absolute -left-4 top-9 mt-2  flex-col gap-3 bg-black text-white text-[16px] font-[600] shadow-md rounded-md p-2 w-[250px] px-[36px] py-[26px] flex opacity-0 pointer-events-none translate-y-2 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 text-nowrap transition-all duration-300">
                                {/* Blog links */}
                                {
                                    Links.blogLinks.map(link => {
                                        let match = routerState.location.pathname === link.to
                                        return <Link key={link.to} to={link.to} className={`${match ? "textYellow" : "text-white"} hover:textYellow`}>{link.label}</Link>
                                    })
                                }
                            </ul>
                            <div className="absolute top-[80%] left-0 w-full h-[3px] group-hover:h-full group-hover:block"></div>
                        </li>

                        <li className="hover:textYellow cursor-pointer transition duration-200">
                            <Link to={"/contact"} className={`${isContactActive && "textYellow"} group-hover:textYellow`}>Contact</Link>
                        </li>
                    </ul>
                </nav>
                {/* Buttons */}
                <div className="flex justify-center items-center gap-6">
                    <button className="hidden md:flex justify-center items-center gap-3 yellow hover:bg-white transition duration-500 px-5 py-3 rounded-[12px] text-[14px] font-[800]">
                        <p>Wallet Connect</p>
                        <img loading="lazy" src="/assets/wallet.png" className="w-4.5 h-4.5 " alt="wallet" />
                    </button>
                    <button>
                        <img loading="lazy" src="/assets/searchIcon.png" alt="search" className="w-5.5 h-5.5 invert-100 brightness-0" />
                    </button>
                    <button onClick={sideBarOpen}>
                        <div className="flex flex-col gap-1 items-end">
                            <div className=" h-[3px] w-6 lg:w-5 bg-white lg:rounded-full"></div>
                            <div className=" h-[3px] w-6 lg:w-6 bg-white lg:rounded-full"></div>
                            <div className=" h-[3px] w-6 lg:w-3 bg-white lg:rounded-full"></div>
                        </div>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default NavBar  