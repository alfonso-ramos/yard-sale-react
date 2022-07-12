import '../styles/components/OrderItem.scss'
import CloseIcon from '../assets/icons/icon_close.png'

const OrderItem = ({product}) => {
    return (
        <div className="OrderItem">
            <figure>
                <img
                    src={product.images[0]}
                    alt={product.title}
                />
            </figure>
            <p>{product.title}</p>
            <p>${product.price}</p>
            <img src={CloseIcon} alt="close" />
        </div>
    );
};

export default OrderItem;
