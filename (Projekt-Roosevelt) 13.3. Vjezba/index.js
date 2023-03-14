
let a;
function show_hide() 
{
    
    if(a==1)
    {
        document.getElementById('hiden_pages').style='display:none';
        document.getElementById('vjezbe').style='border-bottom-left-radius:10px; border-bottom-right-radius:10px;';
        return a=0;
    }
    else{
        document.getElementById('hiden_pages').style='display: inline-block;border-top:none;';
        document.getElementById('vjezbe').style='border-bottom-left-radius:0; border-bottom-right-radius:0;border-bottom:none;';
    return a=1;
    } 
}
