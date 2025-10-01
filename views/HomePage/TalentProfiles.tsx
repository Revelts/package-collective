import NextImage from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { A11y, Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from 'components/Container';
import OverTitle from 'components/OverTitle';
import SectionTitle from 'components/SectionTitle';
import { media } from 'utils/media';

type Talent = {
  name: string;
  role: string;
  avatarUrl: string;
  instagramUrl: string;
  soundcloudUrl: string;
};

const TALENTS: Talent[] = [
    { name: 'Adnan Veron', role: 'DJ', avatarUrl: '/talents/adnan.png', instagramUrl: 'https://www.instagram.com/adnanveron/', soundcloudUrl: 'https://soundcloud.com/adnanveron' },
    { name: 'Akeey', role: 'DJ', avatarUrl: '/talents/akeey.png', instagramUrl: 'https://www.instagram.com/andrakeey/', soundcloudUrl: 'https://soundcloud.com/andrakeey' },
    { name: 'Arsyih Idrak', role: 'DJ', avatarUrl: '/talents/arsyih.png', instagramUrl: 'https://www.instagram.com/arsyihidrak_/', soundcloudUrl: 'https://soundcloud.com/eyofuckinars' },
  
    { name: 'Bravy', role: 'DJ', avatarUrl: '/talents/bravy.png', instagramUrl: 'https://www.instagram.com/bravyson.vconk/', soundcloudUrl: 'https://soundcloud.com/bravyson' },
    { name: 'Deka', role: 'DJ', avatarUrl: '/talents/deka.png', instagramUrl: 'https://www.instagram.com/deka.wav/', soundcloudUrl: 'https://soundcloud.com/d3ck4' },
    { name: 'Drwe', role: 'MC', avatarUrl: '/talents/drwe.png', instagramUrl: 'https://www.instagram.com/drwepradono_/', soundcloudUrl: 'https://soundcloud.com/packagerecords' },
    { name: 'Duck Head', role: 'DJ', avatarUrl: '/talents/duckhead.png', instagramUrl: 'https://www.instagram.com/duckhead.music/', soundcloudUrl: 'https://soundcloud.com/alexanderisduckhead' },
  
    { name: 'Erga', role: 'DJ', avatarUrl: '/talents/erga.png', instagramUrl: 'https://www.instagram.com/ergagerald/', soundcloudUrl: 'https://soundcloud.com/erga-geraldiaz' },
    { name: 'HBRP', role: 'DJ', avatarUrl: '/talents/hbrp.png', instagramUrl: 'https://www.instagram.com/hbrp_/', soundcloudUrl: 'https://soundcloud.com/hbrpdj' },
    { name: 'Jayjax', role: 'DJ', avatarUrl: '/talents/jayjax.png', instagramUrl: 'https://www.instagram.com/jayjaxdj/', soundcloudUrl: 'https://soundcloud.com/jayjaxdj' },
    { name: 'Keebo', role: 'DJ / MC', avatarUrl: '/talents/keebo.png', instagramUrl: 'https://www.instagram.com/keebo.mr/', soundcloudUrl: 'https://soundcloud.com/keebomic' },
    { name: 'Liquid Silva', role: 'MC', avatarUrl: '/talents/liquidsilva.png', instagramUrl: 'https://www.instagram.com/liquidsilva/', soundcloudUrl: 'https://soundcloud.com/liquidsilva' },
  
    { name: 'Mister Aloy', role: 'DJ / MC', avatarUrl: '/talents/aloy.png', instagramUrl: 'https://www.instagram.com/mister.aloy/', soundcloudUrl: 'https://soundcloud.com/misteraloy' },
    { name: 'Nyxx', role: 'Artist', avatarUrl: '/talents/nyxx.png', instagramUrl: 'https://www.instagram.com/__nyoursxx/', soundcloudUrl: 'https://soundcloud.com/naya-putri-969657611' },
    { name: 'Ony', role: 'DJ', avatarUrl: '/talents/ony.png', instagramUrl: 'https://www.instagram.com/onyonyy/', soundcloudUrl: 'https://soundcloud.com/packagerecords' },
    { name: 'Rey Putra', role: 'DJ', avatarUrl: '/talents/reyputra.png', instagramUrl: 'https://www.instagram.com/reyputramusic/', soundcloudUrl: 'https://soundcloud.com/reyputramusic' },
  
    { name: 'Robstee', role: 'DJ', avatarUrl: '/talents/robstee.png', instagramUrl: 'https://www.instagram.com/robstee_/', soundcloudUrl: 'https://soundcloud.com/packagerecords' },
    { name: 'Roni Joni', role: 'DJ', avatarUrl: '/talents/ronijoni.png', instagramUrl: 'https://www.instagram.com/ronijoni_/', soundcloudUrl: 'https://soundcloud.com/roni-joni' },
    { name: 'Steve Chris', role: 'DJ', avatarUrl: '/talents/stevechris.png', instagramUrl: 'http://instagram.com/stevechris_/', soundcloudUrl: 'https://soundcloud.com/stevechris' },
    { name: 'Wyntella', role: 'DJ', avatarUrl: '/talents/wyntella.png', instagramUrl: 'https://www.instagram.com/wynne.mci8/', soundcloudUrl: 'https://soundcloud.com/wynneeeee' },
];  

export default function TalentProfiles() {
  return (
    <Wrapper>
      <OverTitle>Package Team</OverTitle>
      <SectionTitle>Talent Profile</SectionTitle>
      <Carousel>
        <Swiper
          modules={[Navigation, Autoplay, A11y]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation
          loop
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 16 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
            1440: { slidesPerView: 4, spaceBetween: 24 },
            1840: { slidesPerView: 5, spaceBetween: 24 },
          }}
        >
          {TALENTS.map((t) => (
            <SwiperSlide key={t.name}>
              <Card>
                <Avatar>
                  <NextImage src={t.avatarUrl} alt={t.name} width={96} height={96} />
                </Avatar>
                <Name>{t.name}</Name>
                <Role>{t.role}</Role>
                <Actions>
                  <IconLink href={t.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg width="22" height="22" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                      <path fill="currentColor" d="M7 2h10c2.8 0 5 2.2 5 5v10c0 2.8-2.2 5-5 5H7c-2.8 0-5-2.2-5-5V7c0-2.8 2.2-5 5-5Zm0 2C5.3 4 4 5.3 4 7v10c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3V7c0-1.7-1.3-3-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm5.25-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z"/>
                    </svg>
                  </IconLink>
                  <IconLink href={t.soundcloudUrl} target="_blank" rel="noopener noreferrer" aria-label="SoundCloud">
                    <svg width="22" height="22" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                      <path fill="currentColor" d="M17.2 9.2c-.6 0-1.2.1-1.7.4-.5-2.3-2.5-4-4.9-4-2.8 0-5 2.2-5 5 0 .2 0 .3 0 .5-.9.9-1.5 1.6-1.5 2.5 0 1.1.9 2 2 2h11.1c2 0 3.6-1.6 3.6-3.6 0-2-1.6-3.6-3.6-3.6Z"/>
                    </svg>
                  </IconLink>
                </Actions>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Carousel>
    </Wrapper>
  );
}

const Wrapper = styled(Container)`
  text-align: center;
  & > ${SectionTitle} {
    margin-top: 1rem;
  }
`;

const Carousel = styled.div`
  margin-top: 4rem;

  .swiper-button-prev,
  .swiper-button-next {
    color: rgb(var(--textSecondary));

    ${media('<=desktop')} {
      display: none;
    }
  }
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2.5rem 2rem;
  background: rgba(0,0,0,0.2);
  border-radius: 1rem;
  border: 1px solid rgba(255,255,255,0.08);
`;

const Avatar = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 9999px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
`;

const Name = styled.h3`
  margin-top: 1.25rem;
  font-size: 1.8rem;
`;

const Role = styled.p`
  margin-top: 0.25rem;
  font-size: 1.3rem;
  opacity: 0.8;
`;

const Actions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const IconLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  color: rgb(var(--textSecondary));
  background: rgba(0,0,0,0.25);
  border: 1px solid rgba(255,255,255,0.1);
  text-decoration: none;
  transition: transform .2s ease, color .2s ease, background .2s ease;

  &:hover {
    transform: translateY(-2px);
    color: rgb(var(--primary));
    background: rgba(0,0,0,0.35);
  }
`;


