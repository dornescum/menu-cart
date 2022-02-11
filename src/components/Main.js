import React from 'react';
import Product from './Product';

export default function Main(props) {
	const { products, onAdd } = props;
	return (
		<main className="basis-1 lg:basis-3/4">
			<h2>Products</h2>
			<div className=" flex flex-wrap gap-2 mx-0 justify-center items-center mb-20">
				{products.map((product) => (
					<Product key={product.id} product={product} onAdd={onAdd}></Product>
				))}
			</div>
		</main>
	);
}
