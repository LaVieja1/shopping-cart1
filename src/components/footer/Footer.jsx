import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import './Footer.css';

export const Footer = () => {
    return (
        <footer>
            <div className='info'>
                <div className="about">
                    <h3>ABOUT LIT KICKS</h3>
                    <div className="text">
                        <a href="#" target="_blank" rel="noopener noreferrer">ABOUT</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">CAREERS</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">PRIVACY STATEMENT</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">TERMS OF USE</a>
                    </div>
                </div>
                <div className="about service">
                    <h3>CUSTOMER SERVICE</h3>
                    <div className="text">
                        <a href="#" target="_blank" rel="noopener noreferrer">CONTACT</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">FAQs</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">RETURNS</a>
                        <a href="#" target="_blank" rel="noopener noreferrer">COVID-19 INFORMATION & SAFETY</a>
                    </div>
                </div>
                <div className="about social">
                    <h3>FOLLOW US</h3>
                    <div className='social-logos'>
                        <InstagramIcon />
                        <FacebookIcon />
                        <TwitterIcon />
                    </div>
                </div>
                <div className="about newsletter">
                    <h3>JOIN OUR NEWSLETTER</h3>
                    <input type="email" name="email" id="email" placeholder='E-mail' required/>
                    <div className="button">JOIN</div>
                </div>
            </div>
            <div className="pay-logos">
                <img src="/src/assets/svg/visa.svg" alt="Visa" />
                <img src="/src/assets/svg/american-express.svg" alt="American Express" />
                <img src="/src/assets/svg/mastercard.svg" alt="Mastercard" />
                <img src="/src/assets/svg/paypal.svg" alt="Paypal" />
                <img src="/src/assets/svg/apple-pay.svg" alt="Apple Pay" />
            </div>
        </footer>
    )
}