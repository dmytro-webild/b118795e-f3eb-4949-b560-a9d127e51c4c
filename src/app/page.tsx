"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import TextAbout from '@/components/sections/about/TextAbout';
import { Camera, Sparkles } from "lucide-react";

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
        { name: "Galeria", id: "gallery" },
        { name: "Opinie", id: "testimonials" },
        { name: "Kontakt", id: "contact" },
      ]}
      brandName="Łyk Fantazji"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{ variant: "gradient-bars" }}
      title="Zamów swój personalizowany kubek – prezent, który zachwyca"
      description="Personalizowane kubki na prezent, dla firm i na każdą okazję. Twój pomysł, nasze wykonanie."
      buttons={[{ text: "Order Quote", href: "#contact" }, { text: "See Realizations", href: "#gallery" }]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      title="Tworzymy nadruki, które mają znaczenie."
      useInvertedBackground={false}
      buttons={[{ text: "Order Quote", href: "#contact" }]}
      className="py-24"
    />
  </div>

  <div id="gallery" data-section="gallery">
      <FeatureCardTwentySix
      title="Portfolio"
      description="Zobacz nasze dotychczasowe realizacje i zainspiruj się."
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        { title: "Projekt 1", description: "Opis", buttonIcon: Camera },
        { title: "Projekt 2", description: "Opis", buttonIcon: Camera },
        { title: "Projekt 3", description: "Opis", buttonIcon: Camera },
        { title: "Projekt 4", description: "Opis", buttonIcon: Camera }
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      title="Opinie"
      description="Co mówią o nas nasi klienci."
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Anna K.", role: "Klientka", testimonial: "Wspaniałe kubki!" },
        { id: "2", name: "Marek D.", role: "Firma", testimonial: "Pełen profesjonalizm.", icon: Sparkles }
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      title="Zamów swój projekt"
      description="Wypełnij formularz, a przygotujemy wycenę."
      inputs={[
        { name: "imię", type: "text", placeholder: "Imię" },
        { name: "email", type: "email", placeholder: "Email" },
        { name: "plik", type: "file", placeholder: "Załącz plik" },
      ]}
      textarea={{ name: "wiadomość", placeholder: "Opisz swój wymarzony projekt" }}
      useInvertedBackground={true}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/uploaded-1775213706165-3u1wydar.jpg?_wi=3"
      buttonText="Order Quote"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[{ items: [{ label: "Galeria", href: "#gallery" }, { label: "Opinie", href: "#testimonials" }, { label: "Zamów", href: "#contact" }] }]}
      logoText="Łyk Fantazji"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}