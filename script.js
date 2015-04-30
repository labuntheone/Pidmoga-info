$(document).ready(function()
{

var currentPosition = 0;
var slideWidth = 960;
var slides = $('.slide');
var numberOfSlides = slides.length;
var slideShowInterval;
var speed = 3000;

slideShowInterval = setInterval(changePosition, speed);
slides.wrapAll('<div id="slidesHolder"></div>');
slides.css({'float' : 'left'});
$('#slidesHolder').css('width', slideWidth * numberOfSlides);		

$('#button1').click(function()
{
currentPosition = 0;			
clearInterval(slideShowInterval);
slideShowInterval = setInterval(changePosition, speed);
moveSlide();
changeNav();
})
		
$('#button2').click(function()
{
currentPosition = 1;			
clearInterval(slideShowInterval);
slideShowInterval = setInterval(changePosition, speed);
moveSlide();
changeNav();
})
		
$('#button3').click(function()
{
currentPosition = 2;										
clearInterval(slideShowInterval);
slideShowInterval = setInterval(changePosition, speed);
moveSlide();
changeNav();
})

$('#button4').click(function()
{
currentPosition = 3;										
clearInterval(slideShowInterval);
slideShowInterval = setInterval(changePosition, speed);
moveSlide();
changeNav();
})
		
function changePosition()
{

if (currentPosition == numberOfSlides - 1)
{
currentPosition = 0;				
}

else
{
currentPosition++;				
}
moveSlide();
changeNav();

}

function changeNav()
{

if (currentPosition == 0)
{
$('#one').prop('checked', true);
$('#navtext1').css('color', '#29c5e6');
$('#navtext2').css('color', '#8f8f8f');
$('#navtext3').css('color', '#8f8f8f');
$('#navtext4').css('color', '#8f8f8f');
}			

if (currentPosition == 1)
{
$('#two').prop('checked', true);
$('#navtext1').css('color', '#8f8f8f');
$('#navtext2').css('color', '#29c5e6');
$('#navtext3').css('color', '#8f8f8f');
$('#navtext4').css('color', '#8f8f8f');
}

if (currentPosition == 2)
{
$('#three').prop('checked', true);
$('#navtext1').css('color', '#8f8f8f');
$('#navtext2').css('color', '#8f8f8f');
$('#navtext3').css('color', '#29c5e6');
$('#navtext4').css('color', '#8f8f8f');
}
if (currentPosition == 3)
{
$('#four').prop('checked', true);
$('#navtext1').css('color', '#8f8f8f');
$('#navtext2').css('color', '#8f8f8f');
$('#navtext3').css('color', '#8f8f8f');
$('#navtext4').css('color', '#29c5e6');
}

}

function moveSlide()
{
$('#slidesHolder')
.animate({'margin-left' : slideWidth*(-currentPosition)});
}

})