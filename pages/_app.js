// pages/_app.js
import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Snack Pablo — Fast Food à Martil & Tétouan</title>
                <meta name="description" content="Snack Pablo — Burgers, tacos, sandwichs, pizza & naan à Martil et Tétouan. Commandez sur WhatsApp." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Snack Pablo" />
                <meta property="og:description" content="Fast food à Martil & Tétouan" />
                <meta property="og:type" content="website" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}