/*
============================================
; Title:  team-manager.js
; Author: Hannah Del Real
; Date:   30 March 2023
; Description: Team Manger Module.
;===========================================
*/

'use-strict'
// Import Team Class exported from team.js.
const Team = require('./team.js');

// Created an array of Team objects with properties of the Class Team.
let teams = [
    new Team('Caldwell', 'Cougars', 54),
    new Team('UCLA', 'Bruins', 57 ),
    new Team('San Diego State', 'Aztecs', 58),
    new Team("Cal Poly", "Mustangs", 53),
    new Team("Citrus", "Owls", 63)
]

// Created a function getTeams to output array of Team objects.
module.exports.getTeams = function() {
    return teams;
}

// Created a function named getTeam and returns a single fruit object using JS built-in find() function.
module.exports.getTeam = function(name) {
    return teams.find(team => team.name === name);
    }

// created a function named display team to return string using fruit object properties.
module.exports.displayTeam = function(team) {
    return "Name: " + team.name + "\nMascot: " + team.mascot + "\nPlayer Count: " + team.playerCount + "\n";
}