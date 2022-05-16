import Head from "next/head";
import Item from "./Item";
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
  Hour,
  DayWrapper,
} from "../styles/Home";
import first from "../assets/0.jpg";
import second from "../assets/1.jpg";
import third from "../assets/2.jpg";
import hotel from "../assets/hotel.jpg";
import main from "../assets/test.jpeg";
import Switch from "react-switch";
import { FC, useCallback, useEffect, useState } from "react";
import palette from "../styles/palette";
import { useRealViewport } from "next-real-viewport";
import TextLoop from "react-text-loop";
import toast from '../assets/brinde.jpg'
import dressCode from '../assets/passeio.jpg'
import don from '../assets/don.jpeg'
import party from '../assets/noite.png'
import { ThemeProvider } from "styled-components";

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

const NIGHT_CONTENT = [
  {
    title: "Hora de celebrar a formatura e a vida",
    description:
      "Teremos bebidas, já os docinhos ficam para o parabéns na virada do meu aniversário",
    image: toast,
  },
  {
    title: "City Tour é uma forma de passeio completo?",
    description: "Lembrando que o desfile da Oktoberfest é só em outubro esse ano, para o meu baile o traje é passeio completo",
    image: dressCode,
  },
  {
    title: "O baile julino num lugar chique",
    description: (
      <a href="https://www.google.com/maps/place/DON+CONCEPT+HALL/@-26.9128852,-49.055223,15z/data=!4m2!3m1!1s0x0:0xade544b7d5ac8bdd?sa=X&ved=2ahUKEwi1gerLnLz3AhXIzYUKHYTPCkkQ_BJ6BAhZEAU">
      Don Concept Hall Rua Itajaí, 1047 - Vorstadt, Blumenau - SC
      </a>
    ),
    image: don,
  },
  {
    title: "Recarregar as energias",
    isHotel: true,
    image: hotel,
  },
];

const theme = (isPartyMode: boolean | undefined) => isPartyMode ? {main: palette.secondary, secondary: palette.main} : palette

const Home: FC<{slug: string}> = ({slug}) => {
  const [isPartyMode, setMode] = useState<boolean | undefined>(undefined);
  const { vw } = useRealViewport();
  const isMobile = vw ? vw < 7.2 : false;

  const content = isPartyMode ? NIGHT_CONTENT : CONTENT;

  const handlePartyMode = useCallback(() => {
    setMode((prevState) => !prevState);
  }, [setMode]);


  useEffect(() => {
    if(isPartyMode === undefined) {
      setMode(slug === 'noite')
    }
  },[isPartyMode, slug])

  return (
    <ThemeProvider theme={theme(isPartyMode)}>
      <Head>
        <title>Formatura AJ</title>
        <meta name="description" content="SALVE A DATA: 30 DE JULHO! Prepare-se para o dia mais épico do melhor mês do ano: JULHO! Com uma dose extra de AJ, alô ambev, me patrocina!" />
        <meta name="og:description" content="SALVE A DATA: 30 DE JULHO! Prepare-se para o dia mais épico do melhor mês do ano: JULHO! Com uma dose extra de AJ, alô ambev, me patrocina!" />
        <meta property="og:image" content="https://github.com/marinastavares/convite-aj-next/blob/main/assets/aj-preview.png?raw=true" />
        <meta name="image" content="https://github.com/marinastavares/convite-aj-next/blob/main/assets/aj-preview.png?raw=true" />
        <meta property="og:title" content="FORMATURA DA AJ!!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Header>
          <DateWrapper>
<DayWrapper>
              <Number>30</Number>
              <Date>
                julho <br />
                2022 <br />
              </Date>
</DayWrapper>
              {isPartyMode ? <Hour>22h-4h</Hour> : <Hour>12h-15h</Hour>}
          </DateWrapper>
          <AJVector />
          <Switch
            onColor={palette.main}
            offColor={palette.secondary}
            offHandleColor="#cb919b"
            onHandleColor="#222"
            checkedIcon={<MealSvg />}
            uncheckedIcon={<PartySvg />}
            onChange={handlePartyMode}
            checked={!!isPartyMode}
          />
        </Header>
        <InfoWrapper>
          {isMobile ? (
            <TextLoop springConfig={{ stiffness: 200, damping: 15 }}>
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
            <Item {...content[0]} />
            <Item {...content[1]} />
          </Columns>
          <MainContentWrapper>
              <MainImage layout="responsive" height={isPartyMode ? '600' : "1600"} src={isPartyMode ? party : main} alt="Foto AJ" />

          <TextWrapper>
              <HeadLine />
              <Title>{isPartyMode ? 'Você pode repetir uma matéria, mas não pode repetir uma festa!' : 'Mar calmo não forma boa engenheira'}</Title>
              <StyledP isPartyMode={isPartyMode}>
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
            <Item {...content[2]} />
            <Item {...content[3]} />
          </Columns>
        </Wrapper>
      </Main>
    </ThemeProvider>
  );
};

export default Home;
