const sentence = 'i am learning web development from programmilg hero';

const firstChange = sentence.split(' ')
.map(letter => letter[0].toUpperCase() + letter.slice(1))
.join(" ")

console.log(firstChange);