let openmodal = document.getElementById("open");
let entrance = document.getElementById("entrance");
let modalentrance = document.getElementById("modalentrance");
let modalregistration = document.getElementById("modalregistration");
let registration = document.getElementById("registration");
let body = document.getElementById("body")


let registration2 = document.getElementById("registration2");
let entrance2 = document.getElementById("entrance2");



openmodal.addEventListener("click", function(){
    modalentrance.style.display = "block";
    entrance.style.color = "#F8B802";
    body.style.overflow = "hidden";
})



//Авторизация
registration.addEventListener("click", function(){
    entrance.style.color = "#fff";
    registration2.style.color ="#F8B802";

    modalentrance.style.display = "none";
    modalregistration.style.display = "block";

})

window.addEventListener("click", function () {
    if (event.target == modalentrance) {
        modalentrance.style.display = "none";
        body.style.overflowY = "scroll";
    } 
})



//Регистрация

entrance2.addEventListener("click", function(){

    entrance.style.color = "#F8B802";
    registration2.style.color ="#fff";

    modalentrance.style.display = "block";
    modalregistration.style.display = "none";
    

})

window.addEventListener("click", function () {
    if (event.target == modalregistration) {
        modalregistration.style.display = "none";
          body.style.overflowY = "scroll";
    } 
})





let mainimg = document.getElementById("main");
let mainbackgroundup = document.getElementById("backgroundup");
let mainbackgrounddown = document.getElementById("backgrounddown");



mainbackgroundup.addEventListener("click", function(){

    mainimg.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.39), rgba(0, 0, 0, 0.39)),url('Постеры/Big poster/dark  souls 3.jpg')"
   
})


mainbackgrounddown.addEventListener("click", function(){

    mainimg.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.39), rgba(0, 0, 0, 0.39)),url('Постеры/Big poster/HELLDIVERS 2 full hd.png')"

})







let image = 0;
const sliderLine = document.getElementById('slider-line');

document.getElementById('cardarrowdown').addEventListener('click', function(){
    image = image + 413;
    if (image > 1239) {
        image = 0;
    }
    sliderLine.style.top = -image + 'px';
});

document.getElementById('cardarrowup').addEventListener('click', function () {
    image = image - 413;
    if (image < 0) {
        image = 1239;
    }
    sliderLine.style.top = -image + 'px';
});


const changeText = () => {
   
    document.getElementsByClassName('text')[0].textContent = "DARK SOULS 3";
  }


  const changeText2 = () => {
   
    document.getElementsByClassName('text')[0].textContent = "HELLDIVERS 2";

  }



  
  //категории

  let buttonnew = document.getElementById("new");
  let buttonleaders =  document.getElementById("liders");
  let buttonpreorder =  document.getElementById("pre-order");
  let buttonsoulslike =  document.getElementById("soulslike");

  let newcards = document.getElementById("newcards")
  let leaderscards = document.getElementById("leaderscards")
  let preordercards = document.getElementById("pre-ordercards")
  let soulslikecards = document.getElementById("soulslikecards")


  buttonnew.addEventListener("click", function(){
    buttonnew.style.color ="#F8B802";
    buttonleaders.style.color ="#fff";
    buttonpreorder.style.color ="#fff";
    buttonsoulslike.style.color ="#fff";

    newcards.style.display = "flex";
    leaderscards.style.display = "none";
    preordercards.style.display = "none";
    soulslikecards.style.display = "none";

})

buttonleaders.addEventListener("click", function(){

    newcards.style.display = "none";
    leaderscards.style.display = "flex";
    preordercards.style.display = "none";
    soulslikecards.style.display = "none";

    buttonnew.style.color ="#fff";
    buttonleaders.style.color ="#F8B802";
    buttonpreorder.style.color ="#fff";
    buttonsoulslike.style.color ="#fff";
   
})


buttonpreorder.addEventListener("click", function(){

    newcards.style.display = "none";
    leaderscards.style.display = "none";
    preordercards.style.display = "flex";
    soulslikecards.style.display = "none";

    buttonnew.style.color ="#fff";
    buttonleaders.style.color ="#fff";
    buttonpreorder.style.color ="#F8B802";
    buttonsoulslike.style.color ="#fff";
   
})


buttonsoulslike.addEventListener("click", function(){

    newcards.style.display = "none";
    leaderscards.style.display = "none";
    preordercards.style.display = "none";
    soulslikecards.style.display = "flex";

    buttonnew.style.color ="#fff";
    buttonleaders.style.color ="#fff";
    buttonpreorder.style.color ="#fff";
    buttonsoulslike.style.color ="#F8B802";
   
})




let loginForm = document.getElementById('loginForm');
let registerForm = document.getElementById('registerForm');




registerForm.addEventListener('submit', function() {
    event.preventDefault();
    let username = document.getElementById('registermodallogin').value;
    let password = document.getElementById('registermodalpassword').value;
    localStorage.setItem(username, password);
    alert('Регистрация прошла успешно!');
    registerForm.reset();
});

loginForm.addEventListener('submit', function() {
    event.preventDefault();
    let loginUsername = document.getElementById('modallogin').value;
    let loginPassword = document.getElementById('modalpassword').value;
    if(localStorage.getItem(loginUsername) === loginPassword) {
        alert('Авторизация успешна!');
        modalentrance.style.display ="none";
        body.style.overflowY = "scroll";

    } else {
        alert('Неверное имя пользователя или пароль.');
    }
    loginForm.reset();
});


