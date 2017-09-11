/**
 * Created by liyangfan on 17-9-10.
 */
var getStartTime = require("./getStartTime");
var getEndTime = require("./getEndTime");

function calculateMoney(inputStart, inputEnd, charges) {
    let money = 0;

    for (let i = 0; i < charges.length; i++) {
        let chargeStart = getStartTime(charges[i][0]);
        let chargeEnd = getEndTime(charges[i][0]);

        if (inputStart >= chargeStart && inputStart <= chargeEnd && inputEnd >= chargeStart && inputEnd <= chargeEnd) {

            money += (inputEnd - inputStart) * charges[i][1];
        } else if (inputStart >= chargeStart && inputStart < chargeEnd && inputEnd > chargeEnd) {

            money += (chargeEnd - inputStart) * charges[i][1];
            inputStart = chargeEnd;
        } else {

        }
    }

    return money;
}

module.exports = calculateMoney;

