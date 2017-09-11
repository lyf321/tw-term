/**
 * Created by liyangfan on 17-9-10.
 */

function getSubtotal(order) {
    let subtotal = 0;
    order.forEach((orders)=> {
        subtotal += parseInt(orders.money);
    });
    return subtotal;
}

module.exports = getSubtotal;