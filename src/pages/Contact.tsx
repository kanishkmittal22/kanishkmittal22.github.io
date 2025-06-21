
import Header from '@/components/Header';
import HeroOtherPage from '@/components/HeroOtherPage';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroOtherPage
        title="Contact Us"
        subtitle="AAR KAY INDUSTRIES"
        description="Crafting Copper Excellence Since 1992"
        backgroundImage="/images/Production.png"
      />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
