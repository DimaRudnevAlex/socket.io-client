import React, {memo} from 'react';
import UiButton from "../../ui/UiButton/UiButton.jsx";

import cl from "./style.module.scss"
import {useNavigate} from "react-router";

const ChatHeader = memo(({room, usersCount, socket, username}) => {
	const navigate = useNavigate()

	const leaveRoom = () => {
		socket.emit('leaveRoom', {username, room});
		navigate("/")
	}


	return (
		<header className={cl.header}>
			<div className={cl.wrap}>
				<h3 className={cl.title}>{room}</h3>
				<span className={cl.info}>{usersCount} Пользователя</span>
			</div>
			<UiButton text="Покинуть комнату"
			          className={cl.button}
			          onClick={leaveRoom}/>
		</header>
	);
});

export default ChatHeader;