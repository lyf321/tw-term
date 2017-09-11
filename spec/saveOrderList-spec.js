/**
 * Created by liyangfan on 17-9-11.
 */

const saveOrderList = require("../main/module/saveOrderList");

describe('saveOrderList', ()=> {
    it("should print error text", ()=> {
        const input = "U003 2017-08-01 21:00~22:00 A";
        const endDate = 20;
        const startDate = 18;
        const orderList = {
            A: [{
                UID: "U003",
                orderDate: "2017-08-01",
                time: "21:00~22:00",
                mark: 0,
                money: 100,
                week: 0,
            }], B: [], C: [], D: []
        };
        const inputs = input.split(" ");
        spyOn(console, 'log');
        saveOrderList(endDate, startDate, inputs, orderList)
        expect(console.log).toHaveBeenCalledWith("Error: the booking conflicts with existing bookings!");
    });
    it("should print correct text", ()=> {
        const input = "U003 2017-08-03 18:00~20:00 A";
        const endDate = 20;
        const startDate = 18;
        const orderList = {
            A: [{
                UID: "U003",
                orderDate: "2017-08-01",
                time: "21:00~22:00",
                mark: 1,
                money: 100,
                week: 0,
            }], B: [], C: [], D: []
        };
        const inputs = input.split(" ");
        spyOn(console, 'log');
        saveOrderList(endDate, startDate, inputs, orderList)
        expect(console.log).toHaveBeenCalledWith("Success: the booking is accepted!");
    });
});