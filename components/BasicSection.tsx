import NextImage from 'next/image';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { media } from 'utils/media';
import Container from './Container';
import OverTitle from './OverTitle';
import RichText from './RichText';

export interface BasicSectionProps {
  imageUrl?: string;
  videoUrl?: string;
  title: string;
  overTitle: string;
  reversed?: boolean;
}

export default function BasicSection({ imageUrl, videoUrl, title, overTitle, reversed, children }: PropsWithChildren<BasicSectionProps>) {
  function toYouTubeEmbed(url?: string) {
    if (!url) return undefined;
    try {
      const urlObj = new URL(url);
      const id = urlObj.searchParams.get('v') || urlObj.pathname.split('/').pop();
      if (!id) return undefined;
      return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&loop=1&playlist=${id}&playsinline=1`;
    } catch {
      return undefined;
    }
  }

  const embedUrl = toYouTubeEmbed(videoUrl);
  return (
    <BasicSectionWrapper reversed={reversed}>
      <ImageContainer>
        {embedUrl ? (
          <iframe
            src={embedUrl}
            title={title}
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          imageUrl ? <NextImage src={imageUrl} alt={title} layout="fill" objectFit="cover" /> : null
        )}
      </ImageContainer>
      <ContentContainer>
        <CustomOverTitle>{overTitle}</CustomOverTitle>
        <Title>{title}</Title>
        <RichText>{children}</RichText>
      </ContentContainer>
    </BasicSectionWrapper>
  );
}

const Title = styled.h1`
  font-size: 5.2rem;
  font-weight: bold;
  line-height: 1.1;
  margin-bottom: 4rem;
  letter-spacing: -0.03em;

  ${media('<=tablet')} {
    font-size: 4.6rem;
    margin-bottom: 2rem;
  }
`;

const CustomOverTitle = styled(OverTitle)`
  margin-bottom: 2rem;
`;

const ImageContainer = styled.div`
  flex: 1;

  position: relative;
  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: calc((9 / 16) * 100%);
  }

  & > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  iframe {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  ${media('<=desktop')} {
    width: 100%;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
`;

type Props = Pick<BasicSectionProps, 'reversed'>;
const BasicSectionWrapper = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: ${(p: Props) => (p.reversed ? 'row-reverse' : 'row')};

  ${ImageContainer} {
    margin: ${(p: Props) => (p.reversed ? '0 0 0 5rem' : '0 5rem 0 0')};
  }

  ${media('<=desktop')} {
    flex-direction: column;

    ${ImageContainer} {
      margin: 0 0 2.5rem 0;
    }
  }
`;
