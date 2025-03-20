import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection.jsx';
import SearchBar from '../components/SearchBar/SearchBar.jsx';
import CategoryList from '../components/CategoryList/CategoryList.jsx';
import TrendingProducts from '../components/TrendingProducts/TrendingProducts.jsx';
import CTASection from '../components/CTASection/CTASection.jsx';
import Footer from '../components/Footer/Footer.jsx';

function HomePage() {
  return (
    <div>
      <HeroSection />
      <SearchBar />
      <CategoryList />
      <TrendingProducts />
      <CTASection />
      <Footer />
    </div>
  );
}

export default HomePage;
