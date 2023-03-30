/*
============================================
; Title:  team.js
; Author: Hannah Del Real
; Date:   30 March 2023
; Description: JavaScript for class named Team.
;===========================================
*/

'use-strict'

class Team {
    constructor (name, mascot, playerCount) {
        this.name = name;
        this.mascot = mascot;
        this.playerCount = playerCount;
    }
}

module.exports = Team;