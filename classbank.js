class Bank {
    constructor(amount) {
        this.amount = amount;
    }

    getbalance() {
        console.log("Balance is " + this.amount);
    }

    deposit(amount) {
        if(amount>10000){
            console.log("you can not deposit");
        } else {
        this.amount = this.amount + amount; 
        }
    }

    withdraw(amount){
    var tempamount = this.amount-amount 
        if (tempamount<2000){
            console.log("minium balance is required 2000");
        } else {
        this.amount = this.amount - amount;
        }
    
}
}

var myobj = new Bank(1000);

myobj.getbalance();
myobj.deposit(10000);
myobj.getbalance();
myobj.withdraw(1000);
myobj.getbalance();