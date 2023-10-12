import styled from "@emotion/styled";

const FrameTemplate = () => {
  const templateData = [
    { type1: "color", data1: "#000000", type2: "color", data2: "#98C3B6" },
    { type1: "color", data1: "#9DBDFB", type2: "color", data2: "#F17373" },
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
      data2: "/static/template4Icon.png",
    },
  ];

  return (
    <Container>
      <Title>프레임 선택하기</Title>
      {templateData.map((e) => {
        return (
          <TemplateContainer>
            {e.type1 === "img" ? (
              <ImgTemplate src={e.data1} />
            ) : (
              <ColorTemplate templateType={e.type1} data={e.data1} />
            )}
            {e.type2 === "img" ? (
              <ImgTemplate src={e.data2} />
            ) : (
              <ColorTemplate templateType={e.type2} data={e.data2} />
            )}
          </TemplateContainer>
        );
      })}
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
  gap: 16px;
`;

const ImgTemplate = styled.img`
  width: 74px;
  min-height: 74px;
  display: flex;

  border-radius: 999px;
  background-size: 100%;
`;

const ColorTemplate = styled.div<{ templateType: string; data: string }>`
  width: 74px;
  min-height: 74px;
  display: flex;

  border-radius: 999px;

  background-color: ${({ data, templateType }) =>
    templateType === "color" ? data : ""};
`;
