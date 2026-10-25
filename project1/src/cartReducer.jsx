export const initialCartState = {
  cart: [],
};

export function cartReducer(state, action) {
  switch (action.type) {
    // 1. ADD ITEM TO CART
    case "ADD_TO_CART": {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  quantity: Math.min(
                    item.quantity + 1,
                    item.stock
                  ),
                }
              : item
          ),
        };
      }

      return {
        ...state,
        cart: [
          ...state.cart,
          { ...action.payload, quantity: 1 },
        ],
      };
    }

    // 2. INCREASE QUANTITY
    case "INCREASE": {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: Math.min(
                  item.quantity + 1,
                  item.stock
                ),
              }
            : item
        ),
      };
    }

    // 3. DECREASE QUANTITY
    case "DECREASE": {
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0),
      };
    }

    // 4. REMOVE ITEM COMPLETELY
    case "REMOVE": {
      return {
        ...state,
        cart: state.cart.filter(
          (item) => item.id !== action.payload
        ),
      };
    }

    // 5. CLEAR ENTIRE CART
    case "CLEAR": {
      return {
        ...state,
        cart: [],
      };
    }

    default:
      return state;
  }
}