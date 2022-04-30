import type { NextPage } from "next";
import Head from "next/head";
import Item from "../components/Item";
import {
  DateWrapper,
  Header,
  MainContentWrapper,
  Main,
  Date,
  Number,
  AJVector,
  MealSvg,
  PartySvg,
  InfoWrapper,
  Info,
  Wrapper,
  MainImage,
  StyledP,
  TextWrapper,
  HeadLine,
  Title,
  Columns,
} from "../styles/Home";
import first from "../assets/0.jpg";
import second from "../assets/1.jpg";
import third from "../assets/2.jpg";
import hotel from "../assets/hotel.jpg";
import main from "../assets/test.jpeg";
import Switch from "react-switch";
import { useCallback, useState } from "react";
import palette from "../styles/palette";
import { useRealViewport } from "next-real-viewport";
import TextLoop from "react-text-loop";

const CONTENT = [
  {
    title: "Nosso primeiro encontro do dia",
    description: "Vai ser um momento família com voz e violão, feijuca e chopp",
    image: second,
  },
  {
    title: "Qual o hobbie mais chique?",
    description:
      "Venha como se sentir à vontade, recomendo o traje esporte chique",
    image: first,
  },
  {
    title: "O encontro será no meu, no seu, no “Nosso Quintal”",
    description: (
      <a href="https://www.google.com/maps/place/R.+Dep.+Ant%C3%B4nio+Heil,+100+-+Ponta+Aguda,+Blumenau+-+SC,+89051-160,+Brasil/data=!4m2!3m1!1s0x94df18cab1f145df:0x8db5fd94bc0ae41?sa=X&ved=2ahUKEwjWss_emrv3AhVBLBoKHd68BPYQ8gF6BAgQEAE">
        Rua Deputado Antônio Heil, 100 - Ponta Aguda, Blumenau – SC
      </a>
    ),
    image: third,
  },
  {
    title: "Recarregar as energias",
    isHotel: true,
    image: hotel,
  },
];

const Home: NextPage = () => {
  const [isPartyMode, setMode] = useState(false);
  const { vw } = useRealViewport();
  const isMobile = vw ? vw < 7.2 : false;

  const handlePartyMode = useCallback(() => {
    setMode((prevState) => !prevState);
  }, [setMode]);

  return (
    <>
      <Head>
        <title>Formatura AJ</title>
        <meta name="description" content="SALVE A DATA: 30 DE JULHO! Prepare-se para o dia mais épico do melhor mês do ano: JULHO! Com uma dose extra de AJ, alô ambev, me patrocina!" />
        <meta name="og:description" content="SALVE A DATA: 30 DE JULHO! Prepare-se para o dia mais épico do melhor mês do ano: JULHO! Com uma dose extra de AJ, alô ambev, me patrocina!" />
        <meta property="og:image" content="https://ibb.co/cTZHrYD" />
        <meta property="og:title" content="FORMATURA DA AJ!!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Header>
          <DateWrapper>
            <Number>30</Number>
            <Date>
              julho <br />
              2022 <br />
              12h00
            </Date>
          </DateWrapper>
          <AJVector />
          <Switch
            onColor={palette.main}
            offColor={palette.secondary}
            checkedIcon={<MealSvg />}
            uncheckedIcon={<PartySvg />}
            onChange={handlePartyMode}
            checked={isPartyMode}
          />
        </Header>
        <InfoWrapper>
          {isMobile ? (
            <TextLoop springConfig={{ stiffness: 180, damping: 10 }}>
              <Date>Formanda Ana Júlia Lanzarin</Date>
              <Date>Engenharia de Controle e Automação</Date>
              <Date>UFSC - Campus Blumenau</Date>
            </TextLoop>
          ) : (
            <Info>
              Formanda Ana Júlia Lanzarin - Engenharia de Controle e Automação -
              UFSC - Campus Blumenau
            </Info>
          )}
        </InfoWrapper>
        <Wrapper>
          <Columns isFirstColumn>
            <Item {...CONTENT[0]} />
            <Item {...CONTENT[1]} />
          </Columns>
          <MainContentWrapper>
            <MainImage width="600" height="340" src={main} alt="Foto AJ" />
            <TextWrapper>
              <HeadLine />
              <Title>Mar calmo não forma boa engenheira</Title>
              <StyledP>
                Formar-me na graduação por si só já é um grande motivo de
                orgulho, ainda mais quando eu penso que sobrevivi a Engenharia
                numa universidade pública, convivendo numa turma de 50 meninos e
                5 meninas. Ainda bem que guardei com carinho a Nossa Senhora dos
                Navegantes que eu recebi na mudança lá em 2015, afinal mar calmo
                não forma boa engenheira. Foram longos anos de estudo,
                incontáveis madrugadas acordadas estudando programação e
                borrachas gastas fazendo exercícios de cálculo, mas valeu a
                pena. Eu pude contar com a sorte, a ajuda de colegas com Matlab,
                com as velas acesas pelos familiares, o amor à distância dos
                meus pais e o alívio cômico dos amigos. E essa é minha maior
                felicidade: ter aproveitado a jornada. Caso você tenha recebido
                esse convite, saiba que você também foi parte ou destino (alô
                Ambev) dessa jornada e, portanto, será uma honra e motivo de
                felicidade te receber na cidade que por anos foi meu lar para
                comemorar minha formatura e também o marco da minha vida que é
                meu aniversário de 25 anos!
              </StyledP>
            </TextWrapper>
          </MainContentWrapper>
          <Columns>
            <Item {...CONTENT[2]} />
            <Item {...CONTENT[3]} />
          </Columns>
        </Wrapper>
      </Main>
    </>
  );
};

export default Home;
