import React from 'react';
import {Route, Routes} from "react-router";
import HomePage from "../pages/home-page/home-page.jsx";
import ChatPage from "../pages/chat-page/chat-page.jsx";

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/"
			       element={<HomePage/>}/>
			<Route path="/chat"
			       element={<ChatPage/>}/>
		</Routes>
	);
};

export default AppRouter;