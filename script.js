const inputBox = document.querySelector(".inputfield input");
const inputBox = document.querySelector(".inputfield button");

inputBox.onkeyup = ()=>{
    let userData = inputBox.value;  // getting user entered value
    if(userData.trim()!=0){  //if user values are not only spaces
        addBtn.classList.add("active"); //active the add button
    }
}