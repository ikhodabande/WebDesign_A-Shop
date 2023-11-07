import productContext from '../../context/products';
import { useContext } from 'react';


const Navbar = () => {
    const productsContext = useContext(productContext)
    return (
        <nav className='navbar navbar-light bg-light'>
             <div className="container-fluid">
                 <a href="./#" className='navbar-brand'>
                     Navbar {calculateSum()}
                 </a>
             </div>
         </nav>
     );
     function calculateSum(){
        let sum = 0;
        productsContext.products.forEach(p=> {
          sum += p.count;  
        })
        return sum;
    }
}
 
export default Navbar;