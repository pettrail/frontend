import Badge from "./Badge";
import DummyImage from "../assets/images/puppy1.jpeg";
import Button from "./Button";

// 가 데이터
const data = [
  {
    image: "/",
    dayAfter: "추억 생성 1일째",
    date: "2023년 4월 10일",
    content: "언니 난 잘 지내고 있어",
  },
];

function PhotoCard() {
  return (
    <div className="shrink-0 h-[27.5rem] w-72 bg-white rounded-lg p-3">
      <img
        className="h-[20rem] w-full object-cover object-center rounded-lg"
        alt="petImage"
        src={DummyImage}
      />
      <div className="mt-3 flex flex-col items-center space-y-0.5">
        <Badge
          bgColor="bg-primaryLight"
          textColor="text-primary"
          label="추억 생성 1일째"
        />
        <div className="text-lg font-medium">2023년 4월 10일</div>
        <Button color="bg-primary" text="추억 돌아보기" width="w-full" />
      </div>
    </div>
  );
}
export default PhotoCard;
