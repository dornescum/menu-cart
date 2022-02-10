import React from 'react';

export default function Header(props) {
	return (
		<header className="block bg-stone-50 flex w-full fixed justify-between p-4">
			<div>
				<a href="/">
					<h1 className='text-2xl font-bold'>Menu</h1>
				</a>
			</div>
			<div>
				<a href="#/cart" className='mx-4 cursor-pointer'>
					Cart{' '}
					{props.countCartItems ? (
						<button className="bg-red-300 px-2 rounded-full cursor-pointer">{props.countCartItems}</button>
					) : (
						''
					)}
				</a>{' '}
				<a href="#/signin" className='mx-4 cursor-pointer'> Sign In</a>
			</div>
		</header>
	);
}
