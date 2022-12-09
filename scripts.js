$(document).ready(function(){
  $("#submit_new_image").click(function(){
    const para = document.createElement("div");
    para.classList.add("grid-item");
    const new_img = document.createElement("img");
    new_img.src = document.getElementById("link_new_block").value;
    para.appendChild(new_img);
const element = document.getElementById("div1");
element.appendChild(para);
  });
});

  