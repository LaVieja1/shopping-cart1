import {HeaderNav} from '../components/headerNav/HeaderNav';
import { Nav } from '../components/nav/Nav';
import { Footer } from '../components/footer/Footer';
import { JordanShoes } from '../components/products/jordan/JordanShoes';

function Jordan() {
    return (
        <>
            <HeaderNav />
            <Nav />
            <JordanShoes />
            <Footer />
        </>
    )
  }
  
export default Jordan;