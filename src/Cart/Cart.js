import React, {Component} from 'react';
import {Navigator} from 'react-native';

import CartView from './CartScreen';

class Cart extends Component {
  render() {
    const {cartArray} = this.props;
    return (
      <Navigator
        initialRoute={{name: 'CartView'}}
        renderScene={(route, navigator) => {
          switch (route.name) {
            case 'CART_VIEW':
              return (
                <CartView
                  navigator={navigator}
                  cartArray={cartArray}></CartView>
              );
            default:
              return <CartView navigator={navigator}></CartView>;
          }
        }}></Navigator>
    );
  }
}
export default Cart;
