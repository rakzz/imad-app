console.log('Loaded!');

//Change the text of the main-text div
var element= document.getElementById('main-text');

element.innerHTML='New Value';

var img=document.GetElementById('15');
var marginLeft=0;
function moveRight() {
    marginLeft = marginLeft + 10;
     img.style.marginLeft = marginLeft + 'px';
}
img.onclick=function(){
    var interval= setinterval(moveRight , 100);
};