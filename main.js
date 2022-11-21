menuListArray = ["Pizza Vegetariana",
"Pizza de frango","pizza portuguesa","Pizza quatro queijos","Pizza de calabresa","extravaganza"  ];

function getMenu(){
var htmldata;
for (var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+ menuListArray[i] + '<br>'
}
document.getElementById("displayMenu").innerHTML = htmldata;
}

function addItem(){
var htmldata;
var item=document.getElementById("addItem").value;
var imgtags='<img id="im1" src="images/pizzaImg.png" />'
menuListArray.sort()
htmldata=""
for (var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+imgtags+ menuListArray[i] + '<br>'}
//Completar o código

}

function addTop(){
    var item=document.getElementById("addItem").value;
    menuListArray.push(item);
    addItem();
}