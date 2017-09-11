/**
 * Created by liyangfan on 17-9-11.
 */

const judgeTime = require("../main/module/judgeTime");


describe('judgeTime', ()=> {
    it("should print is true", ()=> {
        const order = "14:00~16:00";
        const input = "13:00~18:00";
        expect(judgeTime(order, input)).toBe(true);
    });
    it("should print is true", ()=> {
        const order = "14:00~16:00";
        const input = "15:00~18:00";
        expect(judgeTime(order, input)).toBe(true);
    });
    it("should print is false", ()=> {
        const order = "14:00~16:00";
        const input = "17:00~18:00";
        expect(judgeTime(order, input)).toBe(false);
    });
});