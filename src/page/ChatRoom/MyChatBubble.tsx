import { format } from "date-fns";

interface IMyChatBubble {
  content: string;
  time: string;
}

function MyChatBubble({ content, time }: IMyChatBubble) {
  return (
    <div className="flex items-end justify-end">
      <div className="flex">
        <span className="flex items-end mr-1 text-[10px] text-gray-400 shrink-0">
          {format(new Date(time), "p")}
        </span>
        <div className="flex flex-wrap items-center py-2 px-4 rounded-l-3xl rounded-tr-[34px] text-white text-[0.75rem] bg-primary mobile:text-sm">
          {content}
        </div>
      </div>
    </div>
  );
}

export default MyChatBubble;
