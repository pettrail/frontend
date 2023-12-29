interface IChatInput {
  onClickSend: () => void;
  onHandleMessage: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function ChatInput({ onClickSend, onHandleMessage }: IChatInput) {
  return (
    // <div className="absolute bottom-0 inset-x-0 flex flex-row items-center h-16 rounded-xl bg-white w-full">
    <div className="absolute h-16 flex items-center bg-white bottom-0 inset-x-0 z-50">
      <div className="flex-grow ml-4">
        <div className="relative w-full">
          <input
            type="text"
            className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
            onChange={(e) => onHandleMessage(e)}
          />
        </div>
      </div>
      <div>
        <button
          className="flex items-center justify-center"
          onClick={onClickSend}
        >
          <span className="ml-2">
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="35"
                height="35"
                rx="5"
                fill="#C3C7CE"
                fillOpacity="0.2"
              />
              <path
                d="M21.4288 17.3211L21.4303 17.3225C21.4537 17.3458 21.4723 17.3734 21.485 17.4039C21.4977 17.4344 21.5042 17.467 21.5042 17.5C21.5042 17.5331 21.4977 17.5657 21.485 17.5962C21.4723 17.6266 21.4537 17.6543 21.4303 17.6775L21.4274 17.6804C21.4042 17.7039 21.3765 17.7225 21.346 17.7352C21.3156 17.7479 21.2829 17.7544 21.2499 17.7544C21.2169 17.7544 21.1842 17.7479 21.1538 17.7352C21.1233 17.7225 21.0956 17.7039 21.0724 17.6804L21.0715 17.6795L18.604 15.2045L17.7499 14.3478V15.5575V21.25C17.7499 21.3163 17.7236 21.3799 17.6767 21.4268C17.6298 21.4737 17.5662 21.5 17.4999 21.5C17.4336 21.5 17.37 21.4737 17.3231 21.4268L16.9696 21.7804L17.3231 21.4268C17.2762 21.3799 17.2499 21.3163 17.2499 21.25V15.5575V14.3478L16.3958 15.2045L13.9288 17.679C13.9288 17.679 13.9288 17.6791 13.9287 17.6791C13.8813 17.7265 13.817 17.7531 13.7499 17.7531C13.6828 17.7531 13.6184 17.7264 13.5709 17.679C13.5235 17.6315 13.4968 17.5672 13.4968 17.5C13.4968 17.4668 13.5034 17.4339 13.5161 17.4032C13.5288 17.3725 13.5474 17.3446 13.5709 17.3211L13.2174 16.9675L13.5709 17.3211L17.3161 13.576C17.3392 13.5545 17.3662 13.5376 17.3956 13.5262L17.3957 13.5263L17.4049 13.5225C17.4658 13.4975 17.534 13.4975 17.5949 13.5225L17.5949 13.5226L17.6041 13.5262C17.6336 13.5376 17.6606 13.5545 17.6837 13.576L21.4288 17.3211Z"
                stroke="white"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
export default ChatInput;
