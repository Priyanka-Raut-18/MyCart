import React from "react";

class CartItem extends React.Component {

    constructor () {
        super();
        this.state={
            title: 'Dress',
            price: 999,
            quantity: 1,
            image: ''
        }
    }

    increaseQuantity = () => {
        console.log('this',this.state);

    }

    render(){
       
        const {title,price,quantity,image} = this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img  style={styles.image} src="" />

                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>{this.state.title}</div>
                    <div style={{color:'#777'}}>{price}</div>
                    <div style={{color:'#777'}}>{quantity}</div>
                    <div className="cart-item-actions">
                        <img 
                        className="action-icons"
                        alt="increase" 
                        onClick={this.increaseQuantity}
                        src="https://cdn-icons-png.flaticon.com/128/992/992651.png" />
                        <img 
                        className="action-icons"
                        alt="decrease" 
                        src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png" />
                        <img 
                        className="action-icons"
                        alt="delete" 
                        src="https://cdn-icons-png.flaticon.com/128/3096/3096687.png" />
                    </div>

                </div>

            </div>

            
        );      
    }
}


const styles={
    image : {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }

}

export default CartItem;