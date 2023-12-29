import { Outlet, useLocation } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { nameState, petNameState } from "./atom/basicInfo";

function App() {
  const [loggedIn, setLoggedIn] = useState<boolean>(
    localStorage.getItem("loggedIn") === "true" ? true : false
  );

  const { pathname } = useLocation();
  const setScreenSize = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  };

  useEffect(() => {
    setScreenSize();
  });

  return (
    <div className="h-full mx-auto mobile:max-w-[500px] border bg-gray-50 relative overflow-hidden overscroll-y-none">
      <main className="border-box h-full p-3 pb-[5rem] mobile:px-4 mobile:pt-4">
        <Outlet />
      </main>
      {localStorage.getItem("name") &&
        localStorage.getItem("name")?.length !== 0 &&
        pathname !== "/chat" && <NavigationBar />}
    </div>
  );
}

export default App;
