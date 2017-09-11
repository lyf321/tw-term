/**
 * Created by liyangfan on 17-9-11.
 */

const orderCancel = require("../main/module/orderCancel");

describe('orderCancel', ()=> {

    it("should print error text", ()=> {
        const input = "U003 2017-08-01 18:00~20:00 A C";
        const inputs = input.split(" ");
        const orderList = {
            A: [{
                UID: "U003",
                orderDate: "2017-08-01",
                time: "21:00~22:00",
                mark: 1,
                money: 100,
                week: 0,
            }, {
                UID: "U003",
                orderDate: "2017-08-01",
                time: "17:00~19:00",
                mark: 1,
                money: 60,
                week: 0,
            }], B: [], C: [], D: []
        };
        spyOn(console, 'log');
        orderCancel(inputs, orderList);
        expect(console.log).toHaveBeenCalledWith("Error: the booking is invalid!");
    });
    it("should print error text", ()=> {
        const input = "U003 2017-08-01 18:00~20:00 A C";
        const inputs = input.split(" ");
        const orderList = {
            A: [{
                UID: "U003",
                orderDate: "2017-08-01",
                time: "21:00~22:00",
                mark: 1,
                money: 60,
                week: 0,
            }], B: [], C: [], D: []
        };
        spyOn(console, 'log');
        orderCancel(inputs, orderList);
        expect(console.log).toHaveBeenCalledWith("Error: the booking is invalid!");
    });
    it("should print correct text", ()=> {
        const input = 'U003 2017-08-01 21:00~22:00 A C';
        const inputs = input.split(" ");
        const orderList = {
            A: [{
                UID: "U003",
                orderDate: "2017-08-01",
                time: "21:00~22:00",
                mark: 0,
                money: 60,
                week: 0,
            }], B: [], C: [], D: []
        };
        spyOn(console, 'log');
        orderCancel(inputs, orderList);
        expect(console.log).toHaveBeenCalledWith("Success: the booking is accepted!");
    })
});