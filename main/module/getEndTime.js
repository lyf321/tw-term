/**
 * Created by liyangfan on 17-9-9.
 */

function getEndTime(time) {
    return time.split("~")[1].split(":")[0];
}

module.exports = getEndTime;