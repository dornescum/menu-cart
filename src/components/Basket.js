import React, {useState} from 'react';

const Basket = (props) => {
	const [showCart, setShowCart]=useState(false)
	const { cartItems, onAdd, onRemove } = props;
	const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
	console.log(typeof itemsPrice);
	const taxPrice = itemsPrice * 0.14;
	const shippingPrice = itemsPrice > 100 ? 0 : 20;
	const totalPrice = itemsPrice + taxPrice + shippingPrice;
	// lg:w-48 absolute top-10 right-10
	return (
		<aside className="basis-1 md:basis-1/4 px-0 pr-4 md:px-4 w-full md:w-80 lg:96
		bottom-0  md:top-8 md:right-8 fixed" id='basket'>
			{/**/}
			{/*<div className={`${showCart ? 'block': 'hidden'} mt-20 rounded-md bg-stone-100 py-4 px-2`}>*/}
			<div className='mt-20 rounded-md bg-stone-100 py-4 px-2 hidden md:block'>

				<h2 className='mt-4 mb-10 text-2xl font-bold'>Cart Items</h2>
				<div className=''>
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
				<div className='bg-stone-200 md:hidden flex justify-center items-center py-4'>
					<button onClick={()=>{setShowCart(!showCart)}} className='font-bold rounded-sm'>Show cart</button>
				</div>
		</aside>
	);
};

export default Basket;
