import React, {memo} from 'react';
import EmojiPicker from "emoji-picker-react";

import cl from "./style.module.scss"

const EmojiPickerMemo = memo(({isOpen, onEmojiClick}) => {
	return (
		isOpen && (<div className={cl.emojis}>
			<EmojiPicker onEmojiClick={onEmojiClick}/>
		</div>)
	);
});

export default EmojiPickerMemo;