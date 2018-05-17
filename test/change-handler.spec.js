describe("ChangeHandler", function() {

    // Constructor tests
    it("initializes with the given amountDue", function() {
        let newChange = new ChangeHandler({
            amountDue: 25
        }); 
        expect(newChange.amountDue); 
    });

    it("initializes cashTendered to 0", function() {
        let newChange = new ChangeHandler({
            cashTendered: 0 
        }); 
        expect(newChange.cashTendered).toBe(0);
    });

    // Insert coin tests
    it("insert quarter adds 25", function() {
        let newChange = new ChangeHandler({
            cashTendered: 0 
        }); 
        newChange.insertCoin("quarters"); 
        expect(newChange.cashTendered).toBe(25);
    });

    it("insert dime adds 10", function() {
        let newChange = new ChangeHandler({
            cashTendered: 0 
        }); 
        newChange.insertCoin("dimes"); 
        expect(newChange.cashTendered).toBe(10);
    });

    it("insert nickel adds 5", function() {
        let newChange = new ChangeHandler({
            cashTendered: 0 
        }); 
        newChange.insertCoin("nickels"); 
        expect(newChange.cashTendered).toBe(5);
    });

    it("insert penny adds 1", function() {
        let newChange = new ChangeHandler({
            cashTendered: 0 
        }); 
        newChange.insertCoin("pennies"); 
        expect(newChange.cashTendered).toBe(1);
    });

    it("subsequent coins continue to add value", function() {
        let newChange = new ChangeHandler({
            cashTendered: 0 
        }); 
        newChange.insertCoin("quarters");
        newChange.insertCoin("quarters"); 
        newChange.insertCoin("quarters"); 
        newChange.insertCoin("quarters");  
        expect(newChange.cashTendered).toBe(100);
    });

    // isPaymentSufficient tests
    it("isPaymentSufficient returns true when enough cashTendered", function() {
        let newChange = new ChangeHandler({
            cashTendered: 35, 
            amountDue: 30
        }); 
        expect(newChange.isPaymentSufficient()).toBe(true); 
         
    });

    it("isPaymentSufficient returns false when not enough cashTendered", function() {
        let newChange = new ChangeHandler({
            cashTendered: 20, 
            amountDue: 30
        }); 
        expect(newChange.isPaymentSufficient()).toBe(false); 
         
    });
    });
    
    it("isPaymentSufficient returns true when exact cashTendered", function() {
        let newChange = new ChangeHandler({
            cashTendered: 20, 
            amountDue: 20
        }); 
        expect(newChange.isPaymentSufficient()).toBe(true); 
         
    });

    // Give change tests
    it("giveChange returns no coins when exact change", function() {
     let newChange = new ChangeHandler ({
            cashTendered: 100, 
            amountDue: 100
        }); 

        expect(newChange.giveChange()).toEqual(newChange.giveChange()); 
    });

    it("giveChange returns correct coins for 10", function() {
        let newChange = new ChangeHandler ({
            cashTendered: 100, 
            amountDue: 90
        }); 

        expect(newChange.giveChange()).toEqual(newChange.giveChange()); 
    });

    it("giveChange returns correct coins for 27", function() {
        
    });

    it("giveChange returns correct coins for 68", function() {
        
    });

    it("giveChange returns correct coins for 15", function() {
        
    });

    it("giveChange returns correct coins for 2", function() {
        
    });
