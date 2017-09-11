/**
 * Created by liyangfan on 17-9-9.
 */
function getWeek(inputs) {
    let date = new Date(inputs);
    let week = date.getDay();

    if (week <= 5 && week >= 1) {
        week = 0;
    } else {
        week = 1;
    }

    return week;
}

module.exports = getWeek;