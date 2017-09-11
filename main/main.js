/**
 * Created by liyangfan on 17-9-9.
 */

var allCharges = require("./charges/charges");
var getStartTime = require("./module/getStartTime");
var getEndTime = require("./module/getEndTime");
var calculation = require("./module/calculation");
var getWeek = require("./module/getWeek");
var judgeTime = require("./module/judgeTime");
var calculateMoney = require("./module/calculateMoney");
var saveOrderList = require("./module/saveOrderList");
var scanf = require('scanf');


class Main {
    main() {
        var input = scanf('%S');

//123 2016-5-6 20:00~22:00 A  报错
//123 2017-09-07 09:00~12:00 A
//123 2017-09-07 09:00~19:00 A
//123 2017-09-06 12:00~18:00 A
//123 2017-09-06 14:00~16:00 A


//UID
//orderDate
//time
// 取消 place
//mark:违约
//money

        var orderList = {A: [], B: [], C: [], D: []};
        while (input !== "") {
            var inputs = input.split(" ");

            var regExpTime = /(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)/;
            var regExpDate = /((09)|(1[0-9])|(2[0-2])):00~((09)|(1[0-9])|(2[0-2])):00/;
            var regExpPlace = /^[A-D]$/;

            if (regExpTime.test(inputs[1]) && regExpDate.test(inputs[2]) && regExpPlace.test(inputs[3]) && (inputs.length === 4 || inputs.length === 5)) {
                let startDate = getStartTime(inputs[2]);
                let endDate = getEndTime(inputs[2]);

                if (inputs.length === 4) {
                    orderList = saveOrderList(endDate, startDate, inputs, orderList);
                } else {
                    if (inputs[4] === "C") {
                        let cancel = cancelSaveOrder(inputs, orderList);

                        if (cancel.tag && cancelOrder(cancel.cancel, cancel.keys, orderList)) {
                            console.log("Success: the booking is accepted!");
                            // if (cancelOrder(cancel.cancel, cancel.keys, orderList)) {
                            //     console.log("Success: the booking is accepted!");
                            // } else {
                            //     console.log("44 Error: the booking is invalid!");
                            // }
                        } else {
                            console.log("66 Error: the booking is invalid!")
                        }
                    } else {
                        console.log("55 Error: the booking is invalid!");
                    }
                }
            } else {
                console.log("22 Error: the booking is invalid!")
            }

            input = scanf('%S');
        }

        function cancelOrder(cancelI, keys, orderList) {

            let order = orderList[keys];
            if (order[cancelI].mark === 0) {
                order[cancelI].mark = 1;
                order[cancelI].money = (order[cancelI].money) / 2;
                return true;
            } else {
                return false;
            }
        }

        function cancelSaveOrder(inputs, orderList) {
            let order;
            let tag = false;
            let cancel;
            let keys;

            for (var key in orderList) {
                if (key === inputs[3]) {
                    order = orderList[key];

                    // for (let i = 0; i < order.length; i++) {
                    //     let judgeOrderTime = order[i].time === inputs[2] ? true : false;
                    //
                    //     if (order[i].orderDate === inputs[1] && order[i].mark === 0 && judgeOrderTime) {
                    //         cancel = i;
                    //         tag = true;
                    //         keys = key;
                    //     } else {
                    //         tag = false;
                    //     }
                    //     if (tag) {
                    //         break;
                    //     }
                    // }
                    order.forEach((ele, index)=> {
                        let judgeOrderTime = ele.time === inputs[2] ? true : false;
                            if (ele.orderDate === inputs[1] && ele.mark === 0 && judgeOrderTime) {
                                cancel = index;
                                tag = true;
                                keys = key;
                            } else {
                                tag = false;
                            }
                            // if (tag) {
                            //     break;
                            // }
                    })
                }
            }

            return {tag, cancel, keys};
        }

        if (input === "") {
            console.log("计算");
            let orderItem = calculation(orderList);
            console.log(orderItem);
        }
    }
}

module.exports = Main;