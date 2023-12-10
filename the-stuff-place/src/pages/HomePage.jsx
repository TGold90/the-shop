import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeContent from "../components/HomeContent";
import { CarouselDefault } from "../components/brand-carousel";


export default function HomePage() {
    return (
        <>
            <Header />
            <HomeContent />
            <CarouselDefault></CarouselDefault>
            <Footer />
        </>
    )
}