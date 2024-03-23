import { CardContent } from "../CardContent/CardContent";
import { CardContentProps } from "../CardContent/CardContent.props";
import { CardImgProps } from "../CardImg/CardImg.props";
import { CardProps } from "./Card.props";
import styles from './Card.module.css'
import cn from 'classnames'

interface CardComposition {
	Content: ({ }: CardContentProps) => JSX.Element
	Img: ({ }: CardImgProps) => JSX.Element
}

export const Card: (({ }: CardProps) => JSX.Element) & CardComposition = ({ className, children }: CardProps): JSX.Element => {
	return <div className={cn(styles.card, className)}>
		{children}
	</div>
}

Card.Content = CardContent;
Card.Img = CardContent;

