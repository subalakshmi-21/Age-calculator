//selecting output values
const output_year = document.querySelector(".output-year");
const output_month = document.querySelector(".output-month");
const output_day = document.querySelector(".output-day");

//selecting button
const submit_btn = document.querySelector(".submit-button");
let isValid = false;

//selecting input values
const input_day = document.querySelector("#day");
const input_month = document.querySelector("#month");
const input_year = document.querySelector("#year");

//selecting error values
const error_day = document.querySelector(".error-day");
const error_month = document.querySelector(".error-month");
const error_year = document.querySelector(".error-year");

input_day.addEventListener("input", (e) => {
    if(+input_day.value > 31){
        error_day.innerHTML = "Must be a valid date";
        isValid = false;
        return;
    }else{
        isValid = true;
        error_day.innerHTML = ""
    }
    if(+input_day.value === 0){
        error_day.innerHTML = "This field is required"
        isValid = false;
        return;
    }else{
        isValid = true;
        error_day.innerHTML = ""
    }
});

input_month.addEventListener("input", (e) => {
    if(+input_month.value > 12){
        error_month.innerHTML = "Must be a valid month";
        isValid = false;
        return;
    }else{
        isValid = true;
        error_month.innerHTML = ""
    }
    if(+input_month.value === 0){
        error_month.innerHTML = "This field is required"
        isValid = false;
        return;
    }else{
        isValid = true;
        error_month.innerHTML = ""
    }
});

input_year.addEventListener("input", (e) => {
    if(+input_year.value > 2023){
        error_year.innerHTML = "Must be a valid year";
        isValid = false;
        return;
    }else{
        isValid = true;
        error_year.innerHTML = ""
    }
    if(+input_year.value === 0){
        error_year.innerHTML = "This field is required"
        isValid = false;
        return;
    }else{
        isValid = true;
        error_year.innerHTML = ""
    }
});

submit_btn.addEventListener("click", calculateAge);

function calculateAge(){
    if(isValid){
        let birthday = `${input_month.value}/${input_day.value}/${input_year.value}`;
        console.log(birthday);
        let birthdayObject = new Date(birthday);
        let ageDiffMill = Date.now() - birthdayObject;
        let ageDate = new Date(ageDiffMill);
        let ageYears = ageDate.getUTCFullYear() - 1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDay();
        //Display output
        output_day.textContent = ageDay;
        output_month.textContent = ageMonth;
        output_year.textContent = ageYears;
    }else{
        alert("Error.")
    }
}

// function CalculateDate() {
//     if (isValid) {
//       let birthday = `${input_month.value}/${input_day.value}/${input_year.value}`;
//       console.log(birthday);
//       let birthdayObj = new Date(birthday);
//       let ageDiffMill = Date.now() - birthdayObj;
//       let ageDate = new Date(ageDiffMill);
//       let ageYears = ageDate.getUTCFullYear() - 1970;
//       let ageMonth = ageDate.getUTCMonth();
//       let ageDay = ageDate.getUTCDay();
//       // DISPLAYING EVERYTHING
//       output_day.textContent = ageDay;
//       output_month.textContent = ageMonth;
//       output_year.textContent = ageYears;
//     } else {
//       alert("error");
//     }
//   }