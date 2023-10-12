import styled from "@emotion/styled";

const FrameTemplate = () => {
  return (
    <Container>
      <Title>프레임 선택하기</Title>
      <Template templateType="color" data="#000000" />
      <Template templateType="color" data="#000000" />
      <Template templateType="color" data="#000000" />
      <Template templateType="color" data="#000000" />
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

const Template = styled.div<{ templateType: string; data: string }>`
  width: 74px;
  height: 74px;

  border-radius: 999px;

  background-color: ${({ data, templateType }) =>
    templateType === "color" ? data : ""};
  background-image: ${({ data, templateType }) =>
    templateType === "img" ? data : ""};
`;
