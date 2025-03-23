import React from 'react';
import cl from './style.module.scss'
import UiInput from "../../components/ui/UiInput/UiInput.jsx";
import UiButton from "../../components/ui/UiButton/UiButton.jsx";
import {useNavigate} from "react-router";

const HomePage = () => {
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		const {elements} = e.currentTarget;
		const username = elements.username.value.replaceAll(" ", "");
		const room = elements.room.value.replaceAll(" ", "");

		navigate(`/chat?username=${username}&room=${room}`);
	}

	return (
		<div className={cl.container}>
			<div className={cl.wrap}>
				<h1 className={cl.title}>Введите комнату и имя</h1>
				<form className={cl.form} onSubmit={handleSubmit}>
					<UiInput id="room" text="Комната" variant="secondary"/>
					<UiInput id="username" text="Имя" variant="secondary"/>
					<UiButton text="Войти" variant="secondary"/>
				</form>
			</div>
		</div>
	);
};

export default HomePage;