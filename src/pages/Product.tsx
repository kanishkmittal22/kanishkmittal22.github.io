
import Header from '@/components/Header';
import HeroOtherPage from '@/components/HeroOtherPage';
import ProductSection from '@/components/ProductsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroOtherPage
        title="Our Products"
        subtitle="AAR KAY INDUSTRIES"
        description="Crafting Copper Excellence Since 1992"
        backgroundImage="/images/Production.png"
      />
      <ProductSection />
      <Footer />
    </div>
  );
};

export default Index;
