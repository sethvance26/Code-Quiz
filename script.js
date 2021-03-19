var startBtn =$('.start-button');
var hideThis = $('.hideThis');
var answerHolder =$('#answerHolder');
var questionHolder =$('#questionHolder');
//--------------------------------
var arr = ['Answer1', 'Answer2', 'Answer3', 'Answer4'];
var instructions =$('.instructions');
var li = document.createElement('button');  




$(startBtn).click(function(){
  $(hideThis).hide();
  console.log("Hello");
 instructions.text('What is the most used coding language?')
   
 var arr = ['Answer1', 'Answer2', 'Answer3', 'Answer4'];
 var cont = document.getElementById('listEl');
 
 // create ul element and set the attributes.
 var ul = document.createElement('ul');
 ul.setAttribute('style', 'padding: 0; margin: 0;');
 ul.setAttribute('id', 'theList');
 
 for (i = 0; i <= arr.length - 1; i++) {
     var li = document.createElement('button');     // create li element.
     li.innerHTML = arr[i];      // assigning text to li using array value.
     li.setAttribute('style', 'display: block;');    // remove the bullets.
 
     ul.appendChild(li);     // append li to ul.
 }
 
 cont.appendChild(ul);       // add list to the container.
  

});




