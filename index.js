
function calculateTotalTarget(startDate, endDate, totalAnuual) {

    let start = new Date(startDate);
    let end = new Date(endDate);

    let workingDaysPerMonth = [];
    let totalWorkingDays = 0

    while (start <= end) {
        let dayOftheWeek = start.getDay();

        if (dayOftheWeek !== 5){

            let month = start.getMonth();
            let year = start.getFullYear();
    
            let yearMonths = `${year} - ${month + 1}`;
            if (!workingDaysPerMonth[yearMonths]){
                workingDaysPerMonth[yearMonths] = 0;
            }
    
            workingDaysPerMonth[yearMonths] += 1;
            totalWorkingDays += 1;
        }

        start.setDate(start.getDate() + 1);
     }

     let monthlyTargets = [];
     let daysWorkedExcludingFridays = [];
     let totalTarget = 0;
     for (let yearMonths in workingDaysPerMonth) {
        let workingDaysInMonths = workingDaysPerMonth[yearMonths];
        daysWorkedExcludingFridays.push(workingDaysInMonths);

        let monthlyTarget = (workingDaysInMonths / totalWorkingDays) * totalAnuual;
        monthlyTargets.push(monthlyTarget);
        totalTarget += monthlyTarget;
     }

     return {
        daysExcludingFridays: daysWorkedExcludingFridays,
        daysWorkedExcludingFridays,
        monthlyTargets,
        totalTarget
     };



}

console.log(calculateTotalTarget('2024-01-01', '2024-03-31', 5220));