/**
 * This class handles change for a vending machine.
 * 
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
class ChangeHandler {

    constructor(data) {
        this.amountDue = data.amountDue;
        this.cashTendered = data.cashTendered;
    }

    /**
     * The customer inserts a coin, increasing the cashTendered.
     * @param {string} type either quarter, dime, nickel, or penny
     */
    insertCoin(type) {
        if(type === "quarters"){
            this.cashTendered +=25; 
        } else if (type === "dimes") {
            this.cashTendered +=10;
        } else if (type === "nickels"){
            this.cashTendered +=5; 
        } else if (type === "pennies"){
            this.cashTendered +=1; 
        } 
    }

    /**
     * Returns true if enough coins have been inserted to at least meet the amountDue
     *a. Returns true if cashTendered more than amountDue.
        b. Returns false if cashTendered less than amountDue.
        c. Returns true if cashTendered equal to amountDue.
     */
    isPaymentSufficient() {
        if(this.cashTendered >= this.amountDue) {
            return true; 
        } else {
            return false; 
        }
    }

/*
a. 32 change produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2.
b. 10 change produces: quarters: 0, dimes: 1, nickels: 0, pennies: 0.
c. 27 change produces: quarters: 1, dimes: 0, nickels: 0, pennies: 2.
d. 68 change produces: quarters: 2, dimes: 1, nickels: 1, pennies: 3.

*/

    giveChange() {
    this.cashTendered -= this.amountDue; 
    while(this.cashTendered > 0) {
        if(this.cashTendered >= 25) {
            this.cashTendered - 25;
            this.quarters ++;  
        } else if (this.cashTendered >= 10 ) {
            this.cashTendered - 10; 
            this.dimes ++; 
        } else if (this.cashTendered >= 5 ) {
            this.cashTendered - 5; 
            this.nickels ++; 
        } else if (this.cashTendered >= 1) {
            this.cashTendered - 1; 
            this.pennies ++; 
        }
    
        // TODO return the correct change in the following format...
        return {
            quarters: 0,
            dimes: 0,
            nickels: 0,
            pennies: 0
        };
     }
  } 
}