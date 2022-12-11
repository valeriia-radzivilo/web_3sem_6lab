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

  $("#set_amount_button").click(function(){

    var searchEles = document.getElementById("div1").children;
    
    const max_am_bl = document.getElementById("amount_of_blocks").value;
    console.log(searchEles);
  });

});

  