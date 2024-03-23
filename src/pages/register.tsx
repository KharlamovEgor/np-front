import { Button, Input } from '@/components';
import { Card } from '@/components/Card/Card';
import { User } from '@/interfaces/User.interface';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import styles from './register.module.css';

export default function RegisterPage() {
	const {
		reset,
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
			nickname: '',
			firstname: '',
			lastname: '',
			password: '',
		},
	});

	const onSubmit = async (data: User) => {
		console.log(data);
		await axios.post(
			`http://${process.env.NEXT_PUBLIC_API_HOST}:${process.env.NEXT_PUBLIC_API_PORT}/register`,
			data,
		);
		reset();
	};

	return (
		<div className={styles.container}>
			<div className={styles.register}>
				<h3>Sign up to NP</h3>
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<Input
						type="email"
						autoComplete="off"
						placeholder="email"
						{...register('email', { required: true })}
					/>
					<Input
						type="text"
						autoComplete="off"
						placeholder="nickname"
						{...register('nickname', { required: true })}
					/>
					<Input
						type="text"
						autoComplete="off"
						placeholder="fistname"
						{...register('firstname', { required: true })}
					/>
					<Input
						type="text"
						autoComplete="off"
						placeholder="lastname"
						{...register('lastname', { required: true })}
					/>
					<Input
						type="password"
						autoComplete="off"
						placeholder="password"
						{...register('password', { required: true })}
					/>
					<Button type="submit">Sign up</Button>
				</form>
			</div>
			<div className={styles.ad}>
				<h3>Our advantages</h3>
				<div className="flex">
					<Card>
						<Card.Img src='/ruble.png' />
					</Card>

				</div>
			</div>
		</div>
	);
}
