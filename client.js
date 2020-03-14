$(document).ready(init);

const employeeForm = [];

function init() {
  $(".js-add-employee-salary").on("submit", submitemployeeInfo);
  $(".js-table-body").on("click", ".js-btn-dlt", dltEmployee);
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
  $(".js-input-firstname").val("");
  $(".js-input-lastname").val("");
  $(".js-input-id").val("");
  $(".js-input-title").val("");
  $(".js-input-salary").val("");

  render();
}

function render() {
  $(".js-table-body").empty();
  let totalMonthly = 0;

  for (let i = 0; i < employeeForm.length; i++) {
    let individualEmployee = employeeForm[i];
    totalMonthly += individualEmployee.employeeSalary / 12;

    $(".js-table-body").append(`
    <tr>
    <td>${individualEmployee.employeeNameFirst}</td>
    <td>${individualEmployee.employeeNameLast}</td>
    <td>${individualEmployee.employeeID}</td>
    <td>${individualEmployee.employeeTitle}</td>
    <td>${individualEmployee.employeeSalary}</td>
    <td><button class="js-btn-dlt" data-index="${i}">Delete</button></td>
    </tr>
    `);
  }
  console.log(totalMonthly);

  $(".js-total-monthly").text(totalMonthly);
}

function dltEmployee() {
  console.log("Dlt:", this);
  const employeeIndex = $(this).data("index");
  employeeForm.splice(employeeIndex, 1);
  render();
}
