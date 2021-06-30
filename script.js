const generateRandomNumber = (num) => {
    return Math.floor(Math.random() * num)
}

const jumble = {
    stage1: ["hello", "goodbye", "sigh" ],
    stage2: ["cat", "pig", "dog"],
    stage3: ["pizza", "burger", "pie"]
}

for (let prop in jumble) {
    let index = generateRandomNumber(jumble[prop].length)
    console.log(jumble[prop][index]);
}