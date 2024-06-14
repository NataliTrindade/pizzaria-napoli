import { StyledSection, StyledTitle, StyledParagraph } from "./Banner.styles";

const Banner = () => {
  return (
    <StyledSection>
      <StyledTitle>
        Temos a <strong>melhor</strong> pizza da cidade!
      </StyledTitle>
      <StyledParagraph>
        Há mais de 30 anos, a Pizzaria Pizzaria Napoli cultiva a paixão pela
        autêntica culinária italiana.
      </StyledParagraph>
    </StyledSection>
  );
};

export default Banner;
