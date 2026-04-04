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
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/uploaded-1775213706164-nwwgzi24.jpg?_wi=1",          imageAlt: "Personalizowany kubek"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/uploaded-1775213706165-dgznwmz8.jpg?_wi=1",          imageAlt: "Kubek z nadrukiem"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/uploaded-1775213706165-ftb42ul8.jpg?_wi=1",          imageAlt: "Kubek z napisem"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/uploaded-1775213706165-mrw7konp.jpg?_wi=1",          imageAlt: "Kubek personalizowany"},
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/uploaded-1775213706165-3u1wydar.jpg?_wi=1",          imageAlt: "Kubek na prezent"},
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
          id: "p1",          name: "Kubki personalizowane",          price: "od 40zł",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/uploaded-1775209849815-nx6xkg6r.jpg"},
        {
          id: "p2",          name: "Kubki z białe",          price: "od 25zł ",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/uploaded-1775213706165-dgznwmz8.jpg?_wi=2"},
        {
          id: "p3",          name: "Kubki brokatowe",          price: "od 55zł",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/uploaded-1775213706165-ftb42ul8.jpg?_wi=2"},
        {
          id: "p4",          name: "Zamówienia dla firm",          price: "Indywidualna wycena",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/uploaded-1775210983492-14e7pvy9.jpg"},
      ]}
      title="Oferta "
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
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/uploaded-1774938015625-ye4owbrl.jpg"},
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/uploaded-1775321857651-najy1hjs.jpg"},
          ],
        },
        {
          title: "Dbałość o detale",          description: "Każdy projekt traktujemy z najwyższą starannością.",          icon: Award,
          mediaItems: [
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/uploaded-1775213706165-ftb42ul8.jpg?_wi=3"},
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/uploaded-1775213706165-mrw7konp.jpg?_wi=3"},
          ],
        },
        {
          title: "Szybka realizacja",          description: "Twój kubek dotrze do Ciebie ekspresowo.",          icon: Zap,
          mediaItems: [
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/uploaded-1775209638626-gl2htyrt.jpg"},
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/uploaded-1775213706164-nwwgzi24.jpg?_wi=4"},
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
          id: "1",          name: "Izabela",          date: "12.03.2024",          title: "Stała klientka",          quote: "Świetne kubki, wysoka jakość. Ten z napisem FAITH stał się moim ulubionym!",          tag: "Klient Indywidualny",          avatarSrc: "http://img.b2bpic.net/free-photo/asian-smallclawed-otter-nature-habitat-otter-zoo-lunch-time-wild-scene-with-captive-animal-amazing-playful-animals-aonyx-cinereus_475641-2050.jpg?id=25341311",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/uploaded-1775213706164-nwwgzi24.jpg?_wi=5",          imageAlt: "Elegant mug with glitter finish and subtle design, gold accents."},
        {
          id: "2",          name: "Katarzyna",          date: "10.02.2024",          title: "Zamówienie firmowe",          quote: "Wysoka jakość, świetna komunikacja i szybka realizacja.",          tag: "Corporate Client",          avatarSrc: "http://img.b2bpic.net/premium-photo/nature-reserve-zelenci-krajnska-gora-slovenia-europe-wonderful-morning-view-zelenci-nature-reserve-slovenia-travel_527096-20488.jpg?id=42831486",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/uploaded-1775321911484-shv3lepj.jpg",          imageAlt: "Professional company branded mug with logo, minimalistic and corporate style."},
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
          id: "g1",          name: "Kubki Białe Firmowe ",          price: "",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/uploaded-1775213706164-nwwgzi24.jpg?_wi=6"},
        {
          id: "g2",          name: "biały kubek ",          price: "",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/uploaded-1775322059563-nq1m5hyd.jpg"},
        {
          id: "g3",          name: "Personalizowane Kubki Brokatowe! ",          price: "",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/uploaded-1775213706165-ftb42ul8.jpg?_wi=5"},
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
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BhO995npLExIhf6Ft9bT8bmyPj/uploaded-1775213706165-3u1wydar.jpg?_wi=3"
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