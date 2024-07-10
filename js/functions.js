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


const getTime = (time) => {
  let emptyTime = [ ];
  for (let i = 0; i <= time.length - 1; i++) {
    emptyTime += time[i];
    return emptyTime;
  }
  return emptyTime;
};

console.log(getTime(34,11));
