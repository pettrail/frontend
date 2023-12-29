import { format } from "date-fns";

interface IMyChatBubble {
  content: string;
  time: string;
}

function MyChatBubble({ content, time }: IMyChatBubble) {
  return (
    <div className="flex items-end justify-end">
      <div className="flex">
        <span className="flex items-end mr-1 text-[10px] text-gray-400">
          {format(new Date(time), "p")}
        </span>
        <div className="px-4 py-2 rounded-l-3xl rounded-tr-[34px] text-white text-sm w-max-1/2 bg-primary">
          {content}
        </div>
      </div>
    </div>
  );
}

export default MyChatBubble;
