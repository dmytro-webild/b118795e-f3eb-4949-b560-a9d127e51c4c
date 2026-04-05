"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import TextAbout from '@/components/sections/about/TextAbout';
import TimelineProcessFlow from '@/components/cardStack/layouts/timelines/TimelineProcessFlow';
import { Award, CheckCircle, Zap, FileText, Truck, Paintbrush, Package } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="mediumLargeSizeMediumTitles"
        background="floatingGradient"
        cardStyle="glass-depth"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        { name: "Start", id: "hero" },
        { name: "O Nas", id: "about" },
        { name: "Jak zamówić?", id: "steps" },
        { name: "Oferta", id: "products" },
        { name: "Opinie", id: "testimonials" },
        { name: "Kontakt", id: "contact" },
      ]}
      brandName="Łyk Fantazji"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{ variant: "gradient-bars" }}
      title="Zamów swój personalizowany kubek – prezent, który zachwyca"
      description="Personalizowane kubki na prezent, dla firm i na każdą okazję. Twój pomysł, nasze wykonanie."
      buttons={[{ text: "Zamów swój kubek", href: "#products" }, { text: "Zobacz realizacje", href: "#gallery" }]}
      mediaItems={[
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/uploaded-1775213706164-nwwgzi24.jpg?_wi=1", imageAlt: "Personalizowany kubek" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/uploaded-1775213706165-dgznwmz8.jpg?_wi=1", imageAlt: "Kubek z nadrukiem" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      title="Tworzymy nadruki, które mają znaczenie."
      description=""
      className="py-24"
    />
  </div>

  <div id="steps" data-section="steps">
      <TimelineProcessFlow
      title="Jak zamówić?"
      textboxLayout="split"
      animationType="slide-up"
      items={[
        { content: "Wybierz kubek", media: <Paintbrush className="w-12 h-12" />, reverse: false },
        { content: "Prześlij swój projekt lub opis", media: <FileText className="w-12 h-12" />, reverse: true },
        { content: "Czekaj na projekt", media: <Package className="w-12 h-12" />, reverse: false },
        { content: "Szybka dostawa", media: <Truck className="w-12 h-12" />, reverse: true },
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        { id: "p1", name: "Kubki personalizowane", price: "od 40zł", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/uploaded-1775209849815-nx6xkg6r.jpg" },
        { id: "p2", name: "Kubki z białe", price: "od 25zł ", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/uploaded-1775213706165-dgznwmz8.jpg?_wi=2" },
      ]}
      title="Oferta"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      title="Opinie naszych klientów"
      textboxLayout="split"
      testimonials={[
        { id: "1", title: "Wspaniałe kubki!", quote: "Jakość nadruku przerosła moje oczekiwania. Polecam!", name: "Anna K.", role: "Klientka indywidualna" },
        { id: "2", title: "Profesjonalizm", quote: "Szybka realizacja i świetny kontakt. Idealne dla firmy.", name: "Marek D.", role: "Właściciel firmy" },
        { id: "3", title: "Super prezent", quote: "Osoba obdarowana była zachwycona personalizacją.", name: "Ewa P.", role: "Klientka" },
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      title="Skontaktuj się z nami"
      description="24h response guarantee. Wyślij swoje zamówienie lub zapytanie, a nasz zespół skontaktuje się z Tobą w ciągu doby."
      inputs={[
        { name: "imię", type: "text", placeholder: "Imię" },
        { name: "email", type: "email", placeholder: "Email" },
        { name: "projekt", type: "text", placeholder: "Opis projektu" },
        { name: "file", type: "file", placeholder: "Załącz plik" },
      ]}
      textarea={{ name: "wiadomość", placeholder: "Szczegóły zamówienia" }}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/uploaded-1775213706165-3u1wydar.jpg?_wi=3"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[{ items: [{ label: "Oferta", href: "#products" }, { label: "Opinie", href: "#testimonials" }, { label: "Kontakt", href: "#contact" }] }]}
      logoText="Łyk Fantazji"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
