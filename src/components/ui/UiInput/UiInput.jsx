import React, {memo} from 'react';

import cl from "./style.module.scss"
import {clsx} from "clsx";

const UiInput = memo(({id, text, variant, value, onChange}) => {
	const inputClassName = clsx(
		{
			main: cl.main,
			secondary: cl.secondary,
		}[variant]
	);

	return (
		<label className={cl.label}
		       htmlFor={id}>
			<input className={clsx(cl.input, inputClassName)}
			       type="text"
			       name={id}
			       id={id}
			       value={value}
			       onChange={onChange}
			       placeholder={text}
			       autoComplete="off"
			       required/>
		</label>
	);
});

export default UiInput;