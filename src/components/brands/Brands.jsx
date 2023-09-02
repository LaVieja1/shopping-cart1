/* eslint-disable react/no-unescaped-entities */
import jsonData from '../../data/shoes.json';
import { Shoe } from '../shoe/Shoe';
import './Brands.css';

export const Brands = () => {
    return (
        <main>
            <div className="main">
                <div className="jordan-container">
                    <img src='/src/assets/img/ImagenlandingPage.png' alt='jordan' className='jordan-img'></img>
                    <div className="jordan">JORDAN</div>
                </div>
                <h2 className='brands'>BRANDS</h2>
                <div className='brands-container'>
                    <div className='nike-container'>
                        <div className='nike button'>NIKE</div>
                    </div>
                    <div className='adidas-container'>
                        <div className='adidas button'>ADIDAS</div>
                    </div>
                    <div className='puma-container'>
                        <div className='puma button'>PUMA</div>
                    </div>
                </div>
                <div className='arrivals'>
                    <h2>NEW ARRIVALS</h2>
                    <div className='shoes-container'>
                        <Shoe data={jsonData.shoes.Puma['White-Barbados-Cherry']} />
                        <Shoe data={jsonData.shoes.Jordan['Racer Blue']} />
                        <Shoe data={jsonData.shoes.Adidas['Trae Young 1 \'Atlanta\'']} />
                        <Shoe data={jsonData.shoes.Nike.Suns} />
                        <Shoe data={jsonData.shoes.Adidas.Zebra} />
                    </div>
                    <div className='button'>VIEW ALL</div>
                </div>
            </div>
            <div className='featured'>
                    <h2>FEATURED</h2>
                    <div className="img-container">
                        <div className="words">
                            <div className="name">
                                <h1>Miles Stewart's</h1>
                                <h1>favorites</h1>
                            </div>
                            <h1>:P</h1>
                        </div>
                        <div className='button'>CHECK IT OUT</div>
                    </div>
                </div>
        </main>
    )
}