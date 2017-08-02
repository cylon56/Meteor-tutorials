import React from 'react';
import PropTypes from 'prop-types';
import {Players} from './../api/players';


export default class Player extends React.Component
{
	render()
	{
		let itemClassName = `item item--position-${this.props.players.rank}`

		return (
			<div key ={this.props.players._id} className = {itemClassName}>
				<div className = "player">
				<div>
					<h3 className ="player__name">{this.props.players.name}</h3>
					<p className = "player__stats">
					{this.props.players.position} place - {this.props.players.score} point(s).
					</p>
				</div>
				<div className = "player__stats">
					<button className="button button--round" onClick = {() => {
						Players.update(this.props.players._id, {$inc: {score: 1}})
					}}>+1</button>
					<button className="button button--round" onClick = {() => {
						Players.update(this.props.players._id, {$inc: {score: -1}})
					}}>-1</button>
					<button className="button button--round" onClick = {() => {
						Players.remove(this.props.players._id)
					}}>X</button>
				</div>
				</div>
			</div>
			);
	}
}

Player.propTypes = {
	players: PropTypes.object.isRequired
};
