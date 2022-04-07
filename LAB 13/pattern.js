function WithPattern() {
    let pattern = /J.m[a-z]+y/;
    alert(
      "Pattern is First char is J and third char is m and last char is y."
    );
    let word = prompt("Enter any word");
    if (pattern.test(word)) alert("Pattern is correct");
    else alert("Invalid Pattern");
  }
  