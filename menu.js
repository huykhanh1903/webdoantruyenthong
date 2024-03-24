
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
}
}