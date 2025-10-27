import { useEffect, useRef, useState } from "react"

export default function Cursor() {
    let cursorRef = useRef(null)
    let [hovered, setHovered] = useState(false)
    useEffect(() => {
        let moveCursor = (e) => {
            let radius = 52 / 2
            cursorRef.current.style.top = `${e.clientY - radius}px`
            cursorRef.current.style.left = `${e.clientX - radius}px`
        }
        let handleHover = (e) => {
            const tag = e.target.tagName.toLowerCase();
            const interactive = ["a", "button", "input", "textarea", "select", "label"].includes(tag) || window.getComputedStyle(e.target).cursor === "pointer";
            setHovered(interactive)
        }
        document.addEventListener("mousemove", moveCursor)
        document.addEventListener("mouseover", handleHover)
        return () => {
            document.addEventListener("mousemove", moveCursor)
            document.addEventListener("mouseover", handleHover)
        }
    })
    return (
        <div ref={cursorRef} className={`fixed z-999 ${hovered ? '' : 'border border-[#ddf247]'} w-10 h-10 pointer-events-none flex justify-center items-center rounded-full `}>
            <div className={`absolute ${hovered ? "bg-[#ddf247]/30 w-19 h-19" : "bg-[#ddf247] w-2 h-2 "} transition-all duration-500  rounded-full`}></div>
        </div>)
}