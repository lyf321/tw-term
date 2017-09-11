/**
 * Created by liyangfan on 17-9-11.
 */
const getStartTime = require("../main/module/getStartTime");
const getEndTime = require("../main/module/getEndTime");

describe('getStartTime and getEndTime', ()=> {
    it("should print correct start time", ()=> {
        const number = "20:00~22:00";
        expect(getStartTime(number)).toBe('20');
    });
    it("should print correct end time", ()=> {
        const number = "21:00~23:00";
        expect(getEndTime(number)).toBe('23');
    });
});