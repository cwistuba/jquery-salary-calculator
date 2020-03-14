$(document).ready(init);

const employeeForm = [];

function init() {
  $(".js-add-employee-salary").on("submit", submitemployeeInfo);
}

function submitemployeeInfo(event) {
  console.log(event);
  event.preventDefault();

  const employeeInfo = {
    employeeNameFirst: $(".js-input-firstname").val(),
    employeeNameLast: $(".js-input-lastname").val(),
    employeeID: parseFloat($(".js-input-id").val()),
    employeeTitle: $(".js-input-title").val(),
    employeeSalary: parseFloat($(".js-input-salary").val())
  };
  employeeForm.push(employeeInfo);
  console.log(employeeForm);
}
