import NextLink from 'next/link';
import styled from 'styled-components';
import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Container from 'components/Container';
import HeroIllustration from 'components/HeroIllustation';
import OverTitle from 'components/OverTitle';
import { media } from 'utils/media';

export default function Hero() {

  return (
    <HeroWrapper>
      <Contents>
        <CustomOverTitle>stop competition, start collaboration</CustomOverTitle>
        <Heading>Experience the Indobounce beat with Package Collective</Heading>
        <Description>
        Package Collective adalah sebuah group musik DJ yang mengusung semangat kolaborasi. Berisi talenta seperti DJ dan MC, kami menghadirkan energi musik yang segar lewat panggung, tur, dan rilisan kreatif.
        </Description>
        <CustomButtonGroup>
          <Button href="https://soundcloud.com/packagerecords/sets/album2?si=1f5b1d84b72346ac838c21138391f330&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&fbclid=PAZXh0bgNhZW0CMTEAAacOK1bryK7XFb68ZFYQr74GuwPJlc6OHmzElma_mDOJsvbBM0EfCY2c3rR0Hw_aem_EELT-AwwbRD4MADiwvvzFw" target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" focusable="false" aria-hidden="true" style={{ marginRight: 8, verticalAlign: 'middle' }}>
              <path fill="currentColor" d="M17.2 9.2c-.6 0-1.2.1-1.7.4-.5-2.3-2.5-4-4.9-4-2.8 0-5 2.2-5 5 0 .2 0 .3 0 .5-.9.9-1.5 1.6-1.5 2.5 0 1.1.9 2 2 2h11.1c2 0 3.6-1.6 3.6-3.6 0-2-1.6-3.6-3.6-3.6Z"/>
            </svg>
            Download Package Album Vol.2
          </Button>
        </CustomButtonGroup>
      </Contents>
      <ImageContainer>
        <HeroIllustration />
      </ImageContainer>
    </HeroWrapper>
  );
}

const HeroWrapper = styled(Container)`
  display: flex;
  padding-top: 5rem;
  padding-bottom: 6rem;
  gap: 6rem;

  ${media('<=desktop')} {
    padding-top: 1rem;
    flex-direction: column;
    align-items: center;
  }
`;

const Contents = styled.div`
  flex: 1;
  max-width: 60rem;

  ${media('<=desktop')} {
    max-width: 100%;
  }
`;

const CustomButtonGroup = styled(ButtonGroup)`
  margin-top: 4rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-start;

  img {
    width: 100%;
    max-width: 56rem;
    height: auto;
    border-radius: 1rem;
    box-shadow: var(--shadow-lg);
    border: 1px solid rgb(var(--text), 0.06);
    object-fit: cover;
  }

  ${media('<=desktop')} {
    margin-top: 2rem;
    justify-content: center;
    img {
      max-width: 85%;
    }
  }
`;

const Description = styled.p`
  font-size: 1.8rem;
  opacity: 0.8;
  line-height: 1.6;

  ${media('<=desktop')} {
    font-size: 1.5rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  font-size: 7.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;
