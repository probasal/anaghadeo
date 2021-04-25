jQuery(document).ready(function($){

	var contentSections = $('.cd-section'),

		navigationItems = $('#cd-vertical-nav a');

		

		var $logo = $('.logo');

		$logo.hide();

	

	updateNavigation();

	$(window).on('scroll', function(){

		updateNavigation();

	});



	//smooth scroll to the section

	navigationItems.on('click', function(event){

        event.preventDefault();

        smoothScroll($(this.hash));

    });

    //smooth scroll to second section

    $('.cd-scroll-down').on('click', function(event){

        event.preventDefault();

        smoothScroll($(this.hash));

    });



    //open-close navigation on touch devices

    $('.touch .cd-nav-trigger').on('click', function(){

    	$('.touch #cd-vertical-nav').toggleClass('open');

  

    });

    //close navigation on touch devices when selectin an elemnt from the list

    $('.touch #cd-vertical-nav a').on('click', function(){

    	$('.touch #cd-vertical-nav').removeClass('open');

    });



	function updateNavigation() {

		contentSections.each(function(){

			$this = $(this);

			var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;

			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {

				navigationItems.eq(activeSection).addClass('is-selected');

			}else {

				navigationItems.eq(activeSection).removeClass('is-selected');

			}

		});

	}



	function smoothScroll(target) {

        $('body,html').animate(

        	{'scrollTop':target.offset().top},

        	600

        );

	}



	$('#animate-btn').click(function(event) {

		

		$('.welcome-page').addClass('fadeOutUp');

		$(this).hide();



	  	setTimeout( function(){

			$logo.show(1000);	

			$( ".left-curtain" ).animate({"left": "-=43%"},2000, "linear", function() {

		    	$('#video1')[0].play();

		  	});



			$( ".right-curtain" ).animate({"right": "-=43%"},2000, "linear", function() {

		    	//alert('complete');

		  	});



  		}, 1000);



	});

	

	$('#animate-btn4').click(function(event) {

		

		$('.welcome-page').addClass('fadeOutUp');

		$(this).hide();



	  	setTimeout( function(){

			$logo.hide();	

			$( ".left-curtain" ).animate({"left": "-=43%"},2000, "linear", function() {

		    	$('#video1')[0].play();

		  	});



			$( ".right-curtain" ).animate({"right": "-=43%"},2000, "linear", function() {

		    	//alert('complete');

		  	});



  		}, 1000);



	});

	

	$('#animate-btn').click(function() {

		

		$logo.hide();

	});

	

	$logo.click(function(){

		$(this).fadeOut(2000);

	});



	$('.cd-horizontal-nav a').click(function(event) {

		$('.cd-horizontal-nav a').removeClass('nav-selected');

		$(this).addClass('nav-selected');

	});



	(function(){

	     if (screen.width <= 600) {

	        window.location = "https://anaghadeo.com/m-version/index.html";

	      }

	})();



	// $( window ).resize(function() {

		

	//   if ($( window ).width() <= 600) {

	//      window.location = "http://www.anaghadeo.com/m-version/index.html";

	//    }else{

	//         window.location = "http://www.anaghadeo.com/demo/index.html";

	//    }

	// });



});