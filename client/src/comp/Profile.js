import React, { Component } from 'react';
import ProfileCard from './ProfileCard';

class Profile extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			profiles: [
				{
					name: "Christian Bondoc",
					class: "crbd",
					title: "Full Stack Developer",
					url: "http://christianbondoc.com/",
					thumbnail: "christian_face.jpg",
				},
				{
					name: "Danny Burton",
					class: "djsb",
					title: "UX/UI Designer, Front End Developer",
					url: "http://www.dannyburton.ca/",
					thumbnail: "danny_face.jpg",
				}
			],
		}
	}
	
	render() {
		var profCont = this.state.profiles.map((obj, i)=>{
			return (
				<ProfileCard
					key={i}
					profData={obj}
				/>
			);
		});
		
		return (
			<section className="profile">
				<div className="flex">
					{profCont}
				</div>
			</section>
		);
	}
}

export default Profile;
