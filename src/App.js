import {useResultContext} from "./context/ProductsContextProvider";
import Basket from "./components/Basket";
import Main from "./components/Main";
import Header from "./components/UI/Header";


function App() {
    const {products, onAdd, onRemove, cartItems, isLoading} =useResultContext();
    // console.log(products);
  return (
    <div className="relative  mx-2 font-dosis">

		<Header countCartItems={cartItems.length}/>
        <div className='flex flex-col md:flex-row justify-between'>
            <Main  products={products} onAdd={onAdd}/>
            <Basket  cartItems={cartItems}
                     onAdd={onAdd}
                     onRemove={onRemove}/>
        </div>


    </div>
  );
}

export default App;
