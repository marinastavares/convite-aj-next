import styled from 'styled-components';
import palette from './palette';
import Vector from '../assets/AJ-Vector.svg'
import Image from 'next/image'
import Party from '../assets/party.svg'
import Meal from '../assets/meal.svg'

export const Main = styled.main`
  height: 100%;
  background-color: ${({theme}) => theme.main};
  padding: 3.2rem 2.4rem;
  position: relative;

  @media only screen and (min-width: 768px) {
    min-height: 100vh;
    height: 100%;
  }
`

export const Header = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.6rem;
  `

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`
export const DayWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Number = styled.h2`
  font-size: 2.8rem;
  margin-right: 0.4rem;
  color: ${({theme}) => theme.secondary};


  @media only screen and (min-width: 768px) {
    font-size: 2.8rem;
    margin-right: 0.4rem;
  }
`
export const Date = styled.h2`
  font-size: 1.2rem;
  text-transform: uppercase;
  color: ${({theme}) => theme.secondary};

  @media only screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
`
export const Hour = styled.h2`
  font-size: 1.8rem;
  text-transform: uppercase;
  color: ${({theme}) => theme.secondary};

  @media only screen and (min-width: 768px) {
    font-size: 1.8rem;
  }
`

export const AJVector = styled(Vector)`
  height: 6.8rem;
  width: 6.8rem;
  position: absolute;
  top: 5.4rem; right: 50%;
  transform: translate(50%,-50%);
  fill: ${({theme}) => theme.secondary};
`

export const InfoWrapper = styled.div`
  border-top: 0.1rem solid ${({theme}) => theme.secondary};
  border-bottom: 0.1rem solid ${({theme}) => theme.secondary};
  padding: 0.2rem;
  display: flex;
  justify-content: center
`

export const Info = styled.p`
  font-size: 1.4rem;
  color: ${({theme}) => theme.secondary};
`

export const Wrapper = styled.div`
  padding: 1.6rem 0.8rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-template-areas:  'main' 'column1' 'column2';
  row-gap: 1.6rem;
  column-gap: 1.6rem;

  @media only screen and (min-width: 768px) {
    grid-template-areas: 'column1 main column2';
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 1fr;
  }
`

export const MainContentWrapper = styled.div`
  grid-area: main;
`

export const MainImage = styled(Image)`
  width: 100%;
  height: 30rem;
  object-fit: cover;
  margin-bottom: 0.8rem;
`

export const StyledP = styled.p<{isPartyMode?: boolean}>`
  font-size: 1.4rem;
  text-align: justify;
  line-height: 1.4;
  color: ${({theme}) => theme.secondary};

  @media only screen and (min-width: 768px) {
    margin-top: ${({isPartyMode}) => isPartyMode ? '4rem' : 0};
  }
`

export const TextWrapper = styled.div`
  position: relative;
`
export const ImageWrapper = styled.div`
  width: 100%;
  height: 30rem;
`

export const HeadLine = styled.hr`
  display: none;

  @media only screen and (min-width: 768px) {
    display: block;
    margin: 1.6rem 0 1.6rem;
    width: 100%;
    background-color: ${({theme}) => theme.secondary};
  }
`

export const Title = styled.h2`
  font-family: VT323;
  font-size: 1.8rem;
  margin: 1.6rem 0;
  text-transform: uppercase;
  color: ${({theme}) => theme.secondary};

  @media only screen and (min-width: 768px) {
    margin: 0;
    position: absolute;
    background-color: ${({theme}) => theme.main};
    top: -1rem;
  }
`

export const Columns = styled.div<{isFirstColumn?: boolean}>`
  grid-area: ${({isFirstColumn}) => isFirstColumn? `column1` : `column2`};
  display: flex;
  flex-direction: ${({isFirstColumn}) => isFirstColumn? `column-reverse` : `column`};
  gap: 2.4rem;

  @media only screen and (min-width: 768px) {
    flex-direction: column;
  }
`

export const PartySvg = styled(Party)`
  height: 2.4rem;
  width: 2.4rem;
  margin: auto;
`

export const MealSvg = styled(Meal)`
  height: 2rem;
  width: 2rem;
  margin: 0.4rem;
`
