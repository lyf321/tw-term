/**
 * Created by liyangfan on 17-9-9.
 */
const getSubtotal = require("./getSubTotal");

function calculation(orderList) {
    let total = 0;

    let orderItem = {};
    let result;
    // console.log("收入汇总");
    // console.log("---");



    for (var key in orderList) {
        let allOrder = {};
        // console.log("场地:" + key);
        let order = orderList[key];

        //根据时间排序，用sort试一下。
        // for (let i = 0; i < order.length; i++) {
        //     subtotal += order[i].money;
        //     if (order[i].mark === 1) {
        //         console.log(order[i].orderDate + " " + order[i].time + " 违约金 " + order[i].money);
        //     } else {
        //         console.log(order[i].orderDate + " " + order[i].time + " " + order[i].money);
        //     }
        // }

        let subtotal = getSubtotal(order);
        console.log(key, subtotal);
        total += parseInt(subtotal);

        allOrder[key] = orderList[key];
        allOrder.subtotal = parseInt(subtotal);
        orderItem.allOrder = allOrder;
        orderItem.total = total;


        // let orderMessages = getOrderMessage(orderItem.allOrder[key]);
        //
        // result = `${orderMessages}小计：${subtotal}(元)`;
        // console.log(result,"\n");
    }
    return orderItem;


    // console.log("---\n总计:", parseInt(orderItem.total), "(元)");
}

function getOrderMessage(orderMessage) {
    return orderMessage.map((message)=> {
        let result;
        if (message.mark === 1) {
            result = `${message.orderDate} ${message.time} 违约金 ${message.money}`;
        } else {
            result = `${message.orderDate} ${message.time} ${message.money}`;
        }
        return result;
    }).join('\n');
}


module.exports = calculation;