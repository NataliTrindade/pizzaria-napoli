import { theme } from "../../styles/theme";
import CardContainer from "../Card/CardContainer";
import CardItem from "../Card/CardItem";
import {
  StyledSection,
  StyledTitle,
  StyledClientName,
  StyledClientImage,
  StyledParagraph,
  StyledCardParagraph,
} from "./Testimonials.styles.js";
import { ImQuotesLeft } from "react-icons/im";
import client_1 from "./imgs/client-1.webp";
import client_3 from "./imgs/client-3.webp";
import client_2 from "./imgs/client-2.webp";
import client_4 from "./imgs/client-4.webp";
import client_5 from "./imgs/client-5.webp";
import client_6 from "./imgs/client-6.webp";


const testimonials = [
  {
    id: 1,
    clientTestimonial:
      "A pizza da Napoli é simplesmente incrível! Nunca provei nada tão delicioso antes. Definitivamente voltarei!",
    clientName: "Rafaela Souza",
    clientImage: `${client_1}`,
  },
  {
    id: 2,
    clientTestimonial:
      "Que experiência maravilhosa! A pizza estava perfeitamente assada, com uma crosta crocante e recheio suculento. Recomendo a todos os amantes de pizza!",
    clientName: "Lucas Martins",
    clientImage: `${client_2}`,
  },
  {
    id: 3,
    clientTestimonial:
      "A Napoli realmente sabe como fazer uma pizza autêntica. Cada mordida é uma viagem à Itália em termos de sabor e qualidade. Mal posso esperar para voltar!",
    clientName: "Alice Santos",
    clientImage: `${client_3}`,
  },
  {
    id: 4,
    clientTestimonial:
      "Experiência fantástica! O ambiente é acolhedor e a pizza é de outro mundo. Serviço impecável. Voltarei com certeza!",
    clientName: "Roberto Oliveira",
    clientImage: `${client_4}`,
  },
  {
    id: 5,
    clientTestimonial:
      "Excelente serviço! Ambiente agradável e pizzas deliciosas. Recomendo a todos os meus amigos!",
    clientName: "Ana Silva",
    clientImage: `${client_5}`,
  },
  {
    id: 6,
    clientTestimonial:
      "Atendimento excepcional! Sempre que venho aqui, tenho uma experiência incrível. Não troco por nada!",
    clientName: "Pedro Oliveira",
    clientImage: `${client_6}`,
  },
];

const Testimonials = () => {
  return (
    <StyledSection>
      <StyledTitle>Veja o que os nossos clientes dizem sobre nós!</StyledTitle>
      <StyledParagraph>
        Estamos comprometidos em fornecer o melhor serviço e satisfação aos
        nossos clientes. Confira abaixo alguns depoimentos de pessoas que
        experimentaram nossas deliciosas pizzas. Suas palavras são uma prova do
        nosso compromisso com a qualidade e excelência.
      </StyledParagraph>

      <CardContainer>
        {testimonials.map((testimonial) => (
          <CardItem key={testimonial.id}>
            <ImQuotesLeft size={25} color={theme.colors.main} />
            <StyledCardParagraph>
              {testimonial.clientTestimonial}
            </StyledCardParagraph>
            <StyledClientImage
              src={testimonial.clientImage}
              alt="Cliente pizzaria Napoli"
              width="80"
              height="80"
            />
            <StyledClientName>{testimonial.clientName}</StyledClientName>
          </CardItem>
        ))}
      </CardContainer>
    </StyledSection>
  );
};

export default Testimonials;
