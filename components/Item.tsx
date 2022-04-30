import React, { FC, ReactNode } from "react";
import styled from "styled-components";
import palette from "../styles/palette";
import Image, { StaticImageData } from 'next/image'

interface ItemInterface {
  image: StaticImageData;
  title: string;
  description?: string | ReactNode;
  isHotel?: boolean;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: ${palette.secondary};
  text-align: left;
  text-transform: uppercase;
`;
const Description = styled.p`
  font-size: 1.2rem;
  color: ${palette.secondary};
  line-height: 1.4;

  a {
    text-decoration: underline;
  }
`;

const StyledImage = styled(Image)`
border-radius: 1rem 0 1rem 0;
object-fit: cover;
`

const Item: FC<ItemInterface> = ({ image, title, description, isHotel }) => {
  return (
    <Wrapper>
      <StyledImage src={image} width={240} height={160} alt="helllo" />
      <Title>{title}</Title>
      {isHotel ? (
        <Description>
          Para maior comodidade, minha indicação são hotéis na região da Rua XV
          de Novembro, em Blumenau-SC. Dentre eles:{" "}
          <a
            href="https://hotelgloria.com.br/?gclid=EAIaIQobChMIqtqKwNKv9wIVtUFIAB0ngAB1EAAYA
iAAEgLdQfD_BwE"
          >
            Hotel Glória
          </a>
          , <a href="https://www.himmelblau.com.br/">Hotel Himmelblau</a> e{" "}
          <a href="https://hoteleuropa.com.br/">Hotel Europa</a>
        </Description>
      ) : (
        <Description>{description}</Description>
      )}
    </Wrapper>
  );
};

export default Item;
