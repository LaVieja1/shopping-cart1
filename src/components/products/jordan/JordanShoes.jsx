import './JordanShoes.css';
import { RefineBy } from '../../refineBy/RefineBy';

export const JordanShoes = () => {
    return (
        <div className="main-container">
            <RefineBy />
            <div className="jordan">
            <div className="header">
                <h2 className='brand'>JORDAN</h2>
                <div className="sort">
                    <p>SORT BY</p>
                    <select name="sort-by" id="sort-by">
                        <option value="Relevance">Relevance</option>
                        <option value="Newest">Newest</option>
                        <option value="Price high">Price high</option>
                        <option value="Price low">Price low</option>
                    </select>
                </div>
            </div>
            <div className='jordan-img'></div>

        </div>
        </div>
    )
}