import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import ComplianceBadges from '../components/ComplianceBadges';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <ComplianceBadges />
      <Contact />
    </>
  );
};

export default HomePage;