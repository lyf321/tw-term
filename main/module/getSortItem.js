/**
 * Created by liyangfan on 17-9-11.
 */

function getSortItem(orderList) {
    for (let key in orderList) {
        orderList[key].sort(function (a, b) {
            var datea = a.time.split("~");
            var dateb = b.time.split("~");
            var a = `${a.orderDate} ${datea[0]}`;
            var b = `${b.orderDate} ${dateb[0]}`;
            // console.log(a,b);
            return new Date(a).getTime() - new Date(b).getTime();
        });
        // console.log(orderList[key]);
    }
    return orderList;
}

module.exports = getSortItem;