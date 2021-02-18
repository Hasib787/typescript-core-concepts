interface Player {
    club: string,
    name: string,
    salary: number,
    wife?: string,
    isPlaying: boolean
}

const messi: Player = {
    name: 'messi',
    club: 'barcelona',
    salary: 4500000,
    wife: 'sara',
    isPlaying: true
}

const Ronaldo: Player = {
    name: 'Ronaldo',
    club: 'Liverpool',
    salary: 5100000,
    isPlaying: true
}

function getBonus(player: Player, friends: string[]) {
    return player.salary * 0.1;
}

console.log( getBonus(messi, ['Hasib', 'Zara']));