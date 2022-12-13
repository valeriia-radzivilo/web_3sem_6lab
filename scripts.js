$(document).ready(function(){
  $("#submit_new_image").click(function(){
    if(document.getElementById("link_new_block").length !=0)
    {const para = document.createElement("div");
    para.classList.add("grid-item");
    const new_img = document.createElement("img");
    new_img.src = document.getElementById("link_new_block").value;
    para.appendChild(new_img);
    const element = document.getElementById("div1");
    element.appendChild(para);
    const max_am_bl = document.getElementById("amount_of_blocks");
    var x = max_am_bl.max;
    x++;
    max_am_bl.setAttribute("max",x);}
  });

  $("#set_amount_button").click(function(){
    var searchEles = document.getElementById("div1").children;
    const am_block = document.getElementById("amount_of_blocks");
    const max_am_bl = am_block.value;
    let i =0;
    for(let div_x of searchEles)
      {
        
        if(i<=max_am_bl){
          div_x.style.display ="none";
        }
        i++;
      }
      
      var x = am_block.max;
      alert(x);
      x=+x-+max_am_bl;
      alert(x);
      am_block.setAttribute("max",x);

  });

});

  