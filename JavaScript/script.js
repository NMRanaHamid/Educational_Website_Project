const logo = document.getElementById("logo");
function handleImageClick() 
{
    logo.style.transform = "rotate(360deg) scale(1.2)";
    setTimeout(() => 
    {
        logo.style.transform = "";
    }, 1000);

logo.addEventListener("click", handleImageClick); 
}
