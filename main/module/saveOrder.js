/**
 * Created by liyangfan on 17-9-10.
 */

const judgeTime = require("./judgeTime");
const getWeek = require("./getWeek");
const getMoney = require("./getMoney");

function saveOrder(inputs, orderList) {
    let tag = false;
    let order;

    for (var key in orderList) {
        if (key === inputs[3]) {
            order = orderList[key];
            tag = judgeSaveOrder(order, inputs, tag);
        }
    }
    if (!tag) {
        let week = getWeek(inputs[1]);
        let money = getMoney(inputs, week);
        order.push({UID: inputs[0], orderDate: inputs[1], time: inputs[2], mark: 0, money, week});
    }
    return tag;
}


//修改：
function judgeSaveOrder(order, inputs, tag) {
    for (let i = 0; i < order.length; i++) {
        let judgeOrderTime = judgeTime(order[i].time, inputs[2]);

        if (order[i].orderDate === inputs[1]&&judgeOrderTime) {
            // if (judgeOrderTime) {
            //     tag = true;
            // } else {
            //     tag = false;
            // }
            tag = true;
        } else {
            tag = false;
        }

        if (order[i].mark === 1) {
            tag = false;
        }
        if (tag) {
            break;
        }
    }
    return tag;
}

module.exports = saveOrder;