import React, { Component } from 'react';
import Profile from './comp/Profile';
import Chat from './comp/Chat';

class App extends Component {
	render() {
		return (
			<main>
				<div className="flex">
					<Chat />
					<Profile />
				</div>
			</main>
		);
	}
}

export default App;
