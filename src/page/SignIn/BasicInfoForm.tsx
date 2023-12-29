import { Dispatch, SetStateAction } from "react";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";

interface IBasicInfoForm {
  pageIdx: number;
  setPageIdx: Dispatch<SetStateAction<number>>;
}

interface IBasicInfoInputs {
  name: string;
  petName: string;
  petGender: string;
}

function BasicInfoForm({ pageIdx, setPageIdx }: IBasicInfoForm) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<IBasicInfoInputs>();

  return (
    <form className="mt-10 space-y-5">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-900 mb-2"
        >
          보호자님의 성함을 입력해주세요.
        </label>
        <input
          id="name"
          {...register("name", { required: true })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary block w-full p-2.5"
          placeholder="홍길동"
          required
        />
      </div>
      <div>
        <label
          htmlFor="petName"
          className="block text-sm font-medium text-gray-900 mb-2"
        >
          반려견의 이름을 입력해주세요.
        </label>
        <input
          id="petName"
          {...register("petName", { required: true })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary block w-full p-2.5"
          placeholder="초코"
          required
        />
      </div>
      <div className="flex flex-col">
        <span className="block text-sm font-medium text-gray-900 mb-1">
          반려견의 성별을 입력해주세요.
        </span>
        <ul className="flex w-full space-x-2.5">
          <li className="w-1/2">
            <input
              {...register("petGender", { required: true })}
              type="radio"
              id="male"
              value="male-pet"
              className="hidden peer"
              required
            />
            <label
              htmlFor="male"
              className="w-full py-2.5 flex justify-center border text-sm font-medium text-gray-400 border-gray-200 rounded-lg cursor-pointer border-1.5 peer-checked:border-primary peer-checked:text-primary peer-checked:ring-1 peer-checked:ring-primary hover:text-primary hover:bg-gray-100"
            >
              남자 아이
            </label>
          </li>
          <li className="w-1/2">
            <input
              {...register("petGender", { required: true })}
              type="radio"
              id="female"
              value="female-pet"
              className="hidden peer"
              required
            />
            <label
              htmlFor="female"
              className="w-full py-2.5 flex justify-center border text-sm font-medium text-gray-400 border-gray-200 rounded-lg cursor-pointer border-1.5 peer-checked:border-primary peer-checked:text-primary peer-checked:ring-1 peer-checked:ring-primary hover:text-primary hover:bg-gray-100"
            >
              여자 아이
            </label>
          </li>
        </ul>
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
export default BasicInfoForm;
