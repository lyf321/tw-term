/**
 * Created by liyangfan on 17-9-9.
 */

var getStartTime = require("./module/getStartTime");
var getEndTime = require("./module/getEndTime");
var calculation = require("./module/calculation");
var judgeTime = require("./module/judgeTime");
var calculateMoney = require("./module/calculateMoney");
var saveOrderList = require("./module/saveOrderList");
const getSortItem = require("./module/getSortItem");
const orderCancel = require("./module/orderCancel");
const getResult = require("./module/getResult");
const Input = require("./input");
const RegExp = require("./module/regExp");
var scanf = require('scanf');


class Main {
    main() {
        var input = Input.input();
//123 2016-5-6 20:00~22:00 A  报错
//123 2017-09-07 09:00~12:00 A
//123 2017-09-07 09:00~19:00 A
//123 2017-09-06 10:00~11:00 A
//123 2017-09-06 14:00~16:00 A

        var orderList = {A: [], B: [], C: [], D: []};
        while (input !== "") {
            var inputs = input.split(" ");

            if (RegExp.regExpTime(inputs[1]) && RegExp.regExpDate(inputs[2]) && RegExp.regExpPlace(inputs[3]) && (inputs.length === 4 || inputs.length === 5)) {
                if (inputs.length === 4) {
                    let startDate = getStartTime(inputs[2]);
                    let endDate = getEndTime(inputs[2]);
                    orderList = saveOrderList(endDate, startDate, inputs, orderList);
                } else {
                    orderCancel(inputs, orderList);
                }
            } else {
                console.log("Error: the booking is invalid!")
            }
            input = Input.input();
        }

        orderList = getSortItem(orderList);
        let orderItem = calculation(orderList);
        let result = getResult(orderItem);
        console.log(result)
    }
}

module.exports = Main;