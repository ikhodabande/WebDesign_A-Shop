import Navbar from './navbar';
import Products from './products';
import productContext from '../../context/products';
import { useState } from 'react';


const App = () => {
    const [products,setProducts]= useState([
        {id:1 , count:1 , productName :'laptop'},
        {id:2 , count:4 , productName :'phone'},
        {id:3 , count:5 , productName :'airpod'},
    ])
    return (
        <productContext.Provider
        value={{
             products:products,
             onReset:handelReset,
             onIncrement:handelIecrement,
             onDecrement:handelDecrement ,
             onDelete:handelDelete,
            }}
        >
         <Navbar />
         <Products />  
        </productContext.Provider>
      );

      function handelReset(){
        const newProducts = products.map(p=>{
           p.count = 0;
           return p;
         }); 
         setProducts(newProducts);
       }
   
       function handelDelete(productId){
          const newProducts = products.filter(p => p.id !== productId)
          setProducts(newProducts)
       }
   
       function handelIecrement(productId){
           const newProducts = [...products];
           const index = newProducts.findIndex(p=> p.id === productId);
           newProducts[index].count +=1;
           setProducts(newProducts);
       }
   
       function handelDecrement(productId){
           const newProducts = [...products];
           const index = newProducts.findIndex(p=> p.id === productId);
           newProducts[index].count -=1;
           setProducts(newProducts);
       }
   
}
 
export default App;