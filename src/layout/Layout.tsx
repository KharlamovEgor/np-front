import { ReactNode } from 'react';

interface LayoutProps {
	children: ReactNode;
}

export function Layout({ children }: LayoutProps): JSX.Element {
	return (
		<div>
			<nav></nav>
			{children}
		</div>
	);
}
