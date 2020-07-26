
var list = document.getElementById('list');


function addtask() {
    var addbtn = document.getElementById('additems');
    var li = document.createElement('li');
    var litext = document.createTextNode(addbtn.value)
    li.appendChild (litext);
    list.appendChild(li)
    addbtn.value=" ";




    var del=document.createElement('button')
    del.setAttribute('class','btn')
    var deletetext=document.createTextNode('Delete')
    del.appendChild(deletetext)
    li.appendChild(del)
    del.setAttribute('onclick','deleteitem(this)')

    var editbtn= document.createElement('button')
    editbtn.setAttribute('class','btn')
    var edittext=document.createTextNode('Edit')
    editbtn.setAttribute('onclick','edititems(this)')
    editbtn.appendChild(edittext)
    li.appendChild(editbtn)
    li.appendChild(del)


}

function deleteitem(e)
{
    e.parentNode.remove()

}
function deleteall()
{
    list.innerHTML=' ';
}

function edititems(e)
{
   var val= e.parentNode.firstChild;
    var editvalue= prompt('Enter edit value...',val)
    e.parentNode.firstChild.nodeValue=editvalue;
}

