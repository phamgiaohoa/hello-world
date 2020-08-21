import {ADD_ITEM_TO_CART, DELETE_ITEM_TO_CART, RESET_CART, ADD_CART_FROM_LOCAL} from './../type/action_type';
import AsyncStorage from '@react-native-community/async-storage';

export const addItemToCardAction = (item, currentCart) => {
    let checkExist = currentCart.cart.filter((value) => value.Id == item.Id);
    let newCart = currentCart.cart;
    if(checkExist.length == 0 ) {
        newCart.push({
            ...item,
            number : 1
        });  
    }else {
        newCart = currentCart.cart.map((value) => {
            if(value.Id == item.Id){
                return {
                    ...value,
                    number : value.number + 1
                }
            }

            return {
                ...value,
            }
        })
    }
    AsyncStorage.setItem('cart',JSON.stringify(newCart)).then();
    return {
        type : ADD_ITEM_TO_CART,
        payload : newCart
    }
}

export const deleteItemToCardAction = (item, currentCart) => {
    let newCart = currentCart.cart.filter((value) => value.Id != item.Id);
    AsyncStorage.setItem('cart',JSON.stringify(newCart)).then();
    return {
        type : DELETE_ITEM_TO_CART,
        payload : newCart
    }
}

export const minusItemToCardAction = (item, currentCart) => {
    let check = false;
    let newCart = currentCart.cart.map((value) => {
        if(value.Id == item.Id){
            if(value.number == 1) {
                check = true; 
            }else {
                return {
                    ...value,
                    number : value.number - 1
                }
            }
        }


        return {
            ...value,
        }
    });

    if(check) {
        newCart = currentCart.cart.filter((value) => value.Id != item.Id);
    }

    AsyncStorage.setItem('cart',JSON.stringify(newCart)).then();

    return {
        type : DELETE_ITEM_TO_CART,
        payload : newCart
    }
}


export const resetCart = () => {
    let array = [];
    AsyncStorage.setItem('cart',JSON.stringify(array)).then();
    return {
        type : RESET_CART,
        payload : []
    }
}

export const addCartFromLocal = () => {
    console.log('cart');
    
    return (dispatch) => {
        AsyncStorage.getItem('cart').then((data) => {
           let newCart = [];
           if(data) {
                newCart = JSON.parse(data);
           }
           
            
            dispatch({
                type : ADD_CART_FROM_LOCAL,
                payload : newCart
            })
        })
   }
}