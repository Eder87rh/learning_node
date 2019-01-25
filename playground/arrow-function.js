let square = x => x * x;
console.log('​square', square(9))

let user = {
    name: 'Andrew',
    sayHi: () => {
        console.log(arguments)
		console.log(`HI I'm ${this.name}`)
    },
    sayHiAlt () {
        console.log(arguments)
        console.log(`HI I'm ${this.name}`)
    }
};

user.sayHiAlt(1, 2, 3);