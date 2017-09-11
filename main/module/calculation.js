/**
 * Created by liyangfan on 17-9-9.
 */
const getSubtotal = require("./getSubTotal");

function calculation(orderList) {
    let total = 0;
    let allOrder = {};
    let allOrderTotal = {};
    let orderItem = [];

    for (var key in orderList) {
        let orders = {};
        let order = orderList[key];
        let subtotal = getSubtotal(order);

        total += parseInt(subtotal);
        orders[key] = orderList[key];
        orders.subtotal = parseInt(subtotal);
        orderItem.push(orders);
    }

    allOrder.orderItems = orderItem;
    allOrderTotal.allOrder = allOrder;
    allOrderTotal.total = total;

    return allOrderTotal;
}

module.exports = calculation;