import React, { Component } from 'react';
import mySocket from "socket.io-client";

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			chatMode: 0,
			userName: "",
			users: [],
			allChats: [],
		}
	}
	
	componentDidMount() {
		this.socket = mySocket("http://localhost:10001");
	}
	
	userNameUpdate = (e) => {
		this.setState({
			userName: e.target.value
		});
	}
	
	joinChat = () => {
		if (this.state.userName != "") {
			this.setState({
				chatMode: 1,
			});
			this.socket.emit("username", this.state.userName);

			this.socket.on("usersjoined", (data) => {
				this.setState({
					users: data,
				});
			});

			this.socket.on("msgsent", (data) => {
				this.setState({
					allChats: data,
				});
			});
		} else {
			alert("Enter your name");
		}
	}
	
	sendMsg = () => {
		var msg = this.state.userName + ": " + this.state.myMsg;
		
		this.socket.emit("sendMsg", msg);
	}
	
	handleUserName = (evt) => {
		this.setState({
			userName: evt.target.value,
		})
	}
	
	handleMyMsg = (evt) => {
		this.setState({
			myMsg: evt.target.value,
		})
	}
	
	render() {
		let chatComp = null;
		
		var curUsers = this.state.users.map((obj, i) => {
			var firstLetter = obj.charAt(0).toUpperCase();
			console.log("username: "+obj);
			
			return (
				<article key={i} className="chat-users-thumb flex">
					{firstLetter}
				</article>
			);
		});
		
		if (this.state.chatMode === 0) {
			chatComp = (
				<div className="chat-login flex">
					<h3>Join the Chat</h3>
					<input className="input" placeholder="Enter your name" maxLength="10" onChange={this.handleUserName} />
					<button className="button" onClick={this.joinChat}>Enter</button>
				</div>
			);
		} else if (this.state.chatMode === 1) {
			var allChats = this.state.allChats.map((obj, i) => {
				return (
					<article key={i} className="chat-bubble">
						{obj}
					</article>
				);
			});
			
			chatComp = (
				<div className="flex">
					<div className="chat-content chat-users">
						<div className="flex">
							<h4>Connected Users</h4>
							<div className="chat-users-list">
								<div className="flex">
									{curUsers}
								</div>
							</div>
						</div>
					</div>
					<div className="chat-content chat-messages">
						<div className="flex">
							{allChats}
						</div>
					</div>
					<div className="chat-content chat-input">
						<div className="flex">
							<input className="input" type="text" onChange={this.handleMyMsg} placeholder="Type a message" />
							<button className="button" onClick={this.sendMsg}>Send</button>
						</div>
					</div>
				</div>
			);
		}
		
		return (
			<section className="chat">
				{chatComp}
			</section>
		);
	}
}

export default App;