// ## Exercise #6: Optional Task

// Create a simple playlist application where users can add songs to a list. 
 
 let btn=document.getElementById('btn');


btn.addEventListener('click',function(){
    let soungname= document.getElementById('soungname');
let addsoungs=soungname.value ;



 if(addsoungs !== ""){
 let playlist=document.getElementById('playlist');
 let li =document.createElement('li');
 li.innerText=addsoungs;

 playlist.appendChild(li);

  addsoungs="";

 } 
else { 
  
    alert('Add soung')
} })
// ////////////////////////////////////
// beforelast task


let btn1 = document.getElementById('btn1');

btn1.addEventListener('click', function() {
    let password = document.getElementById('password');
    let passwordValue = password.value.trim();
    let password2 = document.getElementById('pas2');
    let pas2Value = password2.value.trim();
    let message = document.getElementById('message');

    let valid = true;

    if (passwordValue.length < 6) {
        message.textContent ="Password should contain 6 characters";
         valid = false;
    } else if (passwordValue !== pas2Value) {
        message.textContent = "The two password dont match";
        valid = false;
    } else {
        message.textContent = "";
    }

    if (valid) {
        alert("Scucsses");
    }
});


document.querySelectorAll('#password, #pas2').forEach(input => {
    input.addEventListener('input', function() {
        let passwordValue = document.getElementById('password').value.trim();
        let pas2Value = document.getElementById('pas2').value.trim();
        let message = document.getElementById('message');

        if (passwordValue.length >= 6 && passwordValue === pas2Value) {
            btn1.style.display = "block";
            message.textContent = "";
        } else {
            btn1.style.display = "none";
            if (passwordValue.length < 6) {
                message.textContent = "Password should contain 6 characters";
            } else if (passwordValue !== pas2Value) {
                message.textContent = "The two password dont match";
        }}
    });
});







