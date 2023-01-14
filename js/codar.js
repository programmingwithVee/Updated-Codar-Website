document.querySelector("#img-1").addEventListener("click",function(){

  document.querySelector("#down").style.display="grid"
  document.querySelector("#side").style.display="none"
})

document.querySelector("#img-2").addEventListener("click",function(){

  document.querySelector("#up").style.display="grid"
  document.querySelector("#down").style.display="none"
  document.querySelector("#bottom").style.display="none"
})

document.querySelector("#img-3").addEventListener("click",function(){

  // document.querySelector("#side").style.display="grid"
  document.querySelector("#bottom").style.display="grid"
  document.querySelector("#down").style.display="none"
})