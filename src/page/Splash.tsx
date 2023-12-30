import SplashHack from "../assets/images/SplashHack.png";
import Button from "../components/Button";

function Splash() {
  return (
    <div className="flex flex-col justify-center items-center h-full bg-[#A1A5FF]">
      <img className="w-2/3" alt="splash logo" src={SplashHack} />
      {/* <Button width="w-2/3" color="bg-primary">
        {" "}
      </Button> */}
    </div>
  );
}

export default Splash;
