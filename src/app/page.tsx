"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="mediumLargeSizeMediumTitles"
        background="fluid"
        cardStyle="glass-elevated"
        primaryButtonStyle="flat"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Shop",
          id: "products",
        },
        {
          name: "Flash Sale",
          id: "flash-sale",
        },
        {
          name: "Reviews",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="CartOne"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "plain",
      }}
      logoText="CartOne."
      description="Premium quality tech delivered with speed. Experience luxury in every purchase."
      buttons={[
        {
          text: "Shop Now",
          href: "#products",
        },
        {
          text: "View Deals",
          href: "#flash-sale",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/still-life-with-plants-deco_23-2149192218.jpg"
      imageAlt="Premium Product"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Tech Hub X1",
          price: "$129.00",
          imageSrc: "http://img.b2bpic.net/free-photo/nice-blue-white-background-backdrop-purpose_1017-46757.jpg",
        },
        {
          id: "p2",
          name: "Audio Pro 5",
          price: "$89.00",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-foundation-container-rocks_23-2149705489.jpg",
        },
        {
          id: "p3",
          name: "Smart Lens 2",
          price: "$149.00",
          imageSrc: "http://img.b2bpic.net/free-photo/white-geometrical-wallpaper-with-hexagonal-shapes_23-2148811512.jpg",
        },
        {
          id: "p4",
          name: "Power Bank Slim",
          price: "$49.00",
          imageSrc: "http://img.b2bpic.net/free-photo/brown-glass-dropper-bottle-with-white-box-product-mockup_53876-143026.jpg",
        },
        {
          id: "p5",
          name: "Wireless Dock",
          price: "$59.00",
          imageSrc: "http://img.b2bpic.net/free-photo/man-with-laptop-white-background_1368-3993.jpg",
        },
        {
          id: "p6",
          name: "Ultra Cable Set",
          price: "$29.00",
          imageSrc: "http://img.b2bpic.net/free-photo/digital-entertainment-device-tech-modern_1127-2599.jpg",
        },
      ]}
      title="Featured Collection"
      description="Curated selection of our best-selling tech essentials."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwelve
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          id: "f1",
          label: "Reliability",
          title: "Cash On Delivery",
          items: [
            "Pay only upon arrival",
            "No upfront risks",
            "Verified secure",
          ],
        },
        {
          id: "f2",
          label: "Logistics",
          title: "Fast Shipping",
          items: [
            "Delivered to your door",
            "Trackable status",
            "Worldwide reach",
          ],
        },
        {
          id: "f3",
          label: "Security",
          title: "Secure Shopping",
          items: [
            "Data protection",
            "Secure handling",
            "24/7 Support",
          ],
        },
      ]}
      title="Why CartOne?"
      description="Exceptional service, every time."
    />
  </div>

  <div id="flash-sale" data-section="flash-sale">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "deal1",
          badge: "Hot",
          price: "$99",
          subtitle: "Original: $150",
          features: [
            "Limited Stock",
            "COD Available",
          ],
          buttons: [
            {
              text: "Buy Now",
            },
          ],
        },
        {
          id: "deal2",
          badge: "Limited",
          price: "$65",
          subtitle: "Original: $100",
          features: [
            "Fast Delivery",
            "COD Available",
          ],
          buttons: [
            {
              text: "Buy Now",
            },
          ],
        },
        {
          id: "deal3",
          badge: "Exclusive",
          price: "$45",
          subtitle: "Original: $70",
          features: [
            "Easy Return",
            "COD Available",
          ],
          buttons: [
            {
              text: "Buy Now",
            },
          ],
        },
      ]}
      title="Flash Sale Deals"
      description="Limited time offer – grab your favorites at discounts."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          title: "Great Product",
          quote: "The best tech accessory I have ever ordered. Fast delivery and high quality.",
          name: "Sarah J.",
          role: "Designer",
          imageSrc: "http://img.b2bpic.net/free-photo/thrilled-confident-manager-business-attire-celebrates-victorious-milestone_482257-111932.jpg",
        },
        {
          id: "t2",
          title: "Smooth Service",
          quote: "COD was very convenient. The product arrived on time and as described.",
          name: "Michael D.",
          role: "Student",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-point-finger-you_93675-135553.jpg",
        },
        {
          id: "t3",
          title: "Value for Money",
          quote: "Definitely coming back for more products. Highly recommend CartOne.",
          name: "Emily R.",
          role: "Manager",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-middle-aged-woman-showing-ok-sign_1262-17571.jpg",
        },
        {
          id: "t4",
          title: "Easy Process",
          quote: "Simple checkout and amazing build quality. Very happy with my purchase.",
          name: "David K.",
          role: "Engineer",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-young-businesswoman_23-2149153829.jpg",
        },
        {
          id: "t5",
          title: "Trustworthy",
          quote: "Great communication regarding shipping status. Excellent overall experience.",
          name: "Jessica L.",
          role: "Architect",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-handsome-male-smiling_181624-41237.jpg",
        },
      ]}
      title="Customer Stories"
      description="Join thousands of happy shoppers."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "Is COD really available?",
          content: "Yes, we offer Cash on Delivery across all our delivery locations.",
        },
        {
          id: "q2",
          title: "How long is shipping?",
          content: "Typically 3-5 business days depending on your location.",
        },
        {
          id: "q3",
          title: "Can I return products?",
          content: "We offer a 7-day hassle-free return policy if products are damaged.",
        },
      ]}
      sideTitle="Help Center"
      sideDescription="Everything you need to know about shopping with us."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "gradient-bars",
      }}
      text="Ready to order? Contact our support for assistance or bulk queries."
      buttons={[
        {
          text: "Contact Support",
          href: "mailto:sohamtamboli53@gmail.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Help Center",
              href: "#",
            },
            {
              label: "Contact",
              href: "mailto:sohamtamboli53@gmail.com",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      logoText="CartOne"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
