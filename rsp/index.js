"use strict";
var imgCoords = '0';
var rsp = {
    ROCK: '0',
    SCISSORS: '-142px',
    PAPER: '-284px'
}; // as const도 설명
function computerChoice(imgCoords) {
    return Object.keys(rsp).find(function (k) {
        return rsp[k] === imgCoords;
    });
}
