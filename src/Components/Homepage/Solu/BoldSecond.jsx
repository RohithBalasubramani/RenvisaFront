import styled from 'styled-components';

const BoldSecondWord = ({ sentence }) => {
  const words = sentence.split(' ');

  return (
    <StyledParagraph>
      {words.map((word, index) => {
        if (index === 1) {
          return (
            <span key={index} style={{ fontWeight: '300', marginLeft: '.8rem', marginRight: '.8rem' }}>
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
    color: #00337C;
    margin-bottom: 3%;
    border-bottom: 2px solid #D9D9D9;
`;
export default BoldSecondWord;
