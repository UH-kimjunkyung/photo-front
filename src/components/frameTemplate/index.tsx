import styled from "@emotion/styled";
import useStore from "Stores/StoresContainer";
import { AiButton } from "components";

const FrameTemplate = () => {
  const { frameStyle, setFrameStyle } = useStore();

  const templateData = [
    { type1: "color", data1: "#000000", type2: "color", data2: "#98C3B6" },
    { type1: "color", data1: "#9DBDFB", type2: "color", data2: "#F17373" },
    {
      type1: "color",
      data1: "#FFFFFF",
      type2: "color",
      data2: "#FF9437",
    },
    {
      type1: "img",
      data1: "/static/template1.png",
      type2: "img",
      data2: "/static/template2.png",
    },
    {
      type1: "img",
      data1: "/static/template3.png",
      type2: "img",
      data2: "/static/template4.png",
    },
  ];

  return (
    <Container>
      <Title>프레임 선택하기</Title>
      {templateData.map((e) => {
        return (
          <TemplateContainer key={e.data1}>
            {e.type1 === "img" ? (
              <ImgTemplate
                key={e.data1}
                src={e.data1}
                onClick={() => setFrameStyle({ data: e.data1, type: e.type1 })}
              />
            ) : (
              <ColorTemplate
                key={e.data1}
                templateType={e.type1}
                data={e.data1}
                onClick={() => setFrameStyle({ data: e.data1, type: e.type1 })}
              />
            )}
            {e.type2 === "img" ? (
              <ImgTemplate
                key={e.data2}
                src={e.data2}
                onClick={() => setFrameStyle({ data: e.data2, type: e.type2 })}
              />
            ) : (
              <ColorTemplate
                key={e.data2}
                templateType={e.type2}
                data={e.data2}
                onClick={() => setFrameStyle({ data: e.data2, type: e.type2 })}
              />
            )}
          </TemplateContainer>
        );
      })}
      <AIFilterContainer>
        <AiButton />
      </AIFilterContainer>
    </Container>
  );
};

export default FrameTemplate;

const Container = styled.div`
  width: 300px;
  height: 700px;

  padding: 69px 45px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 28px;

  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 30px 0 rgba(112, 144, 176, 0.1);
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #809cff;
`;

const TemplateContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

const ImgTemplate = styled.img`
  width: 74px;
  min-height: 74px;
  display: flex;

  border-radius: 999px;
  background-size: 100%;
  box-shadow: 0 4px 20px 0 rgba(112, 144, 176, 0.4);

  cursor: pointer;

  transition: 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  &:active {
    transform: scale(0.9);
  }
`;

const ColorTemplate = styled.div<{ templateType: string; data: string }>`
  width: 74px;
  min-height: 74px;
  display: flex;

  border-radius: 999px;

  background-color: ${({ data, templateType }) =>
    templateType === "color" ? data : ""};
  box-shadow: 0 4px 20px 0 rgba(112, 144, 176, 0.4);

  cursor: pointer;

  transition: 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  &:active {
    transform: scale(0.9);
  }
`;

const AIFilterContainer = styled.div`
  width: 100px;
  position: relative;
`;

const LabelText = styled.div`
  position: absolute;
  font-size: 20px;
  font-weight: 700;
  color: #809cff;
  bottom: -5px;
`;
