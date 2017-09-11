/**
 * Created by liyangfan on 17-9-9.
 */

function loadAllCharges() {
    return {
        mondayToFriday: [["09:00~12:00", 30], ["12:00~18:00", 50], ["18:00~20:00", 80], ["20:00~22:00", 60]],
        weekend: [["09:00~12:00", 40], ["12:00~18:00", 50], ["18:00~22:00", 60]]
    }
}

module.exports = loadAllCharges();