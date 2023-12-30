import { UseFormRegister } from "react-hook-form";
import { FaArrowUp } from "react-icons/fa6";
import { IChatInputs } from ".";

interface IChatInput {
  register: UseFormRegister<IChatInputs>;
  isValid: boolean;
  onClickSend: () => void;
}

function ChatInput({ register, isValid, onClickSend }: IChatInput) {
  console.log(isValid);
  return (
    // <div className="absolute bottom-0 inset-x-0 flex flex-row items-center h-16 rounded-xl bg-white w-full">
    <div className="px-3 absolute h-16 flex items-center bg-white bottom-0 inset-x-0 z-50">
      <input
        {...register("message", { required: true })}
        type="text"
        className="flex grow border text-sm rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10 mr-3"
      />
      <button
        className={`flex items-center justify-center w-9 h-9 rounded-lg transition ${
          isValid ? "bg-primary" : "bg-primaryLight"
        }`}
        onClick={onClickSend}
      >
        <FaArrowUp className="text-white" />
      </button>
    </div>
  );
}
export default ChatInput;
