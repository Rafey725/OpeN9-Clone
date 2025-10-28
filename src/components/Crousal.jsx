import { useSearch } from "@tanstack/react-router"
import { useRef, useState } from "react"

export default function Crousal() {
    let sliderRef = useRef(null)
    let [centerIndex, setCenterIndex] = useState(3)
    let images = [
        "/assets/banner-1.jpg",
        "/assets/banner-2.jpg",
        "/assets/banner-3.jpg",
        "/assets/banner-4.jpg",
        "/assets/banner-5.jpg",
        "/assets/banner-6.jpg",
        "/assets/banner-7.jpg",
    ]

    let imageElement = images.map((image, index) => {
        const distance = Math.abs(centerIndex - index)
        let wrapper = index === centerIndex ?
            {
                zIndex: 100 - index,
                transform: 'scaleY(1.1)'
            }
            : index > centerIndex ?
                {
                    zIndex: 100 - index,
                    transform: `
                     translateX(-${(index - centerIndex) * 40}%) 
                     rotateY(-25deg) 
                     scaleY(${1 - distance * 0.1})`
                }
                : {
                    zIndex: -(100 - index),
                    transform: `
                    translateX(${(centerIndex - index) * 29}%)
                     rotateY(25deg)
                      scaleY(${1 - distance * 0.1})
                      ` }
        return (
            <div
                style={wrapper}
                className="shrink-0 rounded-[20px] bg-[#1e1e1e] flex flex-col items-center font-[sans-serif] overflow-hidden px-3 py-3 hover:-translate-y-5 transition-transform duration-100"
            >
                <div className="relative w-[318px] h-[338px] overflow-hidden rounded-[35px] group/img cursor-grab">
                    <img
                        src={image}
                        alt=""
                        className="shrink-0 w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-110 relative cursor-pointer"
                    />
                    <button className="absolute -bottom-10 group-hover/img:bottom-3 left-1/2 z-40 px-7 py-2 bg-white hover:bg-[#ddf247] text-black -translate-x-[50%] rounded-xl transition-all duration-300">
                        Place bid
                    </button>
                </div>
                <h2 className="text-[18px] font-extrabold">Dayco serpentine belt</h2>
                <p className="text-[14px] font-normal mb-3">0,34</p>
            </div>
        )
    })

    return (
        <div className="mt-52 2xl:mt-10 flex 2xl:px-10 justify-between items-center group">
            <button className="hidden 2xl:flex justify-center items-center group/sub opacity-0 group-hover:opacity-100 bg-[#2e2e2e] hover:bg-[#ddf247] px-3 py-3 rounded-full transition duration-500">
                <img src="/assets/previous.svg" alt="" className="w-12 h-12 group-hover/sub:invert-100" />
            </button>

            <div className={`w-screen 2xl:w-[80vw] -mt-40 overflow-x-hidden overflow-y-visible 2xl:m-auto cursor-grab`}>
                <div
                    ref={sliderRef}
                    className={`flex -translate-x-[22vw] perspective-[1000px] py-20`}>
                    {imageElement}
                </div>
            </div>

            <button className="hidden 2xl:flex justify-center items-center group/sub opacity-0 group-hover:opacity-100 bg-[#2e2e2e] hover:bg-[#ddf247] px-3 py-3 rounded-full transition duration-500">
                <img src="/assets/next.svg" alt="" className="w-12 h-12 group-hover/sub:invert-100" />
            </button>
        </div>
    )
}