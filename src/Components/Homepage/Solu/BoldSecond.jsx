import styled from "styled-components";

const BoldSecondWord = ({ sentence }) => {
  const words = sentence.split(" ");

  return (
    <StyledParagraph>
      {words.map((word, index) => {
        if (index === 1) {
          return (
            <span
              key={index}
              style={{
                fontWeight: "300",
                marginLeft: ".8rem",
                marginRight: ".8rem",
              }}
            >
              {word}
            </span>
          );
        }

        return <span key={index}>{word}</span>;
      })}
    </StyledParagraph>
  );
};

const StyledParagraph = styled.p`
  font-family: Lexend;
  font-size: 64px;
  font-weight: 500;
  line-height: 80px;
  letter-spacing: 0.004em;
  text-align: left;
  color: #00337c;
  padding-bottom: 2vh;
  border-bottom: 2px solid #d9d9d9;
`;
export default BoldSecondWord;
