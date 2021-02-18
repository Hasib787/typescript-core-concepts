"use strict";
const messi = {
    name: 'messi',
    club: 'barcelona',
    salary: 4500000,
    wife: 'sara',
    isPlaying: true
};
const Ronaldo = {
    name: 'Ronaldo',
    club: 'Liverpool',
    salary: 5100000,
    isPlaying: true
};
function getBonus(player, friends) {
    return player.salary * 0.1;
}
console.log(getBonus(messi, ['Hasib', 'Zara']));
