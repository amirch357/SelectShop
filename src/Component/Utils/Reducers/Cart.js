
const initialState = {
    cartItems: []
   

  };
 
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        
        const items = {...action.payload,productQuantity:1}

        const isItemExist = state.cartItems.find(i => i.id === items.id)

        if (isItemExist) {
            return {
                ...state,
                cartItems: state.cartItems.map(i => i.id === isItemExist.id ? items : i)
            }
        } else {
         
            return {
                
                cartItems: [...state.cartItems,items]
              
            }
         
        }
        
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cartItems: state.cartItems.filter(item => item.id !== action.payload),
        };
    
        case 'INCREASE_QUANTITY':
          
          return {
            ...state,
            cartItems: state.cartItems.map(item => {
               
              if (item.id === action.payload) {
               
                const updatedQuantity = item.productQuantity +1;
                
                const updatedPrice = parseFloat(item.Price) * updatedQuantity;

                return {
                  ...item,
                  productQuantity: updatedQuantity,
                  totalPrice: updatedPrice,

                };
                
              }
              return item;
            }),
           
            
          };
        case 'DECREASE_QUANTITY':
          return {
            ...state,
            cartItems: state.cartItems.map(item => {
              if (item.id === action.payload && item.productQuantity > 1) {
                const updatedQuantity = item.productQuantity - 1;
                const updatedPrice = parseFloat(item.price) * updatedQuantity;
                return {
                  ...item,
                  productQuantity: updatedQuantity,
                  totalPrice: updatedPrice ,
                };
              }
              return item;
            }),
           

          };
          case 'CLEAR_CART':
            console.log("clearrrrrrrr")
            return{
              ...state,
              cartItems:[]
            };
        default:
          return state;
    }
    
  };
  
  export default cartReducer;
  