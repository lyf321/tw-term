/**
 * Created by liyangfan on 17-9-11.
 */
const getWeek = require("../main/module/getWeek");

describe('getWeek', ()=> {
    it("should print is weekend (0)", ()=> {
        const number = "2017-09-11";
        expect(getWeek(number)).toBe(0);
    });
    it("should print is weekend (1)", ()=> {
        const number2 = "2017-09-10";
        expect(getWeek(number2)).toBe(1);
    })
});