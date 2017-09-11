/**
 * Created by liyangfan on 17-9-11.
 */
const getMoney = require("../main/module/getMoney");

describe('getMoney', ()=> {
    it("should print correct money", ()=> {
        const input = "U003 2017-09-10 18:00~20:00 A";
        const week = 1;
        const inputs = input.split(" ");
        expect(getMoney(inputs,week)).toBe(120);
    });
    it("should print is correct money", ()=> {
        const input = "U003 2017-09-01 18:00~20:00 A";
        const week = 0;
        const inputs = input.split(" ");
        expect(getMoney(inputs,week)).toBe(160);
    });
    it("should print is correct money", ()=> {
        const input = "U003 2017-09-01 10:00~20:00 A";
        const week = 0;
        const inputs = input.split(" ");
        expect(getMoney(inputs,week)).toBe(520);
    })
    it("should print is correct money", ()=> {
        const input = "U003 2017-09-01 13:00~20:00 A";
        const week = 0;
        const inputs = input.split(" ");
        expect(getMoney(inputs,week)).toBe(410);
    })
});