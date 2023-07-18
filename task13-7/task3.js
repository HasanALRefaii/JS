let textarea = document.getElementById('textarea') ;

let fontType = document.getElementById("fontType");

fontType.onchange =function (){
   if (fontType.value == "font1") {
       textarea.style.fontFamily = "sans-serif";
   }
   else {
       textarea.style.fontFamily = "fantasy";
   }
}

let size =document.getElementById('size')
size.onchange = function (){
    if (size.value == "size1") {
        textarea.style.fontSize = "15px";
    }
    else {
        textarea.style.fontSize = "20px";
    }
 }

 var italic = document.getElementById("italic");
 var bold = document.getElementById("bold");
 var underline = document.getElementById("underline");
 


        italic.onclick = function(){
            if (italic.checked == true) {
            textarea.style.fontStyle = "italic";}
         else  {textarea.style.fontStyle = "normal";}}
        
         bold.onclick = function() {
            if (bold.checked == true)
           { textarea.style.fontWeight = "bold";}
         else  {textarea.style.fontWeight = "normal";}}
        
         underline.onclick = function() {
            if (underline.checked == true)
           { textarea.style.textDecoration = "underline";}
         else { textarea.style.textDecoration = "none";
        }
    }
        