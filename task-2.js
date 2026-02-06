const names = "apple Apple banana Apricot avocado Alligator ant Ant arrow Anchor aardvark";

let count = 0;

for (const i of names){
    if (i ==="a" || i === "A")
        count++;
}

console.log(count);
