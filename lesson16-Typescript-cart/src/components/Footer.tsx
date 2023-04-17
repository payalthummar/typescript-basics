import useCart from "../hooks/useCart";

type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};
function Footer({ viewCart, setViewCart }: PropsType) {
  const { totalItems, totalPrice } = useCart();

  // copyright year every year update
  const year: number = new Date().getFullYear();

  const pageContent = viewCart ? (
    <p>Shopping Cart &copy; {year} </p>
  ) : (
    <>
      <p>Total Items: {totalItems} </p>
      <p>Total Price: {totalPrice} </p>
      <p>Shopping Cart: {totalItems} </p>
    </>
  );

  const content = <footer className="footer">{pageContent}</footer>;

  return content;
}

export default Footer;
