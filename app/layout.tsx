
import Head from 'next/head';
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="kr">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
        />
        <title>Nextjs 프로젝트</title>
        <meta charSet="utf-8"></meta>
        <meta name="title" content="Nextjs 프로젝트"></meta>
        <meta name="description" content="Nextjs 프로젝트에서 다양한 정보와 컨텐츠를 만나 보세요!"></meta>
        
        <meta property="og:url" content="https://zibn.kr" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nextjs 프로젝트" />
        <meta property="og:description" content="Nextjs 프로젝트에서 다양한 정보와 컨텐츠를 만나 보세요!" />
        <meta property="og:image" content="/favicon.ico" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Nextjs 프로젝트" />
        <meta name="twitter:description" content="Nextjs 프로젝트에서 다양한 정보와 컨텐츠를 만나 보세요!" />
        <meta name="twitter:image" content="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" 
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" 
              integrity="sha256-eZrrJcwDc/3uDhsdt61sL2oOBY362qM3lon1gyExkL0=" 
              crossOrigin="anonymous" /> 
        <link rel="stylesheet" as="style" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}
