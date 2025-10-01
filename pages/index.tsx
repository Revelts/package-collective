import { InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import BasicSection from 'components/BasicSection';
import Link from 'components/Link';
import { EnvVars } from 'env';
import { getAllPosts } from 'utils/postsFetcher';
import ListenPlatforms from 'views/HomePage/ListenPlatforms';
import TalentProfiles from 'views/HomePage/TalentProfiles';
import FeaturesGallery from 'views/HomePage/FeaturesGallery';
import Hero from 'views/HomePage/Hero';
import Partners from 'views/HomePage/Partners';
import ScrollableBlogPosts from 'views/HomePage/ScrollableBlogPosts';
import Testimonials from 'views/HomePage/Testimonials';

export default function Homepage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{EnvVars.SITE_NAME} | Nightclub Collective • DJ, MC, Producer</title>
        <meta name="description" content="Package Collective is a nightclub music collective from Indonesia. DJs, MCs, and producers collaborating on events, tours, and releases." />
        <meta name="keywords" content="Package Collective, nightclub, club, DJ, MC, producer, Indonesia, dance music, indobounce, events, tour, record label" />
        <meta name="author" content="Package Collective" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={EnvVars.SITE_NAME} />
        <meta property="og:title" content="Package Collective • Nightclub Music Collective" />
        <meta property="og:description" content="DJs, MCs, and producers collaborating on events, tours, and releases." />
        <meta property="og:url" content={EnvVars.URL} />
        <meta property="og:image" content={`${EnvVars.OG_IMAGES_URL}home.png`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Package Collective • Nightclub Music Collective" />
        <meta name="twitter:description" content="DJs, MCs, and producers collaborating on events, tours, and releases." />
        <meta name="twitter:image" content={`${EnvVars.OG_IMAGES_URL}home.png`} />

        <link rel="canonical" href={EnvVars.URL} />
      </Head>
      <HomepageWrapper>
        <WhiteBackgroundContainer>
          <Hero />
          {/* <Partners /> */}
          <BasicSection videoUrl="https://www.youtube.com/watch?v=syF1bZYPfo4" title="Bengkel SCBD" overTitle="Package Homecoming">
            <p>
              Package Homecoming diadakan di Bengkel SCBD sebagai momen spesial setelah reuni singkat yang bermula dari Discord call. 
              Dari obrolan santai itu, lahirlah semangat untuk kembali ke akar—merayakan musik, kebersamaan, dan energi panggung yang 
              jadi ciri khas Package Collective.
            </p>
          </BasicSection>

          <BasicSection videoUrl="https://www.youtube.com/watch?v=z28jmOntSE0" title="W Superclub" overTitle="Package 2nd Anniversary" reversed>
            <p>
              Package 2nd Anniversary dirayakan di W Superclub sebagai penanda perjalanan dua tahun penuh karya, energi, dan kolaborasi. 
              Malam spesial ini bukan hanya pesta musik, tapi juga perayaan komunitas yang terus tumbuh bersama—dari panggung ke panggung, 
              dari satu kolaborasi ke kolaborasi berikutnya.
            </p>
          </BasicSection>
        </WhiteBackgroundContainer>
        <DarkerBackgroundContainer>
          <ListenPlatforms />
          {/* <FeaturesGallery /> */}
          <TalentProfiles />
          {/* <Testimonials />
          <ScrollableBlogPosts posts={posts} /> */}
        </DarkerBackgroundContainer>
      </HomepageWrapper>
    </>
  );
}

const HomepageWrapper = styled.div`
  & > :last-child {
    margin-bottom: 15rem;
  }
`;

const DarkerBackgroundContainer = styled.div`
  background: transparent;

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

const WhiteBackgroundContainer = styled.div`
  background: transparent;

  & > :last-child {
    padding-bottom: 15rem;
  }

  & > *:not(:first-child) {
    margin-top: 15rem;
  }
`;

export async function getStaticProps() {
  return {
    props: {
      posts: await getAllPosts(),
    },
  };
}
