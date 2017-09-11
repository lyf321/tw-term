/**
 * Created by liyangfan on 17-9-11.
 */

class RegExp {
    static regExpTime(inputs) {
        const regExp = /(([0-9]{3}[1-9]|[0-9]{2}[1-9][0-9]{1}|[0-9]{1}[1-9][0-9]{2}|[1-9][0-9]{3})-(((0[13578]|1[02])-(0[1-9]|[12][0-9]|3[01]))|((0[469]|11)-(0[1-9]|[12][0-9]|30))|(02-(0[1-9]|[1][0-9]|2[0-8]))))|((([0-9]{2})(0[48]|[2468][048]|[13579][26])|((0[48]|[2468][048]|[3579][26])00))-02-29)/;
        return regExp.test(inputs)
    }

    static regExpDate(inputs) {
        const regExp = /((09)|(1[0-9])|(2[0-2])):00~((09)|(1[0-9])|(2[0-2])):00/;
        return regExp.test(inputs)
    }

    static regExpPlace(inputs) {
        const regExp = /^[A-D]$/;
        return regExp.test(inputs)
    }
}

module.exports = RegExp;
