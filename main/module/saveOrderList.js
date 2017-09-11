/**
 * Created by liyangfan on 17-9-10.
 */

const saveOrder = require("./saveOrder");

function saveOrderList(endDate, startDate, inputs,orderList) {
    if (endDate > startDate) {
        var save = saveOrder(inputs, orderList);
        if (save) {
            console.log("Error: the booking is invalid!");
        } else {
            console.log("Success: the booking is accepted!");
        }
    } else {
        console.log("Error: the booking is invalid!");
    }

    return orderList;
}

module.exports = saveOrderList;