import { useDispatch, useSelector } from "react-redux"
import { closeSideBar, openSideBar } from "../Redux/Navbar/navbarSlice"
import { Link, useRouterState } from "@tanstack/react-router"
import Links from "../links"
import { useState } from "react"

export default function SideBar() {
    let { sideBar } = useSelector((state) => state.navbar)
    let [dropDown, setDropDown] = useState("")
    let dispatch = useDispatch()

    function sideBarClose() {
        dispatch(closeSideBar())
        setDropDown("")
    }
    function setDropDownName(name) {
        dropDown === name ? setDropDown("") : setDropDown(name)
    }

    let routerState = useRouterState()

    // current selected link 
    let currentUrl = routerState.location.pathname
    let isHomeActive = currentUrl.startsWith("/home")
    let isAboutActive = currentUrl.startsWith("/about")
    let isExploreActive = currentUrl.startsWith("/explore")
    let isPagesActive = currentUrl.startsWith("/myPages")
    let isBlogActive = currentUrl.startsWith("/blog")
    let isContactActive = currentUrl.startsWith("/contact")

    return (
        <>
            {/* Desktop side bar  */}
            <div className={`hidden overflow-hidden lg:flex absolute top-0 z-15 right-0 w-[290px] h-screen flex-col px-[20px] py-[30px] bg-[#161616]  ${sideBar ? "translate-x-0" : "translate-x-[200%]"}  transition duration-500`}>
                {/* Logo */}
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-4 mr-9">
                        <img src="/assets/Logo.png" alt="Logo" loading="easy-loading" />
                        <p className="text-[26px] font-medium font-[sans-serif]">OpeN
                            <span className="textYellow text-[27px] font-semibold">9</span>
                        </p>
                    </div>
                    {/* Close button */}
                    <button onClick={sideBarClose} className="">
                        <img src="/assets/crossIcon.svg" alt="Close" />
                    </button>
                </div>
                <div className="mt-[30px] flex flex-col gap-[25px]">
                    {/* Search button */}
                    <div className="bg-[#232323] w-full h-[52px] py-[15px] px-[15px] rounded-[12px] flex justify-between">
                        <input type="search" name="search" placeholder="Search..." className=" text-[14px] font-semibold font-[sans-serif] text-[#9696a7]  outline-none" />
                        <img src="/assets/searchIcon.png" alt="search" className="w-5 h-5 invert-100 brightness-0 cursor-pointer" />
                    </div>
                    {/* Categories */}
                    <div className="w-full px-[15px] py-[18px] bg-[#232323] rounded-[12px]">
                        <h1 className="font-semibold">Categories</h1>
                        <div className="border-b border-white/10 py-3">
                            <div className="flex justify-between items-center text-[14px] font-semibold py-3">
                                <div className="flex gap-2 items-center">
                                    <img src="/assets/categoryIcon.png" alt="" className="w-3.5 h-3.5 invert-100" />
                                    <p>NFTs</p>
                                </div>
                                <p className="text-white/30">(1.483)</p>
                            </div>
                            <div className="flex justify-between items-center text-[14px] font-semibold border-b border-white/10 py-3">
                                <div className="flex gap-2 items-center">
                                    <img src="/assets/categoryIcon.png" alt="" className="w-3.5 h-3.5 invert-100" />
                                    <p>Digital Art</p>
                                </div>
                                <p className="text-white/30">(97)</p>
                            </div>
                            <div className="flex justify-between items-center text-[14px] font-semibold border-b border-white/10 py-3">
                                <div className="flex gap-2 items-center">
                                    <img src="/assets/categoryIcon.png" alt="" className="w-3.5 h-3.5 invert-100" />
                                    <p>Crypto</p>
                                </div>
                                <p className="text-white/30">(45)</p>
                            </div>
                            <div className="flex justify-between items-center text-[14px] font-semibold pt-3">
                                <div className="flex gap-2 items-center">
                                    <img src="/assets/categoryIcon.png" alt="" className="w-3.5 h-3.5 invert-100" />
                                    <p>Technology</p>
                                </div>
                                <p className="text-white/30">(728)</p>
                            </div>
                        </div>
                    </div>
                    {/* Company */}
                    <div className="w-full px-[15px] py-[18px] bg-[#232323] rounded-[12px]">
                        <h1 className="font-semibold">Company</h1>
                        <div className="flex flex-col text-[14px] font-semibold text-white/30 tracking-wide mt-3">
                            <div className="group relative w-fit">
                                <a href="#" className={`group-hover:textYellow transition duration-500`}>Help center</a>
                                <span className="absolute left-0 bottom-0 h-[0.5px] w-full bg-[#ddf247] transition-all duration-500 scale-x-0 group-hover:scale-x-100"></span>
                            </div>
                            <div className="group relative w-fit">
                                <a href="#" className={`group-hover:textYellow transition duration-500`}>Platform status</a>
                                <span className="absolute left-0 bottom-0 h-[0.5px] w-full bg-[#ddf247] transition-all duration-500 scale-x-0 group-hover:scale-x-100"></span>
                            </div>
                        </div>
                    </div>
                    {/* Community */}
                    <div className="w-full px-[15px] py-[18px] bg-[#232323] rounded-[12px]">
                        <h1 className="font-semibold">Join the community</h1>
                        <div className="flex items-center justify-between mt-3 gap-1">
                            {/* facebook */}
                            <div className="bg-[#2e2e2e] hover:bg-[#1877f2] transition duration-400 cursor-pointer w-9 h-9 flex items-center justify-center rounded-full">
                                <img src="/assets/facebook.svg" alt="facebook" className="w-5.5 h-5.5 invert-100 " />
                            </div>
                            {/* twitter */}
                            <div className="bg-[#2e2e2e] hover:bg-[#1d9bf0] transition duration-400 cursor-pointer w-9 h-9 flex items-center justify-center rounded-full">
                                <img src="/assets/twitter.svg" alt="twitter" className="w-5.5 h-5.5 invert-100 " />
                            </div>
                            {/* discord */}
                            <div className="bg-[#2e2e2e] hover:bg-[#5865f2] transition duration-400 cursor-pointer w-9 h-9 flex items-center justify-center rounded-full">
                                <img src="/assets/discord.svg" alt="discord" className="w-5.5 h-5.5 invert-100 " />
                            </div>
                            {/* tiktok */}
                            <div className="bg-[#2e2e2e] hover:bg-black transition duration-400 cursor-pointer w-9 h-9 flex items-center justify-center rounded-full">
                                <img src="/assets/tiktok.svg" alt="tiktok" className="w-5.5 h-5.5 invert-100 " />
                            </div>
                            {/* youtube */}
                            <div className="bg-[#2e2e2e] hover:bg-[#c00] transition duration-400 cursor-pointer w-9 h-9 flex items-center justify-center rounded-full">
                                <img src="/assets/youtube.svg" alt="youtube" className="w-5.5 h-5.5 invert-100 " />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile side bar */}
            <div className={`overflow-y-auto flex lg:hidden absolute top-0 z-15 left-0 w-[290px] h-screen flex-col px-[20px] py-[30px] bg-[#161616]  ${sideBar ? "translate-x-0" : "-translate-x-[200%]"} transition duration-500`}>
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    {/* Logo */}
                    <div className="flex items-center gap-4 mr-9">
                        <img src="/assets/Logo.png" alt="Logo" loading="easy-loading" />
                        <p className="text-[26px] font-medium font-[sans-serif]">OpeN
                            <span className="textYellow text-[27px] font-semibold">9</span>
                        </p>
                    </div>
                    {/* Close button */}
                    <button onClick={sideBarClose} className="">
                        <img src="/assets/crossIcon.svg" alt="Close" />
                    </button>
                </div>
                {/* Body */}
                <div>
                    {/* Nav links */}
                    <nav>
                        <ul className="font-medium tracking-wider my-10">
                            <li className="border-b border-white/10 py-3">
                                <a onClick={() => setDropDownName("home")} className="group transition duration-200 flex items-center justify-between gap-2 cursor-pointer">
                                    <span className={`${isHomeActive && "textYellow"} group-hover:textYellow`}>Home</span>
                                    <div className="flex items-center ">
                                        <span className={`${isHomeActive && "bg-[#ddf247]"}  inline-block bg-[#5a5a5a] group-hover:yellow w-[5px] h-[2px] transform rotate-45 transition duration-200`}></span>
                                        <span className={`${isHomeActive && "bg-[#ddf247]"}  inline-block -ml-[2px] bg-[#5a5a5a] group-hover:yellow w-[5px] h-[2px] transform -rotate-45 transition duration-200`}></span>
                                    </div>
                                </a>
                                <ul onClick={sideBarClose} className={`${dropDown === "home" ? 'max-h-[500px]' : 'max-h-0'} overflow-hidden flex flex-col px-4 transition-all duration-500 ease-in-out`}>
                                    {/* Home links */}
                                    {
                                        Links.homeLinks.map(link => {
                                            let match = routerState.location.pathname === link.to
                                            return <div key={link.to} className="border-b border-white/10 py-3" >
                                                <Link to={link.to} className={`${match ? "textYellow" : "text-white"} hover:textYellow`}>{link.label}</Link>
                                            </div>
                                        })
                                    }
                                    {/* Sub home links */}
                                    {
                                        Links.subHomeLinks.map(sub => {
                                            let subMatch = routerState.location.pathname === sub.to
                                            return <div key={sub.to} className={`${sub.position === 'last' ? "pt-3" : " border-b border-white/10 py-3"}`} >
                                                <Link to={sub.to} className={`${subMatch ? "textYellow" : "text-white"} hover:textYellow`}>{sub.label}</Link>
                                            </div>
                                        })
                                    }
                                </ul>
                            </li>
                            <li className="border-b border-white/10 py-3">
                                <div className="group transition duration-200 flex items-center justify-between gap-2 cursor-pointer">
                                    <Link to={"/aboutUs"} onClick={sideBarClose} className={`${isAboutActive && "textYellow"} group-hover:textYellow`}>About us</Link>
                                </div>
                            </li>
                            <li className="border-b border-white/10 py-3">
                                <a onClick={() => setDropDownName("explore")} className="group transition duration-200 flex items-center justify-between gap-2 cursor-pointer">
                                    <span className={`${isExploreActive && "textYellow"} group-hover:textYellow`}>Explore</span>
                                    <div className="flex items-center ">
                                        <span className={`${isExploreActive && "bg-[#ddf247]"} inline-block bg-[#5a5a5a] group-hover:yellow w-[5px] h-[2px] transform rotate-45 transition duration-200`}></span>
                                        <span className={`${isExploreActive && "bg-[#ddf247]"} inline-block -ml-[2px] bg-[#5a5a5a] group-hover:yellow w-[5px] h-[2px] transform -rotate-45 transition duration-200`}></span>
                                    </div>
                                </a>
                                <ul onClick={sideBarClose} className={`${dropDown === "explore" ? 'max-h-[500px]' : 'max-h-0'} overflow-hidden flex flex-col px-4 transition-all duration-500 ease-in-out`}>
                                    {/* Explore links */}
                                    {
                                        Links.exploreLinks.map(link => {
                                            let match = routerState.location.pathname === link.to
                                            return <div key={link.to} className={`${link.position === 'last' ? "pt-3" : " border-b border-white/10 py-3"}`} >
                                                <Link to={link.to} className={`${match ? "textYellow" : "text-white"} hover:textYellow`}>{link.label}</Link>
                                            </div>
                                        })
                                    }
                                </ul>
                            </li>
                            <li className="border-b border-white/10 py-3">
                                <a onClick={() => setDropDownName("pages")} className="group transition duration-200 flex items-center justify-between gap-2 cursor-pointer">
                                    <span className={`${isPagesActive && "textYellow"} group-hover:textYellow`}>Pages</span>
                                    <div className="flex items-center ">
                                        <span className={`${isPagesActive && "bg-[#ddf247]"} inline-block bg-[#5a5a5a] group-hover:yellow w-[5px] h-[2px] transform rotate-45 transition duration-200`}></span>
                                        <span className={`${isPagesActive && "bg-[#ddf247]"}  inline-block -ml-[2px] bg-[#5a5a5a] group-hover:yellow w-[5px] h-[2px] transform -rotate-45 transition duration-200`}></span>
                                    </div>
                                </a>
                                <ul onClick={sideBarClose} className={`${dropDown === "pages" ? 'max-h-[950px]' : 'max-h-0'} overflow-hidden flex flex-col px-4 transition-all duration-500 ease-in-out`}>
                                    {/* page links */}
                                    {
                                        Links.pageLinks.map(link => {
                                            let match = routerState.location.pathname === link.to
                                            return <div key={link.to} className="border-b border-white/10 py-3" >
                                                <Link to={link.to} className={`${match ? "textYellow" : "text-white"} hover:textYellow`}>{link.label}</Link>
                                            </div>
                                        })
                                    }
                                    {/* Sub page links */}
                                    {
                                        Links.subPageLinks.map(sub => {
                                            let subMatch = routerState.location.pathname === sub.to
                                            return <div key={sub.to} className={`${sub.position === 'last' ? "pt-3" : " border-b border-white/10 py-3"}`} >
                                                <Link to={sub.to} className={`${subMatch ? "textYellow" : "text-white"} hover:textYellow`}>{sub.label}</Link>
                                            </div>
                                        })
                                    }
                                </ul>
                            </li>
                            <li className="border-b border-white/10 py-3">
                                <a onClick={() => setDropDownName("blog")} className="group transition duration-200 flex items-center justify-between gap-2 cursor-pointer">
                                    <span className={`${isBlogActive && "textYellow"} group-hover:textYellow`}>Blog</span>
                                    <div className="flex items-center ">
                                        <span className={`${isBlogActive && "bg-[#ddf247]"} inline-block bg-[#5a5a5a] group-hover:yellow w-[5px] h-[2px] transform rotate-45 transition duration-200`}></span>
                                        <span className={`${isBlogActive && "bg-[#ddf247]"} inline-block -ml-[2px] bg-[#5a5a5a] group-hover:yellow w-[5px] h-[2px] transform -rotate-45 transition duration-200`}></span>
                                    </div>
                                </a>
                                <ul onClick={sideBarClose} className={`${dropDown === "blog" ? 'max-h-[350px]' : 'max-h-0'} overflow-hidden flex flex-col px-4 transition-all duration-500 ease-in-out`}>
                                    {/* Blog links */}
                                    {
                                        Links.blogLinks.map(link => {
                                            let match = routerState.location.pathname === link.to
                                            return <div key={link.to} className={`${link.position === 'last' ? "pt-3" : " border-b border-white/10 py-3"}`} >
                                                <Link to={link.to} className={`${match ? "textYellow" : "text-white"} hover:textYellow`}>{link.label}</Link>
                                            </div>
                                        })
                                    }
                                </ul>
                            </li>
                            <li className="border-b border-white/10 py-3">
                                <div className="group transition duration-200 flex items-center justify-between gap-2 cursor-pointer">
                                    <Link to={"/contact"} onClick={sideBarClose} className={` ${isContactActive && "textYellow"} group-hover:textYellow `}>Contact</Link>
                                </div>
                            </li>
                        </ul>
                    </nav>

                    {/* Search button */}
                    <div className="bg-[#232323] w-full h-[52px] py-[15px] px-[15px] rounded-[12px] flex justify-between">
                        <input type="search" name="search" placeholder="Search..." className=" text-[14px] font-semibold font-[sans-serif] text-[#9696a7]  outline-none" />
                        <img src="/assets/searchIcon.png" alt="search" className="w-5 h-5 invert-100 brightness-0 cursor-pointer" />
                    </div>
                </div >
            </div >
        </>
    )
}