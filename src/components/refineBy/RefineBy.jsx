import AddIcon from '@mui/icons-material/Add';
import './RefineBy.css';

export const RefineBy = () => {
    return (
        <aside className='refine-by'>
            <h3>REFINE BY</h3>
            <div className='filters'>
                <div className="category filter">
                    <p>CATEGORY</p>
                    <AddIcon />
                </div>
                <div className="brand filter">
                    <p>BRAND</p>
                    <AddIcon />
                </div>
                <div className="size filter">
                    <p>SIZE</p>
                    <AddIcon />
                </div>
                <div className="price filter">
                    <p>PRICE</p>
                    <AddIcon />
                </div>
            </div>
        </aside>
    )
}