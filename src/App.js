import React from 'react';
import PropTypes from 'prop-types';

function Coffee(props) {
  return(
    <div>
      <h3>You ordered an '{props.cof}' and the price is ${props.price}</h3>
      <img src={props.picture} width="300px" height="300px" alt={props.cof}/>
    </div>
  );
}

const OrderList = [
  {
    id:1,
    cof: 'Americano',
    price: 2000,
    picture: 'https://www.paris.co.kr/wp-content/uploads/%E1%84%87%E1%85%B5%E1%86%A8%E1%84%8B%E1%85%A1%E1%84%8B%E1%85%A1-%E1%84%8B%E1%85%A1%E1%84%83%E1%85%A1%E1%84%8C%E1%85%B5%E1%84%8B%E1%85%A9%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9%E1%84%92%E1%85%A1%E1%86%B8%E1%84%89%E1%85%A5%E1%86%BC12801-1280x1280.jpg'
  },
  {
    id:2,
    cof: 'Cappuccino',
    price: 3000,
    picture: 'https://t1.daumcdn.net/cfile/blog/99C2834B5C5941B229'
  },
  {
    id:3,
    cof: 'Ice-tea',
    price: 2000,
    picture: 'https://lh3.googleusercontent.com/proxy/kgMhA-7lNeZnSwh3JJyC4h3eQ-R-N1S4vkmuKIMe_cLN6H-ziW9e9Ns3ceiakFJX85bOmSfnEXgBT5b_kFvFvPU44YOYDfnB9YWcoseXV70n_304eZ0vq8e8Dawt3M31VoJMptMHWnOtd0lQiec33ibp5PyMOnuQGI0'
  }
];

function App() {
  return (
    <div>      
      {
        OrderList.map(order => <Coffee key = {order.id} cof={order.cof} price={order.price} picture={order.picture}/>)
      }
    </div>
  );
}

Coffee.propTypes = {
  cof: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
}

export default App;