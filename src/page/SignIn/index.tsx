import { Dispatch, ReactElement, SetStateAction, useState } from "react";
import Button from "../../components/Button";
import { GoChevronLeft } from "react-icons/go";
import RelationForm from "./RelationForm";
import BasicInfoForm from "./BasicInfoForm";
import MemoriesForm from "./MemoriesForm";

interface ISignInPage {
  title: string;
  subtitle?: string;
  form: (
    pageIdx: number,
    setPageIdx: Dispatch<SetStateAction<number>>
  ) => ReactElement;
}

const signInPages = [
  {
    title: "반려동물을 만나기 위해,몇 가지 정보를 입력해주세요",
    subtitle: "이터널 테일즈에 온 것을 환영해요.",
    form: (pageIdx: number, setPageIdx: Dispatch<SetStateAction<number>>) => (
      <BasicInfoForm pageIdx={pageIdx} setPageIdx={setPageIdx} />
    ),
  },
  {
    title: "반려동물은 보호자님에게,어떤 존재였나요?",
    form: (pageIdx: number, setPageIdx: Dispatch<SetStateAction<number>>) => (
      <RelationForm pageIdx={pageIdx} setPageIdx={setPageIdx} />
    ),
  },
  {
    title: "반려동물과 함께한 추억을,자세히 듣고 싶어요",
    form: (pageIdx: number, setPageIdx: Dispatch<SetStateAction<number>>) => (
      <MemoriesForm pageIdx={pageIdx} setPageIdx={setPageIdx} />
    ),
  },
];

function SignIn() {
  const [pageIdx, setPageIdx] = useState<number>(0);
  return (
    <>
      <div className="flex flex-col h-full justify-center">
        <header className="flex items-center -pl-3 py-1.5">
          <button
            onClick={() => {
              if (pageIdx > 0) {
                setPageIdx((prev) => prev - 1);
              }
            }}
            className="w-7 h-7"
          >
            {pageIdx !== 0 && <GoChevronLeft className="w-full h-full" />}
          </button>
        </header>
        <span className="mt-6 text-xs text-primary">
          {pageIdx + 1}/{signInPages.length}
        </span>
        <span className="min-h-5 text-sm">
          {signInPages[pageIdx]?.subtitle}
        </span>
        <h1 className="text-xl font-semibold">
          {signInPages[pageIdx].title.split(",").map((str, idx) => (
            <div key={idx}>
              <span>{str}</span>
              <br />
            </div>
          ))}
        </h1>
        {signInPages[pageIdx].form(pageIdx, setPageIdx)}
      </div>
    </>
  );
}

export default SignIn;
