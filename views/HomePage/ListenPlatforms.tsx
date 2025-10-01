import React from 'react';
import styled from 'styled-components';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

export default function ListenPlatforms() {
  return (
    <CtaWrapper>
      <Container>
        <Stack>
          <OverTitle>Listen everywhere</OverTitle>
          <SectionTitle>Package Collective Album, Vol. 2</SectionTitle>
          <Description>Choose your platform and start listening.</Description>
          <PlatformGrid>
            <IconButton href="https://open.spotify.com/album/1CmVLBzsa6ea2pIt8RWBZL?referral=labelaffiliate&utm_source=1100lByeanMR&utm_medium=Indie_Believe&utm_campaign=labelaffiliate" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
              <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5Zm4.9 15.1c-.2.3-.6.4-.9.2-2.4-1.5-5.5-1.9-9.1-1.2-.3.1-.7-.2-.8-.5-.1-.3.2-.7.5-.8 3.9-.8 7.4-.3 10.1 1.4.3.2.4.6.2.9Zm1.2-2.8c-.2.3-.6.5-.9.3-2.8-1.7-7.2-2.2-10.6-1.4-.3.1-.7-.1-.8-.5-.1-.3.1-.7.5-.8 3.8-.8 8.6-.2 11.8 1.7.3.2.5.6.3.9Zm.1-2.9c-3.3-2-8.8-2.2-11.9-1.4-.4.1-.8-.2-.9-.6-.1-.4.2-.8.6-.9 3.6-.9 9.7-.7 13.5 1.6.4.2.5.7.3 1-.2.4-.7.5-1 .3Z"/>
              </svg>
            </IconButton>
            <IconButton href="https://music.apple.com/id/album/package-collective-album-vol-2/1787546879?at=1l3v9Tx&ct=BL&uo=4" target="_blank" rel="noopener noreferrer" aria-label="Apple Music">
              <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M17.6 13.1c0-2.3 1.9-3.4 1.9-3.4-1.1-1.6-2.7-1.8-3.3-1.8-1.4-.1-2.6.8-3.3.8-.7 0-1.7-.8-2.8-.8-1.4 0-2.7.8-3.4 2-1.5 2.7-.4 6.6 1.1 8.8.7 1 1.5 2.2 2.6 2.1 1-.1 1.4-.7 2.6-.7s1.6.7 2.7.6c1.1 0 1.8-1 2.5-2 .8-1.2 1.1-2.3 1.1-2.3s-2.1-.8-2.1-3.3Zm-2-8.1c.6-.7 1-1.6.9-2.5-1 .1-2 .6-2.7 1.3-.6.7-1 1.6-.9 2.5 1-.1 2-.6 2.7-1.3Z"/>
              </svg>
            </IconButton>
            <IconButton href="https://music.youtube.com/search?q=Package+Collective+Album%2C+Vol.+2+Package+Collective" target="_blank" rel="noopener noreferrer" aria-label="YouTube Music">
              <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" focusable="false">
                <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.15"/>
                <path fill="currentColor" d="M10 8.5v7l6-3.5-6-3.5Z"/>
              </svg>
            </IconButton>
            <IconButton href="https://www.youtube.com/playlist?list=OLAK5uy_mgF8q8ccmONp6bsI9sevKD5aiARpVJrEE" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M23 7s-.2-1.6-.8-2.3c-.7-.8-1.5-.8-1.9-.9C17.5 3.5 12 3.5 12 3.5h0s-5.5 0-8.3.3c-.4 0-1.2.1-1.9.9C1.2 5.4 1 7 1 7S.8 8.9.8 10.9v2.2C.8 15 1 17 1 17s.2 1.6.8 2.3c.7.8 1.6.8 2 1 1.4.1 6.2.3 8.2.3 0 0 5.5 0 8.3-.3.4 0 1.2-.1 1.9-.9.6-.7.8-2.3.8-2.3s.2-1.9.2-3.9v-2C23.2 8.9 23 7 23 7Zm-13 8V8l6 3.5-6 3.5Z"/>
              </svg>
            </IconButton>
            <IconButton href="https://music.amazon.fr/albums/B0DR2FQQ1W?ref=dm_ff_amazonmusic.3p" target="_blank" rel="noopener noreferrer" aria-label="Amazon Music">
              <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M4 7h3v10H4V7Zm5 0h3v10H9V7Zm5 0h3v10h-3V7Zm4.6 9.6c-2.7 1.6-6.1 2.4-9.6 2.4-3.5 0-6.9-.8-9.6-2.4-.5-.3-.7-.9-.4-1.4.3-.5.9-.7 1.4-.4 2.4 1.4 5.4 2.1 8.6 2.1s6.2-.7 8.6-2.1c.5-.3 1.1-.1 1.4.4.3.5.1 1.1-.4 1.4Z"/>
              </svg>
            </IconButton>
            <IconButton href="https://tidal.com/search?q=Package%20Collective%20Album,%20Vol.%202%20Package%20Collective" target="_blank" rel="noopener noreferrer" aria-label="Tidal">
              <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M7 7 12 12 7 17 2 12 7 7Zm10 0 5 5-5 5-5-5 5-5Zm-5 5 5 5-5 5-5-5 5-5Z"/>
              </svg>
            </IconButton>
            <IconButton href="https://www.deezer.com/us/album/686447201" target="_blank" rel="noopener noreferrer" aria-label="Deezer">
              <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M3 14h3v3H3v-3Zm4-2h3v5H7v-5Zm4-3h3v8h-3V9Zm4-2h3v10h-3V7Z"/>
              </svg>
            </IconButton>
          </PlatformGrid>
        </Stack>
      </Container>
    </CtaWrapper>
  );
}

const Description = styled.div`
  font-size: 1.8rem;
  color: rgba(var(--textSecondary), 0.8);
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12.5rem 0;
  color: rgb(var(--textSecondary));
  text-align: center;
  align-items: center;
  justify-content: center;

  & > *:not(:first-child) {
    max-width: 80%;
    margin-top: 4rem;
  }

  ${media('<=tablet')} {
    text-align: center;

    & > *:not(:first-child) {
      max-width: 100%;
      margin-top: 2rem;
    }
  }
`;

const PlatformGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.25rem;
`;

const IconButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background: rgba(0,0,0,0.2);
  color: rgb(var(--textSecondary));
  text-decoration: none;
  border: 1px solid rgba(255,255,255,0.15);
  transition: transform .2s ease, background .2s ease, color .2s ease;

  &:hover {
    transform: translateY(-2px) scale(1.03);
    background: rgba(0,0,0,0.3);
    color: rgb(var(--primary));
  }
`;

const CtaWrapper = styled.div`
  background: transparent;
`;


