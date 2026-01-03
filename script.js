const button = document.querySelector(".btn");
const birthday = document.querySelector("#birthday")
const p = document.querySelector(".result")

button.addEventListener("click" , () => {
  const birthdayValue = birthday.value;
  if(birthdayValue === "") {
    alert("Please insert the Age")
  } else{
    const age = getAge(birthdayValue);
    p.textContent = `Your Age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
})

function getAge (birthdayValue) {
  const currentDate = new Date()
  const birthdayDate = new Date(birthdayValue)
  let age = currentDate.getFullYear() - birthdayDate.getFullYear()
  const month = currentDate.getMonth() - birthdayDate.getMonth()

  if(month < 0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())) {
    age--;
  }
  
  return age;
  
}
