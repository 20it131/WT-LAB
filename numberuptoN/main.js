let n = prompt("Enter any random number");
let ele  = document.getElementById("number");
ele.textContent = n;
let result = "";
for(let i=1; i<=n; i++){
    result += i + '<br>';
}
document.getElementById("elements").innerHTML = result;