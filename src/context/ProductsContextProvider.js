import React, {createContext, useContext, useState, useEffect} from "react";

const ProductContext = createContext();

export const ProductContextProvider =({children})=>{
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const [showCart, setShowCart]=useState(false)


	// console.log(products);

	useEffect(()=>{
		const getData =async ()=>{
			const res = await fetch('https://food-nodejs.herokuapp.com/api/food');
			const data = await res.json();
			// console.log(data)
			setProducts(data)
		}
		getData()
	},[])

	const onAdd = (product) => {
		const exist = cartItems.find((x) => x.id === product.id);
		if (exist) {
			setCartItems(
				cartItems.map((x) =>
					x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
				)
			);
		} else {
			setCartItems([...cartItems, { ...product, qty: 1 }]);
		}
	};
	const onRemove = (product) => {
		const exist = cartItems.find((x) => x.id === product.id);
		if (exist.qty === 1) {
			setCartItems(cartItems.filter((x) => x.id !== product.id));
		} else {
			setCartItems(
				cartItems.map((x) =>
					x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
				)
			);
		}
	};


	return <ProductContext.Provider value={{products,cartItems, onAdd, onRemove, isLoading, showCart, setShowCart}}>
		{children}
	</ProductContext.Provider>
}
export const useResultContext = () => useContext(ProductContext);
