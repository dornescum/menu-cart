import {useResultContext} from "./context/ProductsContextProvider";
import Basket from "./components/Basket";
import Main from "./components/Main";
import Header from "./components/UI/Header";
import {BrowserRouter, Switch, Route, Router} from "react-router-dom";
import CartDetails from "./components/CartDetails/CartDetails";
import SignIn from "./components/SignIn";


function App() {
	const {products, onAdd, onRemove, cartItems, isLoading, showCart, setShowCart} = useResultContext();


	return (
		<div className="relative  mx-2 font-dosis">
			{/*{showCart && <Header countCartItems={cartItems.length}/>}*/}
			{/*<Header countCartItems={cartItems.length}/>*/}
			{/*<nav>*/}
			{/*    <ul>*/}
			{/*        <li>Home</li>*/}
			{/*        <li onClick={()=>setShowCart(!showCart)}>{cartItems.length}</li>*/}
			{/*    </ul>*/}
			{/*</nav>*/}
			<BrowserRouter>
				<Header countCartItems={cartItems.length}/>
				<Route path="/" exact>
					<div className="flex flex-col md:flex-row justify-between">
						<Main products={products} onAdd={onAdd}/>
						<Basket cartItems={cartItems}
								onAdd={onAdd}
								onRemove={onRemove}/>
					</div>
				</Route>
				<Route path="/CartDetails" exact>
					<CartDetails/>
				</Route>
				<Route path="/SignIn" exact>
					<SignIn />
				</Route>

			</BrowserRouter>
			{/*<div className="flex flex-col md:flex-row justify-between">*/}
			{/*	<Main products={products} onAdd={onAdd}/>*/}
			{/*	<Basket cartItems={cartItems}*/}
			{/*			onAdd={onAdd}*/}
			{/*			onRemove={onRemove}/>*/}
			{/*</div>*/}


		</div>
	);
}

export default App;
