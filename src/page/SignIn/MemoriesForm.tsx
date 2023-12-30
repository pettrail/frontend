import { Dispatch, SetStateAction, useState } from "react";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import ImportImages from "../../components/ImportImages";
import { postPetInfo } from "../../services/pet/postPetInfo";
import { nameState, petNameState } from "../../atom/basicInfo";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

interface IMemoriesForm {
  pageIdx: number;
  setPageIdx: Dispatch<SetStateAction<number>>;
}

export interface IMemoriesInputs {
  memories: string;
}

function MemoriesForm({ pageIdx, setPageIdx }: IMemoriesForm) {
  const navigate = useNavigate();
  const [name, setName] = useRecoilState(nameState);
  const [petName, setPetName] = useRecoilState(petNameState);
  const {
    register,
    getValues,
    formState: { isValid },
  } = useForm<IMemoriesInputs>({
    defaultValues: {
      memories: localStorage.getItem("memories") ?? undefined,
    },
  });

  const [showImages, setShowImages] = useState<string[]>([]);
  const [fileList, setFileList] = useState<File[] | null>(null);
  const [error, setError] = useState<string>("");

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
        <span className="block text-sm font-medium text-gray-900 mb-2">
          반려동물의 사진을 최소 5장 이상 첨부해주세요
        </span>
        <ImportImages
          fileList={fileList}
          setFileList={setFileList}
          showImages={showImages}
          setShowImages={setShowImages}
          error={error}
          setError={setError}
        />
      </div>

      <Button
        onClick={async (e) => {
          e.preventDefault();
          const { memories } = getValues();
          localStorage.setItem("memories", memories);
          if (
            localStorage.getItem("petName")?.length !== 0 &&
            memories.length !== 0 &&
            fileList &&
            fileList.length === 5
          ) {
            // const form = new FormData();
            // const petInfoForm = new FormData();
            // form.append("petInfo", petInfoForm);
            // form.append(
            //   "petImage",
            //   new Blob([
            //     fileList[0],
            //     fileList[1],
            //     fileList[2],
            //     fileList[3],
            //     fileList[4],
            //   ])
            // );
            // petInfoForm.append("name", localStorage.getItem("petName")!!);
            // petInfoForm.append("feature", memories);

            const formData = new FormData();

            // const data = {
            //   petInfo: {
            //     petType: "DOG",
            //     name: localStorage.getItem("petName"),
            //     feature: memories,
            //   },
            //   petImage: fileList,
            // };

            const petInfo = {
              petType: "DOG",
              name: localStorage.getItem("petName"),
              feature: memories,
            };

            const petInfoBlob = new Blob([JSON.stringify(petInfo)], {
              type: "application/json",
            });
            formData.append("petInfo", petInfoBlob);
            formData.append("petImage", fileList[0]);
            const petId = await postPetInfo(formData);
            if (petId && typeof petId === "number") {
              localStorage.setItem("petId", petId.toString());
              navigate("/");
            }
          }
        }}
        width="w-full"
        color={
          isValid && fileList?.length === 5 ? "bg-primary" : "bg-secondaryGray"
        }
        text="확인"
        py="py-3"
        fontSize="text-sm"
      />
    </form>
  );
}
export default MemoriesForm;
