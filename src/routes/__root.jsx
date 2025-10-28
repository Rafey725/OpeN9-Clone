import { Outlet, createRootRoute } from "@tanstack/react-router";
import NavBar from "../components/Navbar";
import SideBar from "../components/Sidebar";
import { useSelector } from "react-redux";
import Cursor from "../components/cursor";

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFoundPage,
});


function RootLayout() {
  let { sideBar } = useSelector((state) => state.navbar)
  return (
    <main className="w-screen h-screen">
      <div className={`w-screen h-screen absolute bg-black z-10 pointer-events-none ${sideBar ? "opacity-50" : "opacity-0"} transition duration-500`}></div>
      <NavBar />
      <SideBar />
      <Cursor />
      <Outlet />
    </main>
  );
}


// ✅ Custom Not Found page
function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold mb-4 text-red-500">404</h1>
      <p className="text-lg text-gray-400">Page Not Found</p>
    </div>
  )
}