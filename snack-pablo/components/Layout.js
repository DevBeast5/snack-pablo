// components/Layout.js
import Head from 'next/head';

export default function Layout({ children, title = 'Snack Pablo', description = 'Fast food à Martil & Tétouan' }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            <div className="min-h-screen flex flex-col bg-pablo-cream text-pablo-ink">
                <main className="flex-grow">{children}</main>
            </div>
        </>
    );
}