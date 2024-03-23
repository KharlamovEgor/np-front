import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

export interface CardImgProps
	extends DetailedHTMLProps<
		ImgHTMLAttributes<HTMLImageElement>,
		HTMLImageElement
	> {}
