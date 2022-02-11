import React from 'react';
import {NavLink} from "react-router-dom";

export default function Header({countCartItems}) {


	return (
		<header className="block bg-stone-50 z-10 flex w-full fixed justify-between p-4">
			<div>
				<NavLink to="/">
					<h1 className="text-2xl font-bold">Menu</h1>
				</NavLink>
			</div>
			<div>
				<NavLink to="/CartDetails" className="mx-4 cursor-pointer">
					Cart{' '}
					{countCartItems ? (
						// "bg-red-300 px-2 rounded-full cursor-pointer"
						// {`${showCart ? 'md:block' : 'hidden'} bg-red-300 px-2 rounded-full cursor-pointer`}
						<button
							className="bg-red-300 px-2 rounded-full cursor-pointer">{countCartItems}</button>
					) : (
						''
					)}
				</NavLink>{' '}
				<NavLink to="/SignIn" className="mx-4 cursor-pointer"> Sign In</NavLink>
			</div>
		</header>
	);
}
