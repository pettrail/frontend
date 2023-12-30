import NavigationBar from "../components/NavigationBar";
import DummyImage from "../assets/images/puppy1.jpeg";
import styled from "styled-components";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import { useState } from "react";

function Memorial() {
  return (
    <>
      <BackImage>
        <div className="bg-transparent flex flex-col justify-end h-full pt-5">
          <div className="space-y-1">
            <div className="text-2xl font-semibold px-5 text-slate-100">
              {localStorage.getItem("petName")}
            </div>
            <div
              style={{ opacity: "60%" }}
              className="text-xs font-light px-5 text-slate-100"
            >
              {localStorage.getItem("petGender") === "female-pet"
                ? "여자 아이"
                : "남자 아이"}
              <br />
              2008년 12월 13일 - 2023년 5월 30일
            </div>
            <div className="text-lg font-semibold px-5 text-slate-100">
              천사가 된 {localStorage.getItem("petName")}야. 우리 다음에 또
              만나자!
            </div>
          </div>
          <div className="mt-10 pt-5 h-80 w-full bg-white rounded-3xl space-y-5 px-5 scroll-y-auto">
            <ImageRowBox>
              <EachImage alt="petImage" src={DummyImage} />
              <EachImage alt="petImage" src={DummyImage} />
            </ImageRowBox>

            <ImageRowBox>
              <EachImage alt="petImage" src={DummyImage} />
              <EachImage alt="petImage" src={DummyImage} />
            </ImageRowBox>

            <ImageRowBox>
              <EachImage alt="petImage" src={DummyImage} />
              <EachImage alt="petImage" src={DummyImage} />
            </ImageRowBox>
          </div>
        </div>

        {/* <BottomSheet open>My awesome content here</BottomSheet>
        <Container>
          <div style={{ padding: "25px" }} className="text-xl font-semibold">
            {localStorage.getItem("petName")}와 함께한 49일 돌아보기
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "0.66rem",
            }}
          >
            <ImageRowBox>
              <EachImage alt="petImage" src={DummyImage} />
              <EachImage alt="petImage" src={DummyImage} />
            </ImageRowBox>
            <ImageRowBox>
              <EachImage alt="petImage" src={DummyImage} />
              <EachImage alt="petImage" src={DummyImage} />
            </ImageRowBox>
            <ImageRowBox>
              <EachImage alt="petImage" src={DummyImage} />
              <EachImage alt="petImage" src={DummyImage} />
            </ImageRowBox>
          </div>
        </Container> */}
      </BackImage>
    </>
  );
}
export default Memorial;

// 아래쪽 배경 흰 배경
const Container = styled.div`
  position: absolute;
  //top: -2rem;
  top: calc(-2rem - 1rem);
  left: 0;
  right: 0;
  margin-top: 30rem;
  width: 31.2rem;
  height: 41.66rem;
  border-radius: 20px;
  background-color: white;
  object-fit: cover;
  object-position: center;
`;

// 돌아보기 내 개별 작은 이미지
const EachImage = styled.img`
  width: 12rem;
  height: 12rem;
  object-fit: cover;
  object-position: center;
  border-radius: 15px;
`;

// 가장 마지막 뒷면의 이미지
const BackImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${DummyImage});
  background-size: cover;
`;

// 후추 ... 만나자 까지의 텍스트
const TextContainer = styled.div`
  padding-top: 17rem;
  padding-left: 2rem;
`;

const ImageRowBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1.66rem;
`;
