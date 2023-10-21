import productContext from '../../context/products';
import { useContext } from 'react';
import Product from './product';

const Products = () => {
const productsContext = useContext(productContext)
    return ( 
        <>
            <button onClick={productsContext.onReset} className='btn btn-primary'>Reset</button>
            {productsContext.products.map((p,index)=>(
                <Product id={p.id} key={index} productName={p.productName} count={p.count} />
            ))}
            </>
     );
     
     

     
}
 
export default Products;