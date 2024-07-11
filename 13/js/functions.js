function countMaxString (line, number) {
  return (line.length <= number);
}

countMaxString();

function checksStringPalin (line) {
  const string = line.replaceAll(' ', '').toLowerCase();
  let empty = '';

  for (let ind = string.length - 1; ind >= 0; ind --){
    empty += string[ind];
  }
  return string === empty;
}

checksStringPalin();

function isMeetingWithinWorkingHours(startTime, endTime, meetingStartTime, duration) {
  const startTimeParts = startTime.split(':');
  const endTimeParts = endTime.split(':');

  const startTimeInMinutes = parseInt(startTimeParts[0], 10) * 60 + parseInt(startTimeParts[1], 10);
  const endTimeInMinutes = parseInt(endTimeParts[0], 10) * 60 + parseInt(endTimeParts[1], 10);

  const meetingStartTimeInMinutes = parseInt(meetingStartTime.split(':')[0], 10) * 60 + parseInt(meetingStartTime.split(':')[1], 10);

  if (startTimeInMinutes >= endTimeInMinutes) {
    return false;
  } else {

    if (meetingStartTimeInMinutes < startTimeInMinutes || meetingStartTimeInMinutes > endTimeInMinutes) {
      return false;
    }

    const totalDurationInMinutes = duration + meetingStartTimeInMinutes;

    if (totalDurationInMinutes <= endTimeInMinutes && totalDurationInMinutes >= startTimeInMinutes) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(isMeetingWithinWorkingHours('08:00', '17:30', '14:00', 90));
