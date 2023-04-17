import { ReactElement, createContext, useEffect, useState } from "react";

export type ProductType = {
  sku: string;
  name: string;
  price: number;
};

//if you want to fetch and use json-server
// const initState: ProductType[] = [];

const initState: ProductType[] = [
  {
    sku: "item0001",
    name: "Widget",
    price: 9.99,
  },
  {
    sku: "item0002",
    name: "Premium Widget",
    price: 19.99,
  },
  {
    sku: "item0003",
    name: "Deluxe Widget",
    price: 29.99,
  },
];

export type UseProductsContextType = { products: ProductType[] };

// initial state

const initContextState: UseProductsContextType = { products: [] };

// create context

const ProductsContext = createContext<UseProductsContextType>(initContextState);

// children type

type ChildrenType = {
  children?: ReactElement | ReactElement[];
};

// Provider function
export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initState);

  // fetch data

  // useEffect(() => {
  //   const fetchProducts = async (): Promise<ProductType[]> => {
  //     const data = await fetch("http://localhost:3500/products")
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .catch((err) => {
  //         if (err instanceof Error) console.log(err.message);
  //       });

  //     return data;
  //   };

  //   fetchProducts().then((products) => setProducts(products));
  // }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
