import NavigationBar from "../components/NavigationBar";
import DummyImage from "../assets/images/puppy1.jpeg";
import styled from "styled-components";

function Memorial() {
  return (
    <>
      <BackImage>
        <TextContainer style={{ color: "white", gap: "3rem" }}>
          <div className="text-4xl font-semibold">후추</div>
          <div style={{ opacity: "60%" }} className="text-s font-light">
            여자아이 <br />
            2008년 12월 13일 - 2023년 5월 30일
          </div>
          <div className="text-xl font-semibold">
            천사가 된 후추야. 우리 다음에 또 만나자!
          </div>
        </TextContainer>
      </BackImage>
      <Container>
        <div style={{ padding: "25px" }} className="text-xl font-semibold">
          후추와 함께한 49일 돌아보기
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
      </Container>
      <NavigationBar />
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
`;

// 돌아보기 내 개별 작은 이미지
const EachImage = styled.img`
  width: 12rem;
  height: 12rem;
`;

// 가장 마지막 뒷면의 이미지
const BackImage = styled.div`
  // position: relative;
  position: absolute;
  //top: -2rem;
  top: calc(0 - 1rem);
  left: 0;
  right: 0;

  width: 100%;
  height: 27.6rem;
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
