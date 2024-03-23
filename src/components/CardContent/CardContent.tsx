import styles from './Card.module.css';
import cn from 'classnames';
import { CardContentProps } from './CardContent.props';

export function CardContent({
	children,
	className,
	...props
}: CardContentProps): JSX.Element {
	return (
		<div className={cn(styles.content, className)} {...props}>
			{children}
		</div>
	);
}
