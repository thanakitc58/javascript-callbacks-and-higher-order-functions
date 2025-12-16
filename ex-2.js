//Exercise #2: At Least Five Function
const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

function checkGradeOver70(score) {
  // Start coding here
  let result = [];
  for (let i = 0; i < score.length; i++) {
    if (score[i] > 70) {
       result.push(score[i]);
    };
  };

  if (result.length < 5) {
    return false;
  } else {
    return true;
  };
  
};

function atLeastFive(array, operation) {
  // Start coding here
  return operation(array);
};

// Using `atLeastFive` function here
let scoreRoom1Result = atLeastFive(studentScoresRoom1, checkGradeOver70);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, checkGradeOver70);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, checkGradeOver70);

console.log(scoreRoom1Result); //true
console.log(scoreRoom2Result); //false
console.log(scoreRoom3Result); //false

/*
====================================

1. ใน Exercise นี้ ฟังก์ชันใดเป็น Callback Function?
Answer: Callback Function คือ "ฟังก์ชั่น checkGradeOver70" เนื่องจากเป็นฟังก์ชั่นถูกนำไปใช้เป็น Argument ในฟังก์ชั่นอื่น (atLeastFive)

2. ใน Exercise นี้ ฟังก์ชันใดเป็น Higher Order Function?
Answer: Higher Order Function คือ "ฟังก์ชั่น atLeastFive" เนื่องจากมีการรับฟังก์ชั่นอื่น (checkGradeOver70) มาเป็น parameter
====================================
*/
