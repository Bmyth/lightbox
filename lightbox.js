$(function(){
	$(".photo").click(openLightbox);
	$(".overlay").click(closeLightbox);
	$(".overlay img").click(stay);
})

function openLightbox(){
	var src = $(this).find("img").attr("src");
	$(".overlay").fadeIn().find("img").attr("src", src);
}

function closeLightbox(){
	$(this).fadeOut();
}

function stay(){
	return false;
}