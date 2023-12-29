import { Dispatch, SetStateAction } from "react";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";

interface IMemoriesForm {
  pageIdx: number;
  setPageIdx: Dispatch<SetStateAction<number>>;
}

interface IMemoriesInputs {
  memories: string;
}

function MemoriesForm({ pageIdx, setPageIdx }: IMemoriesForm) {
  const {
    register,
    getValues,
    formState: { isValid },
  } = useForm<IMemoriesInputs>({
    defaultValues: {
      memories: localStorage.getItem("memories") ?? undefined,
    },
  });

  return (
    <form className="mt-10 space-y-5">
      <div>
        <label
          htmlFor="relation"
          className="block text-sm font-medium text-gray-900 mb-2"
        >
          추억을 자세히 입력할수록 반려동물과 공유할 수 있는 대화 주제가
          많아져요.
        </label>
        <textarea
          {...register("memories", { required: true })}
          id="relation"
          rows={4}
          className="box-border block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
          placeholder="초코는 뽁뽁이 인형을 꼭 내 침대 머리맡에 숨겨놓곤 했어. 어릴 때부터 있었던 버릇이었는데, 마지막 순간까지 뽁뽁이 인형을 숨겨놓더라."
        ></textarea>
      </div>

      <div>
        <label
          htmlFor="relation"
          className="block text-sm font-medium text-gray-900 mb-2"
        >
          반려동물의 사진을 최소 5장 이상 첨부해주세요
        </label>
      </div>

      <Button
        onClick={(e) => {
          e.preventDefault();
          if (pageIdx < 2 && isValid) {
            setPageIdx((prev) => prev + 1);
          }
        }}
        width="w-full"
        color={isValid ? "bg-primary" : "bg-secondaryGray"}
        text="확인"
        py="py-3"
        fontSize="text-sm"
      />
    </form>
  );
}
export default MemoriesForm;
