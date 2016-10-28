var images, thumbWidth;
var count=0;
var imageArray = [
 				"images/f1.png",
 				"images/f2.png",
 				"images/f3.png",
 				"images/f4.png",
 				"images/f5.png",
 				"images/f6.png",
 				"images/f7.png",
 				"images/f8.png",
 				"images/f9.png",
 				// "images/f10.png",
 				];
function updateArrow()
{
	var totalNoImages= images.length;
	var galleryWidth=$("#gallery").css("width");
	galleryWidth= galleryWidth.slice(0, (galleryWidth.length - 2));
	noImagesAtATime=galleryWidth/thumbWidth;
	var lastCount=totalNoImages - noImagesAtATime;
	
	if(count == lastCount){
		
		$("#right").addClass("disabled");
	}else{
		$("#right").removeClass("disabled");
	}

	if (count == 0) {
		$("#left").addClass("disabled");
	}else{
		$("#left").removeClass("disabled");
	}
}



$(document).ready(function(){
	$.each(imageArray,function(index,value)
	{
		$("#upper").append("<img id=' img" + index +"' src= '" + value +"' >");
		$("#thumbs").append("<a href='#' class='thumb' id=' img" + index +"' > <img src='" + value +"'></a>");
	});

	images=$("#upper").find("img");
	thumbWidth=$(".thumb").css("width");
	thumbWidth= thumbWidth.slice(0, (thumbWidth.length - 2));

	updateArrow();

	$(".thumb").on("click",function(){
		var thumbId=$(this).attr("id");
		

		$.each(images, function(index,value){
			if(thumbId == $(value).attr("id")) {
				$(value).show();
			}else{
				$(value).hide();
			}
		});
	});

	$(".arrow").on("click", function(){
		var arrowId=$(this).attr("id");
		
		var scrollString;

		if(arrowId=="left"){
			scrollString = "+=";
			count--;
		}else{
			scrollString= "-=";
			count++;
		}

		$("#thumbs").animate({
			marginLeft: scrollString + thumbWidth + "px"}, "fast", updateArrow);
	});
});