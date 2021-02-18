const numbers: number[] = [5, 6, 7, 55, 22, 44, 77];
numbers.push(46);
console.log(numbers);

const friends: string[] = ['George', 'Jeff', 'Bill', 'Hasan'];
let megaName: string = '';
for (let i = 0; i < friends.length; i++) {
    const friend: string = friends[i];
    if (friend.length > megaName.length) {
        megaName = friend;
    }
}
console.log('Friend with the largest name',megaName);


