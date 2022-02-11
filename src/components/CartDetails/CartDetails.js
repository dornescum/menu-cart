import React from 'react';
import {useResultContext} from "../../context/ProductsContextProvider";

const CartDetails = () => {

	const {products, onAdd, onRemove, cartItems, isLoading, showCart, setShowCart} = useResultContext();


	console.log(cartItems);

	const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
	const taxPrice = itemsPrice * 0.09;
	const shippingPrice = itemsPrice > 100 ? 0 : 20;
	const totalPrice = itemsPrice + taxPrice + shippingPrice;

	return (
		<div className='pt-20 flex justify-center items-center'>


			<div className='mt-12 mx-1 md:mx-12 rounded-md bg-stone-100 py-4 px-2 w-full md:w-3/5'>

				<h2 className='my-4 text-2xl font-bold'>Cart Items</h2>
				<div className='' id='cart'>
					{cartItems.length === 0 && <div>Cart is empty</div>}
					{cartItems.map((item) => (
						<div key={item.id} className="row">
							<div className="text-md">{item.title}</div>
							<div className="flex justify-between">
								<div className='py-4'>
									<button onClick={() => onRemove(item)} className="bg-slate-100
							 px-2 py-1 hover:bg-gray-300 hover:shadow-2xl
			transition ease-out shadow-md mx-4 rounded-sm">
										-
									</button>
									<button onClick={() => onAdd(item)} className="bg-slate-100
							 px-2 py-1 hover:bg-gray-300 hover:shadow-2xl
			transition ease-out shadow-md mx-4 rounded-sm">
										+
									</button>
								</div>

								<div className="flex justify-center items-center mx-2 text-2xl">
									{item.qty} x {item.price} &euro;
								</div>
							</div>


						</div>
					))}

					{cartItems.length !== 0 && (
						<div className=''>
							<hr></hr>
							<div className="flex justify-between my-4">
								<div className="text-2xl">Items Price</div>
								<div className="text-2xl"> {itemsPrice.toFixed(2)} &euro;</div>
							</div>
							<div className="flex justify-between my-4">
								<div className="text-2xl">Tax Price</div>
								<div className="text-2xl"> {taxPrice.toFixed(2)} &euro;</div>
							</div>
							<div className="flex justify-between my-4">
								<div className="text-2xl">Shipping Price</div>
								<div className={`${shippingPrice ? 'text-red-900 font-bold':"font-bold"}`}>
									{shippingPrice.toFixed(2)} &euro;
								</div>
							</div>

							<div className="flex justify-between my-4">
								<div className="text-2xl">
									<strong>Total Price</strong>
								</div>
								<div className="text-2xl">
									<strong> {totalPrice.toFixed(2)} &euro;</strong>
								</div>
							</div>
							<hr />
							<div className="row">
								<button onClick={() => alert('Implement Checkout!')}>
									Checkout
								</button>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default CartDetails;
