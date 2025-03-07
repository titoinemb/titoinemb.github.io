setTimeout(() => {
  document.getElementById("hellokitty").style.display = "none";
  document.getElementById("body").style.backgroundColor = "#76ADFF";
  document.getElementById("body").style.backgroundImage = "url('./img/background.webp')";
  document.getElementById("body").style.display = "block";
  document.getElementById("body").style.flexDirection = "unset";
  document.getElementById("body").style.justifyContent = "unset";
  document.getElementById("app").style.display = "block";
}, 2000);