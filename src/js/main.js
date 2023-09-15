const image1=document.querySelector("#img_1")

image1.addEventListener("mouseover",(e)=>
{
    image1.src="img/foto-normal_4.jpg";
})

image1.addEventListener("mouseleave",(e)=>
{
    image1.src="img/T-shirt_9.jpg";
})