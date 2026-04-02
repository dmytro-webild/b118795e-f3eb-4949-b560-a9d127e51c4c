"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Award, CheckCircle, Zap } from "lucide-react";

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
        {
          name: "Start",          id: "hero"},
        {
          name: "O Nas",          id: "about"},
        {
          name: "Oferta",          id: "products"},
        {
          name: "Opinie",          id: "testimonials"},
        {
          name: "Kontakt",          id: "contact"},
      ]}
      brandName="Łyk Fantazji"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "gradient-bars"}}
      title="Zamów swój personalizowany kubek – prezent, który zachwyca"
      description="Personalizowane kubki na prezent, dla firm i na każdą okazję. Twój pomysł, nasze wykonanie."
      buttons={[
        {
          text: "Zamów swój kubek",          href: "#products"},
        {
          text: "Zobacz realizacje",          href: "#gallery"},
      ]}
      mediaItems={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/a-set-of-high-quality-customizable-ceram-1774937721826-f011d619.png?_wi=1",          imageAlt: "Personalizowany kubek"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/a-set-of-high-quality-customizable-ceram-1774937721826-f011d619.png?_wi=2",          imageAlt: "Kubek z nadrukiem"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/a-set-of-high-quality-customizable-ceram-1774937721826-f011d619.png?_wi=3",          imageAlt: "Kubek z napisem"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/a-set-of-high-quality-customizable-ceram-1774937721826-f011d619.png?_wi=4",          imageAlt: "Kubek personalizowany"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/a-set-of-high-quality-customizable-ceram-1774937721826-f011d619.png?_wi=5",          imageAlt: "Kubek na prezent"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/a-set-of-high-quality-customizable-ceram-1774937721826-f011d619.png?_wi=6",          imageAlt: "Kubek z logo"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="O Nas"
      description={[
        "Łyk Fantazji to marka, która powstała z pasji do tworzenia wyjątkowych i personalizowanych produktów. Specjalizujemy się w nadrukach na kubkach, dbając o każdy detal – od projektu po wykonanie.",        "Naszym celem jest dostarczanie produktów, które wywołują emocje i sprawiają radość – idealnych na prezent lub do codziennego użytku."]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "p1",          name: "Kubki personalizowane",          price: "od 35 PLN",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/uploaded-1774938015625-65ux4av7.jpg"},
        {
          id: "p2",          name: "Kubki z napisami",          price: "od 29 PLN",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/uploaded-1774938015625-kvrglya9.jpg"},
        {
          id: "p3",          name: "Kubki brokatowe",          price: "od 45 PLN",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/uploaded-1774938015625-ye4owbrl.jpg"},
        {
          id: "p4",          name: "Zamówienia dla firm",          price: "Indywidualna wycena",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/professional-company-branded-mug-with-lo-1774937720138-cf6010c4.png?_wi=1"},
      ]}
      title="Nasze Portfolio"
      description=" "
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFive
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Wysoka jakość",          description: "Żywe kolory i trwałe nadruki, które przetrwają lata.",          icon: CheckCircle,
          mediaItems: [
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/custom-printed-ceramic-mug-with-modern-a-1774937720967-f48ce6e7.png?_wi=3"},
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/elegant-mug-with-glitter-finish-and-subt-1774937722325-e510a85a.png?_wi=2"},
          ],
        },
        {
          title: "Dbałość o detale",          description: "Każdy projekt traktujemy z najwyższą starannością.",          icon: Award,
          mediaItems: [
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/custom-printed-ceramic-mug-with-modern-a-1774937720967-f48ce6e7.png?_wi=4"},
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/elegant-mug-with-glitter-finish-and-subt-1774937722325-e510a85a.png?_wi=3"},
          ],
        },
        {
          title: "Szybka realizacja",          description: "Twój kubek dotrze do Ciebie ekspresowo.",          icon: Zap,
          mediaItems: [
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/custom-printed-ceramic-mug-with-modern-a-1774937720967-f48ce6e7.png?_wi=5"},
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/elegant-mug-with-glitter-finish-and-subt-1774937722325-e510a85a.png?_wi=4"},
          ],
        },
      ]}
      title="Dlaczego My?"
      description="Dlaczego zaufały nam tysiące klientów?"
      animationType="scale-rotate"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          name: "Izabela",          date: "12.03.2024",          title: "Stała klientka",          quote: "Świetne kubki, wysoka jakość. Ten z napisem FAITH stał się moim ulubionym!",          tag: "Personalizacja",          avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/avatar-placeholder-friendly-smiling-cust-1774937720793-43f748e9.png",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/elegant-mug-with-glitter-finish-and-subt-1774937722325-e510a85a.png?_wi=5",          imageAlt: "Elegant mug with glitter finish and subtle design, gold accents."},
        {
          id: "2",          name: "Katarzyna",          date: "10.02.2024",          title: "Zamówienie firmowe",          quote: "Wysoka jakość, świetna komunikacja i szybka realizacja.",          tag: "Firma",          avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/avatar-placeholder-friendly-smiling-cust-1774937720555-e9e1898d.png",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/professional-company-branded-mug-with-lo-1774937720138-cf6010c4.png?_wi=2",          imageAlt: "Professional company branded mug with logo, minimalistic and corporate style."},
        {
          id: "3",          name: "Natalia",          date: "05.01.2024",          title: "Prezent",          quote: "Kolory wyraźne, nic się nie ściera. Wszystko wykonane idealnie.",          tag: "Jakość",          avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/avatar-placeholder-friendly-smiling-cust-1774937721138-8bbc06fb.png",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/avatar-placeholder-friendly-smiling-cust-1774937720793-43f748e9.png",          imageAlt: "Avatar placeholder friendly smiling customer."},
        {
          id: "4",          name: "Lola",          date: "15.11.2023",          title: "Prezent",          quote: "Kubki brokatowe dla znajomych zrobiły furorę! Wyglądają elegancko.",          tag: "Brokat",          avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/avatar-placeholder-friendly-smiling-cust-1774937719894-b60b0104.png",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/avatar-placeholder-friendly-smiling-cust-1774937720555-e9e1898d.png",          imageAlt: "Avatar placeholder friendly smiling customer."},
        {
          id: "5",          name: "Piotr",          date: "20.01.2024",          title: "Upominek",          quote: "Bardzo polecam, kubki prezentują się wyśmienicie na żywo.",          tag: "Prezent",          avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/avatar-placeholder-friendly-smiling-cust-1774937720793-43f748e9.png",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/avatar-placeholder-friendly-smiling-cust-1774937721138-8bbc06fb.png",          imageAlt: "Avatar placeholder friendly smiling customer."},
      ]}
      title="Opinie Klientów"
      description="Zobacz, co mówią o nas nasi zadowoleni klienci."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <ProductCardOne
      animationType="scale-rotate"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "g1",          name: "Wzór 1",          price: "",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/assortment-of-personalized-mugs-in-a-gri-1774937725942-d015dc45.png"},
        {
          id: "g2",          name: "Wzór 2",          price: "",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/close-up-of-a-personalized-print-on-a-ce-1774937720221-dc69b201.png"},
        {
          id: "g3",          name: "Wzór 3",          price: "",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/glitter-mug-glowing-under-soft-studio-li-1774937720649-65371855.png"},
      ]}
      title="Nasze Realizacje"
      description="Inspiracje dla Ciebie."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Napisz do nas"
      description="Masz pytania? Chcesz zamówić kubek? Skontaktuj się z nami!"
      inputs={[
        {
          name: "imię",          type: "text",          placeholder: "Imię"},
        {
          name: "email",          type: "email",          placeholder: "Email"},
      ]}
      textarea={{
        name: "wiadomość",        placeholder: "Twoja wiadomość"}}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/close-up-of-artisan-coffee-mug-with-crea-1774937721011-8e65a4f9.png"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Oferta",              href: "#products"},
            {
              label: "Opinie",              href: "#testimonials"},
            {
              label: "Kontakt",              href: "#contact"},
          ],
        },
      ]}
      logoText="Łyk Fantazji"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}