// Exercise #1: For Each Function
const employeeSalaries = [20005, 40000, 32000, 14500, 344000];

function addSalary5000(previousSalary) {
  // Start coding here
  let result = []
  for (let employeeSalary of previousSalary){
    result.push(employeeSalary + 5000);
  };
  return result
};

function forEach(array, operation) {
  // Start coding here
    return operation(array);
};
 
// Using `forEach` function here
let newEmployeeSalaries = forEach(employeeSalaries, addSalary5000);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]

/*
====================================

1. ใน Exercise นี้ ฟังก์ชันใดเป็น Callback Function?
  Answer: Callback Function คือ "ฟังก์ชั่น addSalary5000" เนื่องจากเป็นฟังก์ชั่นถูกนำไปใช้เป็น Argument ในฟังก์ชั่นอื่น (forEach)

2. ใน Exercise นี้ ฟังก์ชันใดเป็น Higher Order Function?
  Answer: Higher Order Function คือ "ฟังก์ชั่น forEach" เนื่องจากมีการรับฟังก์ชั่นอื่น (addSalary5000) มาเป็น parameter
====================================
*/
