import Badge from "../components/Badge";
import Button from "../components/Button";
import LetterBox from "../assets/images/LetterBox.png";
import BallPool from "../components/BallPool";
import { useEffect, useState } from "react";

function Home() {
  let [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      setLoaded(true);
    }, 250);
  });

  return (
    <div className="border flex flex-col justify-center items-center h-full">
      <span className="mb-5 text-sm font-semibold text-gray-800">
        이터널 채팅 시작하기
      </span>
      <div className="relative flex flex-col items-center">
        <div className="rounded-3xl py-5 flex flex-col items-center px-4 w-64 pb-24 mb-20 bg-cardGray">
          <Badge
            bgColor="bg-primaryLight"
            textColor="text-primary"
            label="추억 생성 1일 차"
          />
          <div className="mt-1 text-center w-2/3 font-semibold text-base break-keep">
            {"후추"}와 새로운 추억을 쌓기까지 1시간 남았어요.
          </div>
        </div>

        <div className="w-[110%] absolute -bottom-5">
          <img
            className="w-full object-cover object-center rounded-lg"
            alt="letterBox"
            src={LetterBox}
          />
          {loaded && <BallPool />}
        </div>
      </div>

      <div className="mt-20">
        <Button
          link="/chat"
          py="py-2.5"
          width="w-[281px]"
          color="bg-secondaryGray"
          text="지금 채팅 시작하기"
        />
      </div>
    </div>
  );
}

export default Home;
