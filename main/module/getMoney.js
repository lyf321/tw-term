/**
 * Created by liyangfan on 17-9-10.
 */

const getStartTime = require("./getStartTime");
const getEndTime = require("./getEndTime");
const calculateMoney = require("./calculateMoney");
const allCharges = require("../charges/charges");

function getMoney(inputs, week) {
    let money;
    let inputStart = getStartTime(inputs[2]);
    let inputEnd = getEndTime(inputs[2]);

    if (week === 1) {
        money = calculateMoney(inputStart, inputEnd, allCharges.weekend);
    } else {
        money = calculateMoney(inputStart, inputEnd, allCharges.mondayToFriday);
    }

    return money;
}

module.exports = getMoney;