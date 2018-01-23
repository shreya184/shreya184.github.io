
/* =Center and Outline
-------------------------------------------------------------- */
function centerInit() {
	var heroContent = $('.hero-content', '#first_slide'),
	contentMargin = ($(window).height() - heroContent.height()) / 3;
	heroContent.css({
		"margin-top": contentMargin + "px"
	});
}

// Transformation of blocks

/*! foreach.js v1.1.0 | (c) 2014 @toddmotto | https://github.com/toddmotto/foreach */

// ---------------------------------------------------------------------------------------
// PHOTOSWIPE INIT SCRIPT
// ---------------------------------------------------------------------------------------
var initPhotoSwipe, pde;
pde = function(e) {
	if (e.preventDefault) {
		e.preventDefault();
	} else {
		e.returnValue = false;
	}
};

initPhotoSwipe = function(galleryLinkClass) {
	var hashData, openPhotoSwipe, parseLinks, photoswipeParseHash;
	parseLinks = function(links, galleryUID) {
		var item, j, len, link, results;
		results = [];
		for (j = 0, len = links.length; j < len; j++) {
			link = links[j];
			img = link.getElementsByTagName('img')[0];
			if (!link.getAttribute('data-pswp-uid') || galleryUID === parseInt(link.getAttribute('data-pswp-uid'), 10)) {
				results.push(item = {
					el: link,
					src: link.getAttribute('href'),
					w: parseInt(img.getAttribute('data-width'), 10),
					h: parseInt(img.getAttribute('data-height'), 10)
				});
			}
		}
		return results;
	};
	photoswipeParseHash = function() {
		var hash, j, len, pair, params, ref;
		hash = window.location.hash.substring(1);
		params = {};
		if (hash.length < 5) {
			return params;
		}
		ref = hash.split('&');
		for (j = 0, len = ref.length; j < len; j++) {
			pair = ref[j];
			if (!pair) {
				continue;
			}
			pair = pair.split('=');
			if (pair.length < 2) {
				continue;
			}
			params[pair[0]] = pair[1];
		}
		if (params.gid) {
			params.gid = parseInt(params.gid, 10);
		}
		if (params.hasOwnProperty('pid')) {
			params.pid = parseInt(params.pid, 10);
		}
		return params;
	};
	openPhotoSwipe = function(index, galleryUID) {
		var gallery, galleryLinks, items, options, pswpElement;
		if (galleryUID == null) {
			galleryUID = 0;
		}
		pswpElement = document.querySelectorAll('.pswp')[0];
		galleryLinks = document.querySelectorAll(galleryLinkClass);
		items = parseLinks(galleryLinks, galleryUID);
		options = {
			index: index,
			history: false,
			captionEl: false,
			fullscreenEl: false,
			zoomEl: false,
			shareEl: false,
			counterEl: false,
			galleryUID: galleryUID,
			closeOnScroll: false,
			bgOpacity: 0.9,
			getThumbBoundsFn: function(index) {
				var pageYScroll, rect, thumbnail;
				thumbnail = items[index].el.getElementsByTagName('img')[0];
				pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
				rect = thumbnail.getBoundingClientRect();
				return {
					x: rect.left,
					y: rect.top + pageYScroll,
					w: rect.width
				};
			}
		};
		gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
		return gallery.init();
	};
	$(document).on('click', galleryLinkClass, function(e) {
		pde(e);
		return openPhotoSwipe($(this).data('img-index'), $(this).data('pswp-uid'));
	});
	hashData = photoswipeParseHash();
	if (hashData.pid > 0 && hashData.gid > 0) {
		openPhotoSwipe(hashData.pid, hashData.gid);
	}
}
// -------------------------------------------------------------------------------------------
// MAIN CUSTOM SCRIPTS
// -------------------------------------------------------------------------------------------
$(document).ready(function() {
	'use strict';

	// ---------------------------------------------------------------------------------------
	// SCRIPT FOR TRANSLATE Y-AXIS MENU BUTTON IN MOBILE
	// ---------------------------------------------------------------------------------------
	var $window = $(window),
    lastScrollTop = 0;

	function onScroll (e) {
	    var top = $window.scrollTop();
	    if (lastScrollTop > top) {
	        $('#name1, #name2, #name3').removeClass('goUp');
	        $('.button', '#left_menu').removeClass('goUp');
	    } else if (lastScrollTop < top) {
	        $('#name1, #name2, #name3').addClass('goUp');
	        $('.button', '#left_menu').addClass('goUp');
	    }
	    lastScrollTop = top;
	}

	$window.on('scroll', onScroll);

	// -------------------------------------------------------------------------------------
	// SCRIPT FOR SHOW/HIDE NAME ON RIGHT OF MENU BUTTON AND SHOW/HIDE SOCIAL ICONS IN BODY
	// -------------------------------------------------------------------------------------
	var winheight = $(window).height();
	var winheightst = $(window).height()-94;
	var footersocCont = $("#footer_soc_container");
	var name1 = $('#name1');
	var name2 = $('#name2');
	var leftMenu = $('#left_menu');

	if($(window).scrollTop()>winheight){
		if(!footersocCont.hasClass('footer_soc_icons_show') && !leftMenu.hasClass('lm_active')){
			footersocCont.addClass('footer_soc_icons_show');
			setTimeout(social_delay, 1500);
			function social_delay () {
				footersocCont.toggleClass('social_no_delay');
			}
		}
	}

	if($(window).scrollTop()>winheightst){
		name2.fadeIn(50);
	}

	$(window).scroll(function() {
		if($(window).scrollTop()>winheight){
			name1.fadeOut(50);
		}
		if($(window).scrollTop()>winheightst){
			name2.fadeIn(50);
		}
		if($(window).scrollTop()<winheightst){
			name2.fadeOut(50);
		}
		if($(window).scrollTop()<winheight){
			name1.fadeIn(50);
		}

		if($(window).scrollTop()>winheight){
			if(!footersocCont.hasClass('footer_soc_icons_show') && !leftMenu.hasClass('lm_active')){
				footersocCont.addClass('footer_soc_icons_show');
				setTimeout(social_delay, 1500);
				function social_delay () {
					footersocCont.toggleClass('social_no_delay');
				}
			}
		} else if($(window).scrollTop()<winheight) {
			if(footersocCont.hasClass('footer_soc_icons_show') && !leftMenu.hasClass('lm_active')){
				footersocCont.removeClass('footer_soc_icons_show');
				setTimeout(social_delay, 1500);
				function social_delay () {
					footersocCont.toggleClass('social_no_delay');
				}
			}
		}
	});
	
	// ---------------------------------------------------------------------------------------
	// SCROLL TO BOTTOM SCRIPT
	// ---------------------------------------------------------------------------------------
	$(this).on('click', '.button_bot', function() {
		var scrollheight = winheight;
		$('html,body').animate({"scrollTop":winheight}, 500);
	});

	// ---------------------------------------------------------------------------------------
	// SCROLLER INIT(FOR PARALLAX)
	// ---------------------------------------------------------------------------------------
	skrollr.init({
		mobileCheck: function() {
			//hack - forces mobile version to be off
			return false;
		}
	});

	// ---------------------------------------------------------------------------------------
	// SCRIPT FOR SHOW/HIDE NAVIGATION
	// ---------------------------------------------------------------------------------------
	$('#left_menu > .button').on('click', function(){
		var mainWorkflow = $('#main_workflow');
		if($(this).parent().hasClass('lm_active')){
			$(this).parent().addClass('stop_animation');
			$('.social_icon', '#left_menu').toggleClass('social_no_delay');
		} else {
			$(this).parent().removeClass('stop_animation');
			setTimeout(social_delay, 1500);
			function social_delay () {
				$('.social_icon', '#left_menu').toggleClass('social_no_delay');
			}
		}
		$(this).toggleClass('b_active');
		$(this).parent().toggleClass('lm_active');
		mainWorkflow.toggleClass('mw_active');
		mainWorkflow.toggleClass('pushReady');
		mainWorkflow.toggleClass('pushLeft');
		$('.name').toggleClass('n_active');
		$('#menu_active_overlay').toggleClass('lm_bg_active');
	});

	$('#left_menu .button_menu').on('click', function(e){
		var mainWorkflow = $('#main_workflow');
		e.preventDefault();
		var this_link = $(this);
		if($(this).parents('#left_menu').hasClass('lm_active')){
			$(this).parents('#left_menu').addClass('stop_animation');
			$('.social_icon', '#left_menu').toggleClass('social_no_delay');
		} else {
			$(this).parents('#left_menu').removeClass('stop_animation');
			setTimeout(social_delay, 1500);
			function social_delay () {
				$('.social_icon', '#left_menu').toggleClass('social_no_delay');
			}
		}
		$(this).parents('#left_menu').find('.button').toggleClass('b_active');
		$(this).parents('#left_menu').toggleClass('lm_active');
		mainWorkflow.toggleClass('mw_active');
		mainWorkflow.toggleClass('pushReady');
		mainWorkflow.toggleClass('pushLeft');
		$('.name').toggleClass('n_active');
		$('#menu_active_overlay').toggleClass('lm_bg_active');
		setTimeout(function() {
			var elementClick = this_link.attr("href");
			var scrollHeight = window.pageYOffset;
			console.log(scrollHeight);
			console.log($(elementClick).offset().top);
			var destination = $(elementClick).offset().top;
			jQuery("html:not(:animated),body:not(:animated)").animate({
				scrollTop: destination
			}, 1000);
			return false;
		}, 700);
	});

	$('#menu_active_overlay').on('click', function(){
		var mainWorkflow = $('#main_workflow');
		if($('#left_menu').hasClass('lm_active')){
			$('#left_menu').addClass('stop_animation');
		}
		else{
			$('#left_menu').removeClass('stop_animation');
		}
		$('.button', '#left_menu').toggleClass('b_active');
		$('#left_menu').toggleClass('lm_active');
		mainWorkflow.toggleClass('mw_active');
		mainWorkflow.toggleClass('pushReady');
		mainWorkflow.toggleClass('pushLeft');
		$('.name').toggleClass('n_active');
		$('#menu_active_overlay').toggleClass('lm_bg_active');
		$('.social_icon', '#left_menu').toggleClass('social_no_delay');
	});

	// ---------------------------------------------------------------------------------------
	// 3D GALLERY INIT
	// ---------------------------------------------------------------------------------------
	$('.project', '#my_projects').hover3d({
		selector: ".project__card",
		shine: true
	});

	// ---------------------------------------------------------------------------------------
	// SHOW-HIDE COLORSWITCHER CONTAINER
	// ---------------------------------------------------------------------------------------
	$('.color_switch_container > .corner_button').on('click', function(){
		$(this).parent().toggleClass('corner_active');
	});

	// ---------------------------------------------------------------------------------------
	// PHOTOSWIPE INIT
	// ---------------------------------------------------------------------------------------
	initPhotoSwipe('.js-pswp-img-lk');

	var forEach = function (collection, callback, scope) {
		if (Object.prototype.toString.call(collection) === '[object Object]') {
			for (var prop in collection) {
				if (Object.prototype.hasOwnProperty.call(collection, prop)) {
					callback.call(scope, collection[prop], prop, collection);
				}
			}
		} else {
			for (var i = 0, len = collection.length; i < len; i++) {
				callback.call(scope, collection[i], i, collection);
			}
		}
	};

	// Get element's distance from the top of the page
	var getElemDistance = function (elem) {
		var location = 0;
		if (elem.offsetParent) {
			do {
				location += elem.offsetTop;
				elem = elem.offsetParent;
			} while (elem);
		}
		return location >= 0 ? location : 0;
	};

	var elems = document.querySelectorAll('.reveal');
	var Offset = 100;

	forEach(elems, function (element) {
		if (getElemDistance(element) > window.innerHeight) {
			// calculate the offset
			var ElemPos = getElemDistance(element) - window.innerHeight + Offset;
		} else {
			// if already in view port, set to -1 to reveal straight away
			var ElemPos = -1
		}
		var hr = new Headroom(element, {
			"offset": ElemPos,
			"tolerance": 5,
			classes : {
				initial : "revealer",
				pinned : "revealer--pinned",
				unpinned : "revealer--unpinned",
				top : "revealer--hide",
				notTop : "revealer--show",
				bottom : "revealer--bottom",
				notBottom : "revealer--not-bottom"
			}
		});
		hr.init();
	});

	// ---------------------------------------------------------------------------------------
	// BOTTOM FORM SUBMIT
	// ---------------------------------------------------------------------------------------
	$(this).on('submit', '.form_ajax', function(event){
		pde(event);
		var form = $(this);
		var msg = form.serialize();
		$.ajax({
			type: 'POST',
			url: 'php/ajax.php',
			data: msg,
			dataType: 'html',
			beforeSend: function(data){
				$('.bottom_form').addClass('bottom_form_element_hide');
				$('.three_dot').addClass('bottom_form_element_active');
			},
			success: function(data){
				setTimeout(function() { 
					$('.three_dot').addClass('bottom_form_element_hide');
					$('.three_dot').removeClass('bottom_form_element_active');
					$('.send_container').addClass('bottom_form_element_active');
					$('.bottom_form').removeClass('bottom_form_element_hide');
					$('.bottom_form').addClass('bottom_form_element_hide_left');
				}, 2000);
			},
			complete: function(data){
				setTimeout(function() { 
					$('.send_container').addClass('bottom_form_element_hide');
					$('.send_container').removeClass('bottom_form_element_active');
					$('.bottom_form').removeClass('bottom_form_element_hide_left');
					$('.three_dot').removeClass('bottom_form_element_hide');
					$('.send_container').removeClass('bottom_form_element_hide');
				}, 4000);
			}
		});
	});
});

// ----------------------------------------------------------------------------------------
// WIDNOW ONLOAD FUCTIONS
// ----------------------------------------------------------------------------------------
$(window).on('load', function() {

	// ---------------------------------------------------------------------------------------
	// PRELOADER SHOW/HIDE
	// ---------------------------------------------------------------------------------------
	var $preloader = $('#page-preloader'),
	$loader = $preloader.find('.wraper');
    $loader.fadeOut();
    $preloader.fadeOut();

	// ---------------------------------------------------------------------------------------
    // MAIN TOP IMAGE SHOW EFFECT
    // ---------------------------------------------------------------------------------------
    setTimeout(function(){ 
    	centerInit();
		$(window).resize(centerInit);
		$('.border_text', '#first_slide').addClass('border_text_show');
		$('.text_block', '#first_slide').addClass('text_block_show');
		$('.fsi_helper', '#first_slide').addClass('fsi_show');
		$('.name').addClass('name_show');
		$('#left_menu > .button').addClass('button_show');
		$('.button_bot', '#first_slide').addClass('button_bot_show');
    }, 100);
     setTimeout(function(){ 
		$('.name').addClass('nodelay');
    }, 800);

    // ---------------------------------------------------------------------------------------
    // PREPARATION IMAGES FOR PHOTOSWIPE
    // ---------------------------------------------------------------------------------------
	$('.prj_img', '#my_projects').each(function(i) {
		var imgForRect = $(this);
		var image;
		var isrc = 'url('+$(this).attr('src')+')';
		var helper = $(this).parent();
		helper.css('background-image', isrc);
		image = new Image();
		image.src = $(this).attr('src');
		$(this).attr('data-width', image.naturalWidth);
		return $(this).attr('data-height', image.naturalHeight);
	});
});


