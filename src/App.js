import {useResultContext} from "./context/ProductsContextProvider";
import Basket from "./components/Basket";
import Main from "./components/Main";
import Header from "./components/UI/Header";
import {BrowserRouter, Switch, Route, Router} from "react-router-dom";
import CartDetails from "./components/CartDetails/CartDetails";
import SignIn from "./components/SignIn";
import Footer from "./components/UI/Footer";


function App() {
	const {products, onAdd, onRemove, cartItems} = useResultContext();


	return (
		<div className="relative  mx-2 font-dosis min-h-screen">
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
					<SignIn/>
				</Route>
				<Footer/>
			</BrowserRouter>
		</div>
	);
}

export default App;
