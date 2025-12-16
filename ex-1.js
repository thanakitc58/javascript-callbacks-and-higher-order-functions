// Exercise #1: For Each Function
const employeeSalaries = [20005, 40000, 32000, 14500, 344000];

function addSalary5000(previousSalary) {
  // รับค่าเงินเดือนเดิม และ Return ค่าเงินเดือนใหม่ที่บวกเพิ่ม 5000
  return previousSalary + 5000;
}

function forEach(array, operation) {
  // สร้าง Array ว่างเพื่อเก็บผลลัพธ์ใหม่
  const newArray = [];

  // วนลูปสมาชิกทุกตัวใน Array
  for (let i = 0; i < array.length; i++) {
    // เรียกใช้ operation (Callback) กับสมาชิกแต่ละตัว และเก็บผลลัพธ์
    const result = operation(array[i]);
    newArray.push(result);
  }

  // Return Array ของข้อมูลเงินเดือนใหม่
  return newArray;
}

// Using `forEach` function here
// เรียกใช้ฟังก์ชัน forEach โดยส่ง employeeSalaries และ addSalary5000 เข้าไป
let newEmployeeSalaries = forEach(employeeSalaries, addSalary5000);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]

/*
====================================

1. ใน Exercise นี้ ฟังก์ชันใดเป็น Callback Function?
   ตอบ: addSalary5000
   จุดสังเกต: เพราะเป็นฟังก์ชันที่ถูกส่งเข้าไปเป็น Argument (ตัวแปร) ในฟังก์ชันอื่น (forEach) เพื่อให้ถูกเรียกใช้งานทีหลัง

2. ใน Exercise นี้ ฟังก์ชันใดเป็น Higher Order Function?
   ตอบ: forEach
   จุดสังเกต: เพราะเป็นฟังก์ชันที่รับฟังก์ชันอื่น (ในที่นี้คือ operation) เข้ามาเป็นพารามิเตอร์เพื่อนำไปประมวลผล

====================================
*/