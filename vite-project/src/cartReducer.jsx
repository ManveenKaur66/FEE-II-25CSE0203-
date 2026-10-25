
export const initialState = [];

export function cartReducer(state, action) {
  switch (action.type) {
    // 1. Add item to cart
    case "ADD_ITEM": {
      const existingItem = state.find(
        item => item.id === action.payload.id
      );

      if (existingItem) {
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...state, { ...action.payload, quantity: 1 }];
    }

    // 2. Increase item quantity
    case "INCREASE": {
      return state.map(item =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    // 3. Decrease item quantity
    case "DECREASE": {
      return state
        .map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0);
    }

    // 4. Remove item completely
    case "REMOVE_ITEM": {
      return state.filter(
        item => item.id !== action.payload
      );
    }

    // 5. Clear the entire cart
    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
}
