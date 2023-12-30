import { useEffect } from "react";
import SplashHack from "../assets/images/SplashHack.png";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function Splash() {
  const navigate = useNavigate();
  useEffect(() => {
    if (
      localStorage.getItem("name") &&
      localStorage.getItem("name")?.length !== 0
    ) {
      navigate("/home");
    }
  }, []);
  return (
    <div className="absolute inset-0 flex flex-col justify-center items-center h-full bg-splash">
      <img className="w-2/3 mb-10" alt="splash logo" src={SplashHack} />
      <Button
        link="/signin"
        text="시작하기"
        width="w-2/3"
        color="bg-gray-600"
      />
    </div>
  );
}

export default Splash;
