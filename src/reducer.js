/**Create the initialState */
/**
 * ban đầu basket chỉ là mảng rỗng
 */
export const initialState = {
  basket: [],
};

//Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => amount + item.price, 0);

/**
 * action: tượng trưng cho update, add, remove basket
 * khi nhấn nút 'add to basket' tại action.type sẽ nhận được case ADD_TO_BASKET và thực hiện lệnh
 * reducer sẽ luôn luôn lắng nghe và dispatch (cử đi) thực hiện 1 hành động (action) nào đó
 */
const reducer = (state, action) => {
  //   console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};

export default reducer;
