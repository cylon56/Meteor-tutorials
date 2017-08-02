import React from 'react';
import ReactDOM from 'react-dom';
import {Players, calculatePlayerPositions} from './../imports/api/players';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import App from './../imports/ui/App';


//Three ways to impor
// 1. './../import/file' - import local file
// 2. 'jquery' - import npm package
// 3. 'meteor/module' - import meteor module

Meteor.startup( () => {

	Tracker.autorun( () => {
		let players = Players.find({}, {sort:{score: -1}}).fetch();

		let title = 'Score Keep'
		let positionedPlayers = calculatePlayerPositions(players);
		let subtitle = "We keep score so you don't need to"
		ReactDOM.render(<App title = {title} players = {positionedPlayers}/>, document.getElementById('app'));

	});

	console.log(Players.find().fetch());


	});