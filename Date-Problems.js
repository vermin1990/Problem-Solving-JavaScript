function addDays2Day(weekDay, days) {

    const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let weekDayIndex = 0;

    //Find exact weekDay index

    for (let i = 0; i < weekDays.length; i++) {

        if (weekDays[i] === weekDay) {
            weekDayIndex = i;
            break;
        }
    }

    if (weekDayIndex + days <= 6)
        return weekDays[weekDayIndex + days];

    let remainingDay = days % 7;

    if (weekDayIndex + remainingDay <= 6)
        return weekDays[weekDayIndex + remainingDay];
    else
        return weekDays[(weekDayIndex + remainingDay) - 7];
}

function getIsoDateDay(isoDate) {    

    let date = new Date(isoDate);
    let day = date.toString().substr(0, 3);

    return day;
}