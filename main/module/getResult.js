/**
 * Created by liyangfan on 17-9-11.
 */

function getResult(allOrder) {
    let result;
    let list;

    result = allOrder.allOrder.orderItems.map((order, index)=> {
        switch (index) {
            case 0:
                let orderA = getOrderList(order["A"]);
                if (orderA) {
                    return `场地：A
${orderA}
小计：${order.subtotal}元
`
                } else {
                    return `场地：A
小计：${order.subtotal}元
`
                }
                break;
            case 1:
                let orderB = getOrderList(order["B"]);
                if (orderB) {
                    return `场地：B
${orderB}
小计：${order.subtotal}元
`
                } else {
                    return `场地：B
小计：${order.subtotal}元
`
                }
                break;
            case 2:
                let orderC = getOrderList(order["C"]);
                if (orderC) {
                    return `场地：C
${orderC}
小计：${order.subtotal}元
`
                } else {
                    return `场地：C
小计：${order.subtotal}元
`
                }
                break;
            default:
                let orderD = getOrderList(order["D"]);
                if (orderD) {
                    return `场地：D
${orderD}
小计：${order.subtotal}元`
                } else {
                    return `场地：D
小计：${order.subtotal}元`
                }
        }
    }).join("\n");
    list = `收入汇总
---
${result}
---
总计：${allOrder.total}元`;

    return list;
}

function getOrderList(order) {
    return order.map((ele)=> {
        let result;
        if (ele.mark === 1) {
            result = `${ele.orderDate} ${ele.time} 违约金 ${ele.money}`;
        } else {
            result = `${ele.orderDate} ${ele.time} ${ele.money}`;
        }
        return result;
    }).join('\n');
}

module.exports = getResult;