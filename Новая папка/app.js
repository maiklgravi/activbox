$(function(){

	/*fixed hader*/
	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();
	$(window).on("scroll load resize",function(){
		introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();
		if (scrollPos > introH) {
			header.addClass("fixed");
		}else{
			header.removeClass("fixed");
		}
	});

	/*Smoff scroll*/
	let nav = $("#nav");
	let navToggle = $("#navToggle")
	$("[data-scroll]").on("click",function(event){
		event.preventDefault();
		let blockID = $(this).data('scroll');
		let elementOffset = $(blockID).offset().top;

		nav.removeClass("show");
		
		$("html, body").animate({
			scrollTop: elementOffset -70
		},700);
	});




	/*nav toggle*/
	$("#navToggle").on("click",function(event){
		event.preventDefault();
		nav.toggleClass("show");
	});



	/*rewiews*/
	let slider =$("#rewiews__slaider");
	slider.slick({
  		infinite: true,
 		slidesToShow: 1,
  		slidesToScroll: 1,
  		fade:true,
  		arrows: false,
  		dots:true
	});
});	