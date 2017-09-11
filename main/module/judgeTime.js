/**
 * Created by liyangfan on 17-9-9.
 */

const getStartTime = require("./getStartTime");
const getEndTime = require("./getEndTime");

function judgeTime(order, input) {
    let orderStart = getStartTime(order);
    let orderEnd = getEndTime(order);
    let inputStart = getStartTime(input);
    let inputEnd = getEndTime(input);

    if (inputStart < inputEnd) {
        if ((inputStart >= orderStart && inputStart < orderEnd) || (inputEnd >= orderStart && inputEnd <= orderEnd)||(inputStart<orderStart&&inputEnd>orderEnd)){
            return true;
        }else {
            return false;
        }
    } else {
        return false;
    }
}

module.exports = judgeTime;