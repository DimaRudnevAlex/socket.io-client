import React, {useCallback, useState} from 'react';

import UiInput from "../../ui/UiInput/UiInput.jsx";
import UiButton from "../../ui/UiButton/UiButton.jsx";
import EmojiPickerMemo from "../EmojiPicker/EmojiPickerMemo.jsx";

import emojiSrc from "../images/emoji.svg";

import cl from "./style.module.scss"

const ChatFooter = ({socket, username, room}) => {
	const [isOpen, setIsOpen] = useState(false)
	const [message, setMessage] = useState("")

	const onEmojiClick = ({emoji}) => {
		setMessage(prev => `${prev}${emoji}`);
	}

	const onChangeInput = useCallback((e) => {
		setMessage(e.target.value)
	}, [setMessage])

	const sendMessage = () => {
		if (!message) return;

		socket.emit("sendMessage", {
			username,
			room,
			message,
		})
		setMessage("")
	}

	return (
		<div className={cl.footer}>
			<UiInput id="message"
			         text="Введите сообщение"
			         variant="main"
			         value={message}
			         onChange={onChangeInput}/>
			<div className={cl.emoji}>
				<img src={emojiSrc}
				     alt="emoji"
				     onClick={() => setIsOpen(!isOpen)}/>
				<EmojiPickerMemo isOpen={isOpen}
				                 onEmojiClick={onEmojiClick}/>
			</div>
			<UiButton text="Отправить"
			          variant="main"
			          onClick={sendMessage}/>
		</div>
	);
};

export default ChatFooter;