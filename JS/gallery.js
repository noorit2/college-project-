function upDate(previewPic){
    var x=document.getElementById('image');
    x.style.backgroundImage='url('+previewPic.src+')'; //previewPic.src is a string.
    x.innerHTML=previewPic.alt;
      }
  
      function unDo(){
    var x=document.getElementById('image');
      x.innerHTML="Hover over an image below to display here.";
      x.style.backgroundImage="url('')"
      }