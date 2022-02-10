import React from 'react';
import Product from './Product';

export default function Main(props) {
	const { products, onAdd } = props;
	return (
		<main className="basis-1 md:basis-3/4">
			<h2>Products</h2>
			{/*md:w-8/12 lg:w-9/12*/}
			<div className=" flex flex-wrap gap-2 mx-0 justify-center items-center">
				{products.map((product) => (
					<Product key={product.id} product={product} onAdd={onAdd}></Product>
				))}
			</div>
		</main>
	);
}
