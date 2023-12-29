import { format } from "date-fns";
import { ReactComponent as Logo } from "../../assets/Logo.svg";

interface IMyChatBubble {
  petName: string;
  content: string;
  time: string;
}

function PetChatBubble({ petName, content, time }: IMyChatBubble) {
  return (
    <div className="flex">
      <div className="flex flex-col items-center justify-end mr-1 relative">
        <div className="flex justify-center items-center rounded-full h-9 w-9 bg-white">
          <Logo width={32} height={32} />
        </div>
        <span className="absolute text-[12px] top-full leading-6 text-gray-600">
          {petName}
        </span>
      </div>

      <div className="flex">
        <div className="px-4 py-2 mr-1 rounded-r-3xl rounded-tl-[34px] text-sm w-max-1/2 bg-white text-gray-600">
          {content}
        </div>
        <span className="flex items-end text-[10px] text-gray-400">
          {format(new Date(time), "p")}
        </span>
      </div>
    </div>
  );
}

export default PetChatBubble;
