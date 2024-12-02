const form =  document.getElementsByClassName("My-form")
const signup = document.getElementById("signup_btn")
const searchForm = document.getElementById('searchForm')

form[0].addEventListener("submit",(e)=>{
     e.preventDefault();
    const username = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;
    const checkbox = document.getElementById("exampleCheck1").checked;
 
    const userdata = {
        username : username,
        password : password,
        checked : checkbox
    }
    localStorage.setItem('userdata',JSON.stringify(userdata))
   
    console.log(username, password, checkbox);
    window.open("./search.html")
})


const values = JSON.parse(localStorage.getItem("data"))

function display(values){
 if(values){
    const h2 = document.createElement("h2")
    h2.innerHTML = values.username
   document.body.append(h2)


   const status = document.createElement("p");
   status.innerHTML = `the result is ${values.checked ? "yes":"no"}`
 }else{
    console.log("no data found")
 }

}

display(values);
signup.addEventListener("click",()=>{
    
if(signup){
    window.open("./signup.html")
}

})
