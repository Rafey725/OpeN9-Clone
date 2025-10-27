import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/home/")({
  component: Home,
});

function Home() {
  return (
    <>
      <div className="min-h-[800px] mt-[90px]">
        {/* hero section */}
        <div className={`grid grid-cols-[1fr_auto_1fr]`}>
          <div>
            <img src="/assets/item2.png" alt="" className={`relative mt-18 left-[30%] animate-[spin_1.5s_linear_infinite]`} />
            <img src="/assets/item3.png" alt="" className={`relative mt-20 left-[50%] animate-[smoothBounce_2.5s_ease-in-out_infinite]`} />
            <img src="/assets/dotItem.png" alt="" className={`relative -mt-17 left-[10%] animate-[shineFirst_5s_ease-in_infinite]`} />
            <img src="/assets/dotItem.png" alt="" className={`relative mt-10 left-[75%] animate-[shineSecond_5s_ease-in_infinite]`} />
          </div>
          <div className={`text-center `}>
            <h1 className={`text-[54px] pb-7 font-extrabold`}>World Of Top Works</h1>
            <p className="text-[14px] tracking-widest font-normal text-[#ffffff87] max-w-[600px]">Welcome to the world of rare digital art. Explore the best art from hand-picked digital artist out there and find the hidden gem.</p>
            <div className={`text-black font-[sans-serif] flex gap-4 justify-center mt-12`}>
              <button className={`text-[14px] flex justify-center items-center gap-1.5 font-semibold bg-[#ddf247] hover:bg-white w-[190px] h-[50px] rounded-[12px] transition duration-500`}>
                <span>Discover More</span>
                <img src="/assets/arrow.svg" alt="arrow" className={`h-7 rotate-45 mb-1`} /></button>
              <button className={`text-[14px] flex justify-center items-center gap-1.5 font-semibold bg-white hover:bg-[#ddf247] w-[190px] h-[50px] rounded-[12px] transition duration-500`}>
                <span>All Collections</span>
                <img src="/assets/arrow.svg" alt="arrow" className={`h-7 rotate-45 mb-1`} /></button>
            </div>
          </div>
          <div>
            <img src="/assets/item1.png" alt="" className={`relative mt-20 left-[85%] w-[20px] h-[20px] animate-[scale_3s_linear_infinite]`} />
            <img src="/assets/item4.png" alt="" className={`relative mt-10 left-[25%] animate-[sideBounce_4s_ease-in-out_infinite]`} />
            <img src="/assets/dotItem.png" alt="" className={`relative mt-16 left-[20%] animate-[shineSecond_5s_ease-in_infinite]`} />
            <img src="/assets/item5.png" alt="" className={`relative -mt-10 left-[65%] w-[35px] h-[35px] animate-[scale_3s_linear_infinite]`} />
          </div>
        </div>
        {/* Image slider */}
        <div className={`flex mt-20`}>
          <img src="/assets/banner-1.jpg" alt="banner" className={`w-[318px] h-[338px] rounded-[25px] border-13 border-[#1e1e1e]`} />
          <img src="/assets/banner-2.jpg" alt="banner" className={`w-[318px] h-[338px] rounded-[25px] border-13 border-[#1e1e1e]`} />
          <img src="/assets/banner-3.jpg" alt="banner" className={`w-[318px] h-[338px] rounded-[25px] border-13 border-[#1e1e1e]`} />
          <img src="/assets/banner-4.jpg" alt="banner" className={`w-[318px] h-[338px] rounded-[25px] border-13 border-[#1e1e1e]`} />
          <img src="/assets/banner-5.jpg" alt="banner" className={`w-[318px] h-[338px] rounded-[25px] border-13 border-[#1e1e1e]`} />
          <img src="/assets/banner-6.jpg" alt="banner" className={`w-[318px] h-[338px] rounded-[25px] border-13 border-[#1e1e1e]`} />
          <img src="/assets/banner-7.jpg" alt="banner" className={`w-[318px] h-[338px] rounded-[25px] border-13 border-[#1e1e1e]`} />
        </div>
      </div>

    </>
  );
}

export default Home
