import styled from "@emotion/styled";
import { useState } from "react";
import axios from "axios";
import useStore from "Stores/StoresContainer";
import Lottie from "lottie-react";
import LoadingAnimation from "assets/lottie/loadingAnimation.json";
import { useRouter } from "next/navigation";

const KeywordForm = () => {
  const { gptresData, setGptresData } = useStore();
  const [keyword, setKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { replace } = useRouter();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const getGPTres = async () => {
    try {
      setIsLoading(true);
      const url = `https://snap.team-alt.com/v2/chat/pose/?text=${keyword} 과 함께 사진을 찍으려고 하는데 좋은 자세나 포즈좀 추천해줘 부연설명 덧붙이지말아줘 그냥 4가지만 말해줘~`;

      const res = await axios.get(url);

      setGptresData(res.data.data.message);
      console.log(res.data.data.message);
      if (res) {
        setIsLoading(false);
        replace("/camera");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Container>
      <TitleContainer>
        <Title>키워드 입력</Title>
        <SubTitle>키워드를 입력해 주세요.</SubTitle>
      </TitleContainer>
      <InputContainer>
        <InputLabel>키워드</InputLabel>
        <StyledInput
          value={keyword}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setKeyword(e.target.value);
          }}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>추천 키워드</InputLabel>
        <TagContainer>
          {Array.from(["둘이서", "셋이서", "가족", "연인"]).map((e) => {
            return (
              <Tag
                key={e}
                onClick={() => {
                  setKeyword(e);
                }}
              >
                {e}
              </Tag>
            );
          })}
        </TagContainer>
      </InputContainer>
      <SubmitBtn onClick={getGPTres}>
        {isLoading ? (
          <Lottie {...defaultOptions} style={{ width: 80, height: 18 }} />
        ) : (
          "확인"
        )}
      </SubmitBtn>
    </Container>
  );
};

export default KeywordForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  background-color: white;
  padding: 32px;
  gap: 24px;
  border-radius: 12px;

  box-shadow: 0 4px 30px 0 rgba(112, 144, 176, 0.1);
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.div`
  text-align: left;

  font-weight: 800;
  font-size: 24px;
  color: #191919;
  font-family: Pretendard;
`;

const SubTitle = styled.div`
  color: #999999;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const InputLabel = styled.div`
  font-size: 13px;
  color: #616161;

  font-weight: 600;
`;

const StyledInput = styled.input`
  width: 336px;
  height: 50px;

  outline: none;
  border-radius: 8px;
  background-color: white;
  border: 1px solid #9e9e9e;

  padding: 0 10px;
  box-sizing: border-box;
  font-size: 16px;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.div`
  width: fit-content;
  height: fit-content;

  padding: 10px 10px;
  background-color: black;
  color: white;

  border-radius: 999px;
  background-color: rgba(0, 56, 255, 0.04);
  border: 1px solid rgba(0, 56, 255, 0.5);
  color: rgba(0, 56, 255, 0.5);

  cursor: pointer;

  transition: 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  &:active {
    transform: scale(0.9);
  }
`;

const SubmitBtn = styled.button`
  width: 336px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 15px 10px;
  font-size: 15px;
  margin-top: 44px;

  border-radius: 8px;

  color: white;
  background-color: #809cff;
`;
