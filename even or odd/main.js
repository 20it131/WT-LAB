let variable = prompt("Enter any random number");
let n = parseInt(variable);
let ele  = document.getElementById("evenOrodd");
ele.textContent = n;
if(n % 2 == 0){
    ele.style.backgroundColor = 'green';
}
else{
    ele.style.color = 'red';
}