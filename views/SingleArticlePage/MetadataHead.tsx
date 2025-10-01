import Head from 'next/head';
import React from 'react';
import { EnvVars } from 'env';

interface MetadataHeadProps {
  title: string;
  description: string;
  author: string;
  keywords?: string;
  ogImage?: string;
  url?: string;
  siteName?: string;
}

export default function MetadataHead(props: MetadataHeadProps) {
  const { title, description, author, keywords, ogImage, url, siteName } = props;
  const resolvedSiteName = siteName || EnvVars.SITE_NAME;
  const resolvedUrl = url || EnvVars.URL;
  const resolvedOgImage = ogImage || `${EnvVars.URL}logo-package.png`;

  return (
    <Head>
      <title>
        {title} | {resolvedSiteName}
      </title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <meta name="author" content={author} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={resolvedSiteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={resolvedUrl} />
      <meta property="og:image" content={resolvedOgImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={resolvedOgImage} />

      <link rel="canonical" href={resolvedUrl} />
    </Head>
  );
}
