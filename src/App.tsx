import { Outlet, useLocation } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import { useEffect } from "react";

function App() {
  const {pathname} = useLocation();
  const setScreenSize = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  useEffect(() => {
    setScreenSize();
  });
  return (
    <div className="h-full mx-auto mobile:max-w-[500px] border bg-gray-50 relative overflow-hidden overscroll-y-none">
      <main className="pb-[95px]">
        <Outlet />
      </main>
      {pathname !== "/chat" && <NavigationBar />}
    </div>
  );
}

export default App;
