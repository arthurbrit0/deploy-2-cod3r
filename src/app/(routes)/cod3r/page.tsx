import Footer from "@/features/shared/components/footer";
import Header from "@/features/shared/components/header/Header";
import Container from "@/features/shared/layouts/Container";
import AboutUsPage from "@/features/about-us/pages/AboutUsPage";

export default function Page() {
    return (
        <>
            <Header />
            <AboutUsPage />
            <Container className="py-16">
                <Footer />
            </Container>
        </>
    )
}