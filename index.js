// Write your solution in this file!
const employee= {
    name:"Sam",
    streetAddress: "11 Broadway"
}


 function updateEmployeeWithKeyAndValue(employee, key, value) {
     let newEmployee={...employee}
     newEmployee.streetAddress= "11 Broadway"
    return newEmployee
 }
 updateEmployeeWithKeyAndValue(employee, key, value)




 function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value) {
     employee.streetAddress="12 Broadway"
    return employee
 }
 destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value2)


 function deleteFromEmployeeByKey(employee,key) {
    let firedEmployee={...employee}
    delete firedEmployee.name
    return firedEmployee
 }
 deleteFromEmployeeByKey(employee,key)


 function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name
    return employee
 }
 destructivelyDeleteFromEmployeeByKey(employee, key)