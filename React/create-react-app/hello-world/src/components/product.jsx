import {Component} from 'react';
import ProductContext from '../context/products';

class  Product extends Component {
   static contextType = ProductContext;
    render() { 
        const {productName} = this.props
        return (
            <div>
            <span className='m-2 text-info'>{productName}</span>
            <span className='m-2 badge bg-primary'>{this.format()}</span>
            <button onClick={this.handleIncrement} className='m-2 btn btn-success'>+</button>
            <button onClick={this.handleDecrement} className='m-2 btn btn-warning'>-</button>
            <button onClick={this.handleDelete} className='m-2 btn btn-danger'>delete</button>
            </div>
        );
    }
    format=()=>{
        if(this.props.count === 0){
            return 'zero';
        }else{
            return this.props.count ;
        }
    }

    handleIncrement = () =>{
      this.context.onIncrement(this.props.id);
    }

    handleDecrement = () =>{
        this.context.onDecrement(this.props.id);
    }

    handleDelete = () =>{
       this.context.onDelete(this.props.id);
    }
}
 
export default Product;