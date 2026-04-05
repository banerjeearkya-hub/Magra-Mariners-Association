function toggleMenu(){
  document.getElementById("nav").classList.toggle("show");
}

function openForm(){
  window.open("https://docs.google.com/forms/d/e/1FAIpQLSfXPSrKrwspz8O48yFohvD2SqNnFkUHTdCs3mIlhVU8pu0cYQ/viewform", "_blank");
}

function openImage(img){
  document.getElementById("imgModal").style.display="block";
  document.getElementById("modalImg").src=img.src;
}

function closeImage(){
  document.getElementById("imgModal").style.display="none";
}