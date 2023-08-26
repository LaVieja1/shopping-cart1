/* eslint-disable react/prop-types */
export const Shoe = (props) => {
    const { brand, model, name, price, img } = props.data;

    return (
        <div className="shoe">
            <img src={img} alt={model} />
            <h3 className="brand">{brand}</h3>
            <div className="description">
                <p className="model">{model}</p>
                <p className="name">{name}</p>
            </div>
            <h3 className="price">{price}</h3>
        </div>
    )
}