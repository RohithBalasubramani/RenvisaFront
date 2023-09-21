const INIT_STATE = {
  carts: [],
};

export const cartreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      const itemIndex = state.carts.findIndex(
        (item) => item._id === action.payload._id
      );

      if (itemIndex >= 0) {
        const updatedCart = state.carts.map((item, index) => {
          if (index === itemIndex) {
            return {
              ...item,
              qnty: item.qnty + 1,
            };
          }
          return item;
        });

        return {
          ...state,
          carts: updatedCart,
        };
      } else {
        const temp = { ...action.payload };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }

    case "RMV_CART":
      const updatedCart = state.carts.filter(
        (item) => item._id !== action.payload
      );
      return {
        ...state,
        carts: updatedCart,
      };

    case "RMV_ONE":
      const itemIndexDec = state.carts.findIndex(
        (item) => item._id === action.payload._id
      );

      if (itemIndexDec >= 0 && state.carts[itemIndexDec].qnty > 1) {
        const updatedCart = state.carts.map((item, index) => {
          if (index === itemIndexDec) {
            return {
              ...item,
              qnty: item.qnty - 1,
            };
          }
          return item;
        });

        return {
          ...state,
          carts: updatedCart,
        };
      } else {
        const updatedCart = state.carts.filter(
          (item) => item._id !== action.payload._id
        );

        return {
          ...state,
          carts: updatedCart,
        };
      }

    default:
      return state;
  }
};
