AOS.init();


var myVar;

function myFunction() {
    myVar = setTimeout(showPage,3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("mainid").style.display = "block";
}
