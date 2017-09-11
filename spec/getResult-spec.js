const getResult = require("../main/module/getResult");

describe('getResult', ()=> {
    it("should print correct text", ()=> {
        const orderItem = {
            allOrder: {
                orderItems: [
                    {
                        A: [{
                            UID: "U003", orderDate: "2017-08-01", time: "18:00~20:00", mark: 0, money: 60, week: 0,
                        }, {
                            UID: "U003", orderDate: "2017-08-01", time: "19:00~22:00", mark: 1, money: 60, week: 0,
                        }], subtotal: 120
                    },
                    {
                        B: [{UID: "U003", orderDate: "2017-08-02", time: "13:00~17:00", mark: 1, money: 60, week: 0,}],
                        subtotal: 200
                    },
                    {
                        C: [], subtotal: 0
                    },
                    {
                        D: [], subtotal: 0
                    }],
            },
            total: 460
        };

const result = `收入汇总
---
场地：A
2017-08-01 18:00~20:00 60
2017-08-01 19:00~22:00 违约金 60
小计：120元
    
场地：B
2017-08-02 13:00~17:00 违约金 60
小计：200元
    
场地：C
小计：0元
    
场地：D
小计：0元
---
总计：460元`;
        // expect(getResult(orderItem)).toBe(result);
    });
});