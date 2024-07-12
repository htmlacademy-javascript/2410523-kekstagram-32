// function countMaxString (line, number) {
//   return (line.length <= number);
// }

// countMaxString();

// function checksStringPalin (line) {
//   const string = line.replaceAll(' ', '').toLowerCase();
//   let empty = '';

//   for (let ind = string.length - 1; ind >= 0; ind --){
//     empty += string[ind];
//   }
//   return string === empty;
// }

// checksStringPalin();

function convertTime (valueTime) {
  const valueTimeParts = valueTime.split(':');
  const valueTimeInMinutes = parseInt(valueTimeParts[0], 10) * 60 + parseInt(valueTimeParts[1], 10);
  return valueTimeInMinutes;
}


function isMeetingWithinWorkingHours(startTime, endTime, meetingStartTime, duration) {
  const startTimeInMinutes = convertTime(startTime);
  const endTimeInMinutes = convertTime(endTime);

  const meetingStartTimeInMinutes = convertTime(meetingStartTime);

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

isMeetingWithinWorkingHours();
