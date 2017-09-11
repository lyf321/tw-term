/**
 * Created by liyangfan on 17-9-11.
 */

function orderCancel(inputs, orderList) {
    if (inputs[4] === "C") {
        let cancel = judgeCancelSaveOrder(inputs, orderList);

        if (cancel.tag && cancelOrder(cancel.cancel, cancel.keys, orderList)) {
            console.log("Success: the booking is accepted!");
        } else {
            console.log("Error: the booking being cancelled does not exist!")
        }
    } else {
        console.log("Error: the booking being cancelled does not exist!");
    }
}

function cancelOrder(cancelI, keys, orderList) {
    let order = orderList[keys];

    if (order[cancelI].mark === 0 && order[cancelI].week === 0) {
        order[cancelI].mark = 1;
        order[cancelI].money = (order[cancelI].money) / 2;
        return true;
    } else if (order[cancelI].mark === 0 && order[cancelI].week === 1) {
        order[cancelI].mark = 1;
        order[cancelI].money = ((order[cancelI].money) / 4);
        return true;
    } else {
        return false;
    }
}

function judgeCancelSaveOrder(inputs, orderList) {
    let order;
    let tag = false;
    let cancel;
    let keys;

    for (var key in orderList) {
        if (key === inputs[3]) {
            order = orderList[key];
            order.forEach((ele, index)=> {
                if (ele.orderDate === inputs[1] && ele.mark === 0 && ele.UID === inputs[0] && ele.time === inputs[2]) {
                    cancel = index;
                    tag = true;
                    keys = key;
                } else {
                    cancel = index;
                    tag = false;
                    keys = key;
                }
            })
        }
    }

    return {tag, cancel, keys};
}

module.exports = orderCancel;