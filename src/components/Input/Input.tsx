import { InputProps } from './Input.props';
import styles from './Input.module.css';
import { ForwardedRef, forwardRef } from 'react';

export const Input = forwardRef(
	(
		{ ...props }: InputProps,
		ref: ForwardedRef<HTMLInputElement>,
	): JSX.Element => {
		return <input className={styles.input} {...props} ref={ref} />;
	},
);
