import './Brands.css';

export const Brands = () => {
    return (
        <main>
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
        </main>
    )
}