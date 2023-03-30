/*
============================================
; Title:  team.js
; Author: Hannah Del Real
; Date:   30 March 2023
; Description: Main program for Team Module.
;===========================================
*/
'use strict'

//Imports the TeamManager module from the team-manager.js file.
const TeamManager = require('./team-manager.js');

// Gets the array of team objects from the team-manager.js file.
let teams = TeamManager.getTeams();

// Displays the string with the information from the team array.
console.log('-- DISPLAYING TEAMS --');
for (let team of teams) {
    console.log(TeamManager.displayTeam(team));
}

// Variables are created for two team names and calls the findTeam() function.
const ucla = TeamManager.getTeam('UCLA');

const sanDiego = TeamManager.getTeam('San Diego State');

// Displays the output of the ucla variable.
console.log('-- DISPLAYING A SINGLE TEAM --');
 console.log(TeamManager.displayTeam(ucla));

 // Displays the output of the sanDiego variable.
 console.log('-- DISPLAYING A SINGLE TEAM --');
 console.log(TeamManager.displayTeam(sanDiego));

