document.addEventListener("DOMContentLoaded", () => {
    const btnEl = document.getElementById("btn");
    const birthdayEl = document.getElementById("birthday");
    const resultEl = document.getElementById("result");
  
    function calculateAge() {
      const birthdayValue = birthdayEl.value;
      if (!isValidDate(birthdayValue)) {
        resultEl.innerText = "Please enter a valid date.";
        resultEl.style.color = "red";
        return;
      }
  
      const ageDetail = getAgeDetail(birthdayValue);
      resultEl.innerHTML = `Your age is ${ageDetail.years} ${ageDetail.years > 1 ? "years" : "year"} ${ageDetail.months} ${ageDetail.months > 1 ? "months" : "month"} and ${ageDetail.days} ${ageDetail.days > 1 ? "days" : "day"} old`;
      resultEl.style.color = "white";
    }
  
    function isValidDate(dateString) {
      const date = new Date(dateString);
      return !isNaN(date.getTime());
    }
  
    function getAgeDetail(birthdayValue) {
      const currentDate = new Date();
      const birthdayDate = new Date(birthdayValue);
      let years = currentDate.getFullYear() - birthdayDate.getFullYear();
      let months = currentDate.getMonth() - birthdayDate.getMonth();
      let days = currentDate.getDate() - birthdayDate.getDate();
  
      if (days < 0) {
        months--;
        days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
      }
  
      if (months < 0) {
        years--;
        months += 12;
      }
  
      return { years, months, days };
    }
  
    btnEl.addEventListener("click", calculateAge);
  
    // Optional: Update age dynamically as user types
    birthdayEl.addEventListener("input", () => {
      if (birthdayEl.value !== "") {
        calculateAge();
      } else {
        resultEl.innerText = "";
      }
    });
  });
  