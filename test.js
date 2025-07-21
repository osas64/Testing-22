
let balance = 0;
let num = [];



function deposit(number, amount) {
    if(balance >= 0) {
        balance += amount;
        num.push(number);
        console.log(balance);
        console.log(num);
    }
}

deposit(83737377, 4);

