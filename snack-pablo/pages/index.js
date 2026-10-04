// pages/index.js
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MenuPreview from '@/components/MenuPreview';
import Locations from '@/components/Locations';
import InstagramStrip from "@/components/InstagramStrip";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <Layout>
            <Header />
            <Hero />
            <div className="h-px bg-white/10" />
            <MenuPreview />
            <InstagramStrip />
            <About />
            <Locations />
            <Footer />
        </Layout>
    );
}