import React from 'react';

import cl from "./style.module.scss"
import {clsx} from "clsx";

const UiButton = ({text, variant, className, onClick = null}) => {
	const inputClassName = clsx(
		{
			main: cl.main,
			secondary: cl.secondary,
		}[variant]
	);
	return (
		<button onClick={onClick}
		        className={clsx(inputClassName, className, cl.button)}>
			{text}
		</button>
	);
};

export default UiButton;