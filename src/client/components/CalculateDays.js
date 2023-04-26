export default function CalculateDays(task){
    const deadline = new Date(task.deadline);
    const today = new Date();
    today.setHours(0, 0, 0);
    var today_time = today.getTime();
    var deadline_time = deadline.getTime();
    var time_difference = deadline_time - today_time;
    var difference_days = Math.round(time_difference / (1000 * 3600 * 24));

    return difference_days
}
