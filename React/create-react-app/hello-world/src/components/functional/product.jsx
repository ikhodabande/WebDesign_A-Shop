import productContext from '../../context/products';
import { useContext } from 'react';

const Product = ({productName , id ,count}) => {
    const productsContext = useContext(productContext)
    
    return (
        <div>
        <span className='m-2 text-info'>{productName}</span>
        <span className='m-2 badge bg-primary'>{format()}</span>
        <button onClick={handelIncrement} className='m-2 btn btn-success'>+</button>
        <button onClick={handelDecrement} className='m-2 btn btn-warning'>-</button>
        <button onClick={handelDelete} className='m-2 btn btn-danger'>delete</button>
        </div>
    );
    
    function format(){
        if(count === 0){
            return 'zero';
        }else{
            return count ;
        }
    }

    function handelIncrement (){
        productsContext.onIncrement(id)
    }

    function handelDecrement (){
        productsContext.onDecrement(id)
    }

    function handelDelete (){
        productsContext.onDelete(id);
    }
}
 
export default Product;