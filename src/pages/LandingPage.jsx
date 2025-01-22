import Header from '../components/Header'
import Hero from '../components/Hero';
import About from '../components/About';
import MenuSection from '../components/MenuSection';
import ChefSection from '../components/ChefSection';
import Testimonials from '../components/Testimonials';
import Blogs from '../components/Blogs';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import Reservation from '../components/Reservation'
import Signatures from '../components/Signatures';


function LandingPage() {
  return (
    <div>
    <Header />
    <Hero />
    <About />
    <MenuSection />
    <ChefSection />
    <Signatures/>
    <Reservation/>
    <Gallery/>
    <Testimonials />
    <Blogs />
    <Footer />
  </div>
  )
}

export default LandingPage