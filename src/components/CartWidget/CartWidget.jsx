import './CartWidget.css'
import cart from '../../assets/cart-shopping-solid.svg'

const CartWidget = () => {
    return (
        <div className='cart'>
            <img className='cartImg' src={cart} alt="Cart" /> <span>5</span>
        </div>
    )
}

export default CartWidget