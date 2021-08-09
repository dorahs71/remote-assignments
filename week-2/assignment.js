/***** Assignment 1:Function and Array *****/

function max(numbers) {
    let m = "";

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > m) {
            m = numbers[i];
        }
    }
    console.log(m);
}

max([1, 2, 4, 5]);
max([5, 2, 7, 1, 6]);

/***** Assignment 2: Object *****/

function calculate(args) {
    let result;
    if (args.op === "+") {
        result = args.n1 + args.n2;
    } else if (args.op === "-") {
        result = args.n1 - args.n2;
    } else {
        result = "Not supported";
    }
    console.log(result);
}

// 1st way
calculate({
    n1: 3,
    n2: 4,
    op: "+"
});

calculate({
    n1: 90,
    n2: 40,
    op: "-"
});

// 2nd way

class Cal {
    constructor(n1, n2, op) {
        this.n1 = n1;
        this.n2 = n2;
        this.op = op;
    }
}

const add = new Cal(4, 8, "+");
calculate(add);
const subtract = new Cal(180, 80, "-");
calculate(subtract);


/***** Assignment 3: Function, Array, and Object *****/

function avg(data) {

    let dataSize = data.size;
    let sum = 0;
    let i = data.products.length;
    while (i--) {
        sum += data.products[i].price;
    };

    console.log(sum / dataSize);
}

avg({
    size: 3,
    products: [{
            name: "Product 1",
            price: 100
        },
        {
            name: "Product 2",
            price: 700
        },
        {
            name: "Product 3",
            price: 250
        }
    ]
});