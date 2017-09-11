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

            if (regExpTime(inputs[1]) && regExpDate(inputs[2]) && regExpPlace(inputs[3]) && (inputs.length === 4 || inputs.length === 5)) {
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

        function regExpTime(inputs) {
            const regExp = /(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)/;
            return regExp.test(inputs)
        }

        function regExpDate(inputs) {
            const regExp = /((09)|(1[0-9])|(2[0-2])):00~((09)|(1[0-9])|(2[0-2])):00/;
            return regExp.test(inputs)
        }

        function regExpPlace(inputs) {
            const regExp = /^[A-D]$/;
            return regExp.test(inputs)
        }

        if (input === "") {
            orderList = getSortItem(orderList);
            let orderItem = calculation(orderList);
            let result = getResult(orderItem);
            console.log(result)
        }
    }
}

module.exports = Main;