//Exercise #2: At Least Five Function
const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

function checkGradeOver70(score) {
  // ตรวจสอบว่าคะแนนมากกว่า 70 หรือไม่
  if (score > 70) {
    return true;
  } else {
    return false;
  }
}

function atLeastFive(array, operation) {
  let count = 0; // ตัวแปรสำหรับนับจำนวนนักเรียนที่ผ่านเกณฑ์

  // วนลูปเช็คคะแนนของนักเรียนแต่ละคนในห้อง
  for (let i = 0; i < array.length; i++) {
    // ใช้ Callback Function (operation) ตรวจสอบเงื่อนไข
    if (operation(array[i]) === true) {
      count++; // ถ้านักเรียนผ่านเกณฑ์ ให้เพิ่มจำนวนนับ
    }
  }

  // ตรวจสอบว่ามีนักเรียนผ่านเกณฑ์ตั้งแต่ 5 คนขึ้นไปหรือไม่
  if (count >= 5) {
    return true;
  } else {
    return false;
  }
}

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
   ตอบ: checkGradeOver70
   จุดสังเกต: เพราะเป็นฟังก์ชันที่ถูกส่งเข้าไปเป็น Argument ในฟังก์ชัน atLeastFive เพื่อใช้ตรวจสอบเงื่อนไขคะแนนรายบุคคล

2. ใน Exercise นี้ ฟังก์ชันใดเป็น Higher Order Function?
   ตอบ: atLeastFive
   จุดสังเกต: เพราะเป็นฟังก์ชันที่รับฟังก์ชันอื่น (operation) เข้ามาทำงานร่วมกับ Array ภายในตัวมันเอง

====================================
*/