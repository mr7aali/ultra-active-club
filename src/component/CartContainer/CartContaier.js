
import Cart from '../Cart/Cart';


import './CartCOntainer.css';

const CartContaier = ({details,ExercisTime}) => {

    return (
        <div className='full-container'>
            <h1> Mainhealthtain-Your-Health </h1>
            <h2>Select today’s exercise</h2>
            <div className='all-cart'>
            {
              details.map(detail=><Cart
               key={detail.id}
               detail={detail}
               ExercisTime={ExercisTime}
              ></Cart>)
            }
            </div>
        </div>
    );
};

export default CartContaier;