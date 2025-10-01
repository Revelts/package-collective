import NextLink from 'next/link';
import styled from 'styled-components';
import Container from 'components/Container';
import { media } from 'utils/media';

type SingleFooterListItem = { title: string; href: string };
type FooterListItems = SingleFooterListItem[];
type SingleFooterList = { title: string; items: FooterListItems };
type FooterItems = SingleFooterList[];

const footerItems: FooterItems = [
  {
    title: 'Part of Us',
    items: [
      { title: 'Package Records', href: '/package-records' },
      { title: 'Package Goodies', href: '/package-goodies' },
    ],
  },
];

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <ListContainer>
          {footerItems.map((singleItem) => (
            <FooterList key={singleItem.title} {...singleItem} />
          ))}
        </ListContainer>
        <BottomBar>
          <ShareBar>
            <NextLink href="https://www.tiktok.com/@packagecollective" legacyBehavior passHref>
              <a aria-label="TikTok" title="TikTok"
                style={{display:'inline-flex',alignItems:'center',justifyContent:'center',width:50,height:50,borderRadius:9999,background:'rgba(0,0,0,0.2)',border:'1px solid rgba(255,255,255,0.15)'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2h3c.1 2.1 1.4 3.9 3.4 4.6v3c-1.3 0-2.6-.4-3.7-1.1v6.2c0 3.1-2.5 5.6-5.6 5.6S3 17.8 3 14.7 5.5 9.1 8.6 9.1c.4 0 .7 0 1 .1v3c-.3-.1-.6-.1-1-.1-1.5 0-2.7 1.2-2.7 2.7S7.1 17.5 8.6 17.5s2.7-1.2 2.7-2.7V2z"/>
                </svg>
              </a>
            </NextLink>
            <NextLink href="https://www.youtube.com/@packagecollective" legacyBehavior passHref>
              <a aria-label="YouTube" title="YouTube"
                style={{display:'inline-flex',alignItems:'center',justifyContent:'center',width:50,height:50,borderRadius:9999,background:'rgba(0,0,0,0.2)',border:'1px solid rgba(255,255,255,0.15)'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M23 7s-.2-1.6-.8-2.3c-.7-.8-1.5-.8-1.9-.9C17.5 3.5 12 3.5 12 3.5h0s-5.5 0-8.3.3c-.4 0-1.2.1-1.9.9C1.2 5.4 1 7 1 7S.8 8.9.8 10.9v2.2C.8 15 1 17 1 17s.2 1.6.8 2.3c.7.8 1.6.8 2 1 1.4.1 6.2.3 8.2.3 0 0 5.5 0 8.3-.3.4 0 1.2-.1 1.9-.9.6-.7.8-2.3.8-2.3s.2-1.9.2-3.9v-2C23.2 8.9 23 7 23 7Zm-13 8V8l6 3.5-6 3.5Z"/>
                </svg>
              </a>
            </NextLink>
            <NextLink href="https://soundcloud.com/packagerecords" legacyBehavior passHref>
              <a aria-label="SoundCloud" title="SoundCloud"
                style={{display:'inline-flex',alignItems:'center',justifyContent:'center',width:50,height:50,borderRadius:9999,background:'rgba(0,0,0,0.2)',border:'1px solid rgba(255,255,255,0.15)'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.2 9.2c-.6 0-1.2.1-1.7.4-.5-2.3-2.5-4-4.9-4-2.8 0-5 2.2-5 5 0 .2 0 .3 0 .5-.9.9-1.5 1.6-1.5 2.5 0 1.1.9 2 2 2h11.1c2 0 3.6-1.6 3.6-3.6 0-2-1.6-3.6-3.6-3.6Z"/>
                </svg>
              </a>
            </NextLink>
            <NextLink href="https://www.instagram.com/packagecollective" legacyBehavior passHref>
              <a aria-label="Instagram" title="Instagram"
                style={{display:'inline-flex',alignItems:'center',justifyContent:'center',width:50,height:50,borderRadius:9999,background:'rgba(0,0,0,0.2)',border:'1px solid rgba(255,255,255,0.15)'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M7 2h10c2.8 0 5 2.2 5 5v10c0 2.8-2.2 5-5 5H7c-2.8 0-5-2.2-5-5V7c0-2.8 2.2-5 5-5Zm0 2C5.3 4 4 5.3 4 7v10c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3V7c0-1.7-1.3-3-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5Zm5.25-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z"/>
                </svg>
              </a>
            </NextLink>
          </ShareBar>
          <Copyright>&copy; Copyright 2025 Package Collective</Copyright>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
}

function FooterList({ title, items }: SingleFooterList) {
  return (
    <ListWrapper>
      <ListHeader>{title}</ListHeader>
      {items.map((singleItem) => (
        <ListItem key={singleItem.href} {...singleItem} />
      ))}
    </ListWrapper>
  );
}

function ListItem({ title, href }: SingleFooterListItem) {
  return (
    <ListItemWrapper>
      <NextLink href={href} legacyBehavior passHref>
        <a>{title}</a>
      </NextLink>
    </ListItemWrapper>
  );
}

const FooterWrapper = styled.div`
  padding-top: 10rem;
  padding-bottom: 4rem;
  background: rgb(var(--secondary));
  color: rgb(var(--textSecondary));
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ListHeader = styled.p`
  font-weight: bold;
  font-size: 2.25rem;
  margin-bottom: 2.5rem;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  margin-right: 5rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${media('<=tablet')} {
    flex: 0 40%;
    margin-right: 1.5rem;
  }

  ${media('<=phone')} {
    flex: 0 100%;
    margin-right: 0rem;
  }
`;

const ListItemWrapper = styled.p`
  font-size: 1.6rem;

  a {
    text-decoration: none;
    color: rgba(var(--textSecondary), 0.75);
  }
`;

const ShareBar = styled.div`
  & > *:not(:first-child) {
    margin-left: 1rem;
  }

  a {
    color: rgb(var(--textSecondary));
    transition: transform .2s ease, color .2s ease, background .2s ease, border-color .2s ease;
  }

  a:hover {
    transform: translateY(-2px);
    color: rgb(var(--primary));
    border-color: rgba(255,255,255,0.25);
  }
`;

const Copyright = styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

const BottomBar = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;
