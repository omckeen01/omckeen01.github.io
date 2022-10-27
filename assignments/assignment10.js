
let Sam = {
  employeeName : "Sam",
  department: "Tech",
  designation: "Manager",
  salary: 40000,
  raiseeligible : true
}

let Mary = {
  employeeName : "Mary",
  department : "Finance",
  designation : "Trainee",
  salary: 18500,
  raiseeligible : true
}

let Bill = {
  employeeName : "Bill",
  department : "HR",
  designation : "Executive",
  salary : 21200,
  raiseeligible : false
}
console.log("Problem 1", [Sam, Mary, Bill]);


const company = {

  companyName : "Tech Stars",
  website : "www.techstars.site",
  employees: [Sam, Mary, Bill]
}
console.log("Problem 2", company);

let Anna = {
      employeeName : "Anna",
      department : "Tech",
      designation : "Executive",
      salary : 25600,
      raiseeligible : false
    }
  company.employees.push(Anna);
console.log("Problem 3", company);


let sum = 0;
for (let i = 0; i<company.employees.length; i++){
    sum+=company.employees[i].salary;
  }
console.log("Problem 4", company);


for (let i = 0; i<company.employees.length; i++){
  if(company.employees[i].raiseeligible){
  company.employees[i].salary*=1.1;
  company.employees[i].raiseeligible = false;
}
}
console.log("Problem 5", sum);


const peopleWFH = ['Anna', 'Sam'];

for (var i = 0; i<company.employees.length; i++){
  company.employees[i].wfh = peopleWFH.includes(company.employees[i].name);
}
console.log("Problem 6", company);
