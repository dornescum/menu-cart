import React from 'react';
import Button from "./UI/Button";

export default function Product(props) {
	const { product, onAdd } = props;
	return (
		<div className='flex flex-col justify-around bg-slate-100 w-full md:w-80 md:ml-2 lg:w-64  items-center
		rounded-md shadow-md  mt-16 md:mt-20  h-96 md:h-80 lg:h-96'>
			<img className="object-cover h-48 lg:h-36 w-full rounded-tl rounded-tr" src={product.img} alt={product.name} />
			<h3 className='px-1 py-4 md:py-1'>{product.title}</h3>
			<div className=' px-4 md:mb-2'>
				{/*<p>{product.title}</p>*/}
				<ul className='flex  py-4 md:py-1'>
					<li className='mx-8'><a href="/">info</a></li>
					<li className='mx-8'>{product.price} &euro;</li>
				</ul>

			</div>
			<div className='p-1  flex justify-center items-center'>
				{/*<button onClick={() => onAdd(product)} className=''>Add To Cart</button>*/}
				<Button onClick={() => onAdd(product)}>Add to cart</Button>
			</div>
		</div>
	);
}
