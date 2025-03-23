import React, {useEffect, useState} from 'react';
import io from 'socket.io-client';
import {useSearchParams} from "react-router";
import ChatHeader from "../../components/chat/chat-header/chat-header.jsx";
import cl from "./style.module.scss"
import ChatMain from "../../components/chat/chat-main/chat-main.jsx";
import ChatFooter from "../../components/chat/chat-footer/chat-footer.jsx";

const socket = io.connect('https://rudchat.onrender.com');

const ChatPage = () => {
	const [searchParams] = useSearchParams()
	const [messages, setMessages] = useState([])
	const [usersCount, setUsersCount] = useState(0)

	const username = searchParams.get("username")
	const room = searchParams.get("room")


	useEffect(() => {
		const data = {
			username,
			room,
		}
		socket.emit('join', data);
	}, [])
	useEffect(() => {
		socket.on("message", (data) => {
			setMessages(prev => [...prev, data])
		})
	}, []);
	useEffect(() => {
		socket.on("joinRoom", (data) => {
			setUsersCount(data.usersCount)
		})
	}, []);

	return (
		<div className={cl.container}>
			<div className={cl.body}>
				<ChatHeader room={room}
				            usersCount={usersCount}
				            socket={socket}
				            username={username}/>
				<ChatMain username={username}
				          messages={messages}/>
				<ChatFooter socket={socket}
				            username={username}
				            room={room}/>
			</div>

		</div>
	);
};

export default ChatPage;