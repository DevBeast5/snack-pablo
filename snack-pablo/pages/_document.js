import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="fr">
            <Head>
                {/* Fonts — loaded via Document as Next.js requires */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;0,9..144,900;1,9..144,400;1,9..144,500&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,600,700,900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body className="antialiased">
            <Main />
            <NextScript />
            </body>
        </Html>
    );
}