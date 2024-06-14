import { StyledFooter, StyledLink } from "./Footer.styles";

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        feito por{" "}
        <StyledLink
          href="https://github.com/NataliTrindade"
          target="_blank"
          rel="noreferrer"
        >
          Natalí Trindade
        </StyledLink>
      </p>
    </StyledFooter>
  );
};

export default Footer;
