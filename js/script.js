const gorgBlock = document.querySelector("#gorg");
const gifNM = document.querySelector("#gif_nm");
gifNM.src = "./gif/nm2.gif"
setTimeout(() => {
  gorgBlock.style.display = "flex";  
  gorgBlock.classList.add("gorg");
}, 4000);
