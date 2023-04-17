import { ReactElement, createContext, useMemo, useReducer } from "react";

export type CartItemType = {
  sku: string;
  name: string;
  price: number;
  qty: number;
};

type CartStateType = {
  cart: CartItemType[];
};

// initial state
const initCartState: CartStateType = { cart: [] };

// reducer type
const REDUCER_ACTION_TYPE = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  QUANTITY: "QUANTITY",
  SUBMIT: "SUBMIT",
};

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

export type ReducerAction = {
  type: string;
  payload?: CartItemType;
};

const reducer = (
  state: CartStateType,
  action: ReducerAction
): CartStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD: {
      if (!action.payload) {
        throw new Error("action.payload missing in ADD action");
      }

      const { sku, name, price } = action.payload;

      // filter cart items  item.sku !=== sku
      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.sku !== sku
      );

      // find items that exist
      const itemExist: CartItemType | undefined = state.cart.find(
        (item) => item.sku === sku
      );

      // add qty
      const qty: number = itemExist ? itemExist.qty + 1 : 1;

      return { ...state, cart: [...filteredCart, { sku, name, price, qty }] };
    }
    case REDUCER_ACTION_TYPE.REMOVE: {
      if (!action.payload) {
        throw new Error("action.payload missing in REMOVE action");
      }
      const { sku } = action.payload;
      // filter cart items  item.sku !=== sku
      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.sku !== sku
      );

      return { ...state, cart: [...filteredCart] };
    }
    case REDUCER_ACTION_TYPE.QUANTITY: {
      if (!action.payload) {
        throw new Error("action.payload missing in QUANTITY action");
      }

      const { sku, qty } = action.payload;

      // find items that exist
      const itemExist: CartItemType | undefined = state.cart.find(
        (item) => item.sku === sku
      );

      if (!itemExist) {
        throw new Error("Item must exist in order to update quantitty");
      }

      // update qty
      const updatedItem: CartItemType = { ...itemExist, qty };

      // filter cart items  item.sku !=== sku
      const filteredCart: CartItemType[] = state.cart.filter(
        (item) => item.sku !== sku
      );

      return { ...state, cart: [...filteredCart, updatedItem] };
    }
    case REDUCER_ACTION_TYPE.SUBMIT: {
      return { ...state, cart: [] };
    }
    default:
      throw new Error("Unidentified reducer action type");
  }
};

const useCartContext = (initCartState: CartStateType) => {
  const [state, dispatch] = useReducer(reducer, initCartState);

  const REDUCER_ACTIONS = useMemo(() => {
    return REDUCER_ACTION_TYPE;
  }, []);

  // count total items
  const totalItems: number = state.cart.reduce((previousValue, cartItem) => {
    return previousValue + cartItem.qty;
  }, 0);

  // total price in International currency format
  const totalPrice = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(
    state.cart.reduce((previousValue, cartItem) => {
      return previousValue + cartItem.qty * cartItem.price;
    }, 0)
  );

  // sort cart in order

  const cart = state.cart.sort((a, b) => {
    // convert string to number
    const itemA = Number(a.sku.slice(-4));
    const itemB = Number(b.sku.slice(-4));

    return itemA - itemB;
  });

  return { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart };
};

export type UseCartContextType = ReturnType<typeof useCartContext>;

const initCartContextState: UseCartContextType = {
  dispatch: () => {},
  REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
  totalItems: 0,
  totalPrice: "",
  cart: [],
};

// create context and provider
export const CartContext =
  createContext<UseCartContextType>(initCartContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const CartProvider = ({ children }: ChildrenType): ReactElement => {
  return (
    <CartContext.Provider value={useCartContext(initCartState)}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
