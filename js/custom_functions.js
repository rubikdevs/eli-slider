// scroll to top functionality
scrollObj = $('.scroll_me');
scrollAppearTime = 500;

function scrollAnimate( n , easingMethod ){
	scrollObj.stop().animate({
		bottom: n + 'px'
	},scrollAppearTime, easingMethod )
}

$(window).scroll(function(){
  if ($(this).scrollTop() > 600) {
  	scrollAnimate( 80 , 'easeOutExpo');
  } else {
  	scrollAnimate( -80 );
  }
});

$('.scroll_me').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
  return false;
});

// Fixed scrollSpy menu
var fixedMenu = $('.light_blue'),
	logo = $('.logo'),
	menuItems = $('.menu a');
var menuAnimateTime = 200;

$(window).scroll(function(){
	if ($(this).scrollTop() > 50){
		fixedMenu.stop().animate({
			height: '50px'
		},menuAnimateTime);
		logo.stop().animate({
			'padding-top': '7px'
		},menuAnimateTime);

		var menuPadding = 13;
		menuItems.stop().animate({
			'padding-top' : menuPadding + 'px',
			'padding-bottom' : menuPadding + 'px',
		},menuAnimateTime)
	} else {
		fixedMenu.stop().css({
			height: '76px'
		});
		logo.stop().animate({
			'padding-top' : '20px'
		},1);
		menuItems.stop().animate({
			'padding-top' : '26px',
			'padding-bottom' : '26px'
		},1)
	}
});


// 
// ************************************
// scrollspy menu
// ************************************
// 

// Cache selectors
var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop - 36
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < (fromTop + 36))
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }                   
});


// call to colorbox
$(".group1").colorbox({rel:'group1'});
$(".callbacks").colorbox({
	onOpen:function(){ alert('onOpen: colorbox is about to open'); },
	onLoad:function(){ alert('onLoad: colorbox has started to load the targeted content'); },
	onComplete:function(){ alert('onComplete: colorbox has displayed the loaded content'); },
	onCleanup:function(){ alert('onCleanup: colorbox has begun the close process'); },
	onClosed:function(){ alert('onClosed: colorbox has completely closed'); }
});

$('.non-retina').colorbox({rel:'group5', transition:'none'})
$('.retina').colorbox({rel:'group5', transition:'none', retinaImage:true, retinaUrl:true});
$("#click").click(function(){ 
	$('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
	return false;
});