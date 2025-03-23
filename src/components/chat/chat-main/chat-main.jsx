import React from 'react';
import cl from "./style.module.scss"

const ChatMain = ({messages, username}) => {
	return (
		<main className={cl.main}>
			{messages.map((message, i) => {
				const issMe = message.username.trim().toLowerCase() === username.trim().toLowerCase()
				const className = issMe ? cl.messageSender : cl.messageRecipient
				return (
					<div key={i}
					     className={className}>
						<p>{issMe ? "Вы:" : `${message.username}:`}</p>
						<div>
							<p>{message.message}</p>
						</div>
					</div>
				)
			})
			}
		</main>
	);
};

export default ChatMain;
