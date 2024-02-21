"user client"
import React from "react";
import { MenuApple } from "./menuComponentes/menuApple";
import { MenuMotorola } from "./menuComponentes/menuMotorola";
import { MenuSamsung } from "./menuComponentes/menuSamsung";
import { MenuXiaomi } from "./menuComponentes/menuXiaomi";
import { MenuTCL } from "./menuComponentes/menuTcl";

export const MenuLateral = () => {
	return (
		<div className='menu'>
			<div>
				<h2>Marca</h2>
				<a>Xiaomi</a>
				<a>Samsung</a>
				<a>Motorola</a>
				<a>Apple</a>
				<a>TCL</a>
			</div>
		</div>
	);
};
