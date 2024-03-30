
function Timmonan()
{
    var s = document.getElementById("thechon").value;
    var monan=["Pho","Bun","Banhmy"];
    for(var i =0;i<=monan.length;i++)
{
    if(s==monan[0])
    {
        document.getElementById("Bun").style.display="none";
        document.getElementById("Pho").style.display="block";
        document.getElementById("Banhmy").style.display="none";
    }
    else if(s==monan[1])
    {
        document.getElementById("Pho").style.display="none";
        document.getElementById("Bun").style.display="block";
        document.getElementById("Banhmy").style.display="none";
    }
    else if(s==monan[2])
    {
        document.getElementById("Pho").style.display="none";
        document.getElementById("Bun").style.display="none";
        document.getElementById("Banhmy").style.display="block";
    }
    else
    {
        document.getElementById("Pho").style.display="block";
        document.getElementById("Bun").style.display="block";
        document.getElementById("Banhmy").style.display="block";
    }
    var x = document.getElementById("chongiaTien").value;
    var tamgia1= document.getElementsByClassName("tamgia1");
    var tamgia2= document.getElementsByClassName("tamgia2");
    var d = document.getElementsByClassName("Themonan")
    if(x=="tamgia1")
    {
    for(let i =0;i<tamgia2.length;i++)
    {
        tamgia2[i].style.display = "none";
    }
    for(let i =0;i<tamgia1.length;i++)
    {
        tamgia1[i].style.display = "block";
    }
    

    }
    if(x=="tamgia2")
    {
    for(let i =0;i<tamgia1.length;i++)
    {
        tamgia1[i].style.display = "none";
    }
    for(let i =0;i<tamgia2.length;i++)
    {
        tamgia2[i].style.display = "block";
    }
    }
}
}

//Them tim cho mon an trong menu
function doiso()
{
    var s = parseInt(document.getElementById("daylaso").value);
    document.getElementById("daylaso").innerHTML="1201";
}
function doiso2()
{
    var s = parseInt(document.getElementById("daylaso").value);
    document.getElementById("daylaso").innerHTML="1200";
}
//kiem tra menu theo gia tien
