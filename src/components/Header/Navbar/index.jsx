import {
  StyledNav,
  StyledList,
  StyledLink,
  StyledSpan,
  StyledFaHome,
  StyledFaBookReader,
  StyledFaShoppingCart,
  StyledFaUserAlt
} from "./Navbar.styles.js";

const links = [
  {
    id: 1,
    to: "/",
    linkname: "início",
    icon: <StyledFaHome />,
  },
  {
    id: 2,
    to: "/menu",
    linkname: "menu",
    icon: <StyledFaBookReader />,
  },
  {
    id: 3,
    to: "/cart",
    linkname: "carrinho",
    icon: <StyledFaShoppingCart />,
  },
  {
    id: 4,
    to: "/login",
    linkname: "login",
    icon: <StyledFaUserAlt />,
  },
];

const Navbar = () => {
  return (
    <StyledNav>
      <StyledList>
        {links.map((link) => (
          <li key={link.id}>
            <StyledLink to={link.to}>
              {link.icon}
              <StyledSpan>{link.linkname}</StyledSpan>
            </StyledLink>
          </li>
        ))}
      </StyledList>
    </StyledNav>
  );
};

export default Navbar;
