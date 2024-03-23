import { CardImgProps } from './CardImg.props';
import cn from 'classnames';
import styles from './CardImg.module.css';

export function CardImg({ className, ...props }: CardImgProps): JSX.Element {
	return (
		<>
			<img className={cn(styles.img, className)} {...props} />
		</>
	);
}
