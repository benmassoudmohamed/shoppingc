const tot=document.getElementById('total')


function increase(id,prix,ctn,chec){
    let inp=document.getElementById(id);
    let val=parseInt(inp.value);
    val++;
    inp.value=val;
    let price=document.getElementById(prix);
    price.innerHTML=`${ctn*val}$`;
    let checkitem=document.getElementById(chec)
    if(checkitem.checked)
    tot.innerHTML=`${parseInt(tot.innerHTML)+ctn}$`

}

function decrease(id,prix,ctn){
    let inp=document.getElementById(id);
    let val=parseInt(inp.value);
    if(val>0){
        val--;
    }else val=0;
    inp.value=val;
    let price=document.getElementById(prix);
    if(val>0)(price.innerHTML=`${ctn*val}$`);    
    
    

}
function total(chec,price){
    let checkitem=document.getElementById(chec);
    if(checkitem.checked){
        let prix=document.getElementById(price);
        let sum=parseInt(tot.innerHTML)+parseInt(prix.innerHTML);
        tot.innerHTML=`${sum}$`;
    }
    else{
        let prix=document.getElementById(price);
        let sum=parseInt(tot.innerHTML)-parseInt(prix.innerHTML);
        tot.innerHTML=`${sum}$`;
    }


}

 
