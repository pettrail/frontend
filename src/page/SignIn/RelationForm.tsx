import { Dispatch, SetStateAction } from "react";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";

interface IRelationForm {
  pageIdx: number;
  setPageIdx: Dispatch<SetStateAction<number>>;
}

interface IRelationInputs {
  relation: string;
}

function RelationForm({ pageIdx, setPageIdx }: IRelationForm) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<IRelationInputs>();

  return (
    <form className="mt-10 space-y-5">
      <div>
        <label
          htmlFor="relation"
          className="block text-sm font-medium text-gray-900 mb-2"
        >
          반려동물이 보호자님을 부른 애칭을 입력해주세요.
        </label>
        <input
          id="relation"
          {...register("relation", { required: true })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary block w-full p-2.5"
          placeholder="언니, 오빠, 엄마 등"
          required
        />
      </div>

      <Button
        onClick={(e) => {
          e.preventDefault();
          console.log(isValid);
          if (pageIdx < 2 && isValid) {
            setPageIdx((prev) => prev + 1);
          }
        }}
        width="w-full"
        color={isValid ? "bg-primary" : "bg-secondaryGray"}
        text="다음"
        py="py-3"
        fontSize="text-sm"
      />
    </form>
  );
}
export default RelationForm;
