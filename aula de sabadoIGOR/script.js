

function validator() {
    const name = document.querySelector("#fname")
    const lastName = document.querySelector("#lname")
    const messageErro = document.querySelector(".message-erro")

    const nameValue = name.value;
    const lastNamevalue = lastName.value;

    if(nameValue === ""){
        name.classList.add("erro")
        messageErro.textContent = "this field is required"
    }
}