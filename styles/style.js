jQuery.noConflict();
jQuery(document).ready(function()
{
/*Slider*/	
jQuery(window).load( function() {
	jQuery(document).smoothSlides({
	duration: 5000
	});
});
/*Map*/	
var mycenter=new google.maps.LatLng(28.405595,77.189941);
function initialize(){var mapOptions={scrollwheel:false,draggable: false,panControl: false,minZoom:16,maxZoom:16,zoom:16,mapTypeId:google.maps.MapTypeId.ROADMAP,disableDefaultUI:true,center:mycenter,styles:[{featureType:'all',stylers:[{saturation:-100},{gamma:0.50}]}]};
var icon1="assets/locator_vector_black.png";
var icon2="img/locator_vector_color.png";
var url="";
var map=new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
var marker=new google.maps.Marker({position:mycenter,url:url,icon:icon1,});marker.setMap(map);
google.maps.event.addListener(marker,'click',function(){window.open(this.url);});}
google.maps.event.addDomListener(window,'resize',initialize);google.maps.event.addDomListener(window,'load',initialize);

document.querySelector('form.pure-form').addEventListener('submit', function (e) {
    e.preventDefault();
	console.log('First Name: ' + jQuery('input[name="Name"]').val());  
	console.log('Last Name: '+ jQuery('input[name="LastName"]').val());  
	console.log('Email: '+ jQuery('input[name="Email"]').val());  
	console.log('Gender: '+ jQuery("input[type='radio'][name='gender']:checked").val());
	
	var allInputs = jQuery("input[type='checkbox'][name='language']:checked");
	
	var checkboxValues = [];
	jQuery("input[type='checkbox'][name='language']:checked").map(function() {
				checkboxValues.push(jQuery(this).val());
	});
	console.log('Languages: '+ checkboxValues);
	/*jQuery("input[type='checkbox'][name='language']:checked").each(function() {
   		console.log('Language: '+this.value); 
   	}); */
	console.log('message:' + jQuery('textarea[name=contactmessage]').val());  
});
/*Map*/		
jQuery(function() {
	return jQuery("a").click(function() {
			var e;
			return e = jQuery(jQuery(this).attr("href")).offset().top - jQuery(this).data("offset"), jQuery("html, body").animate({
					scrollTop: e
			}, 700), !1
	})
});
/*Mobile Menu*/	
jQuery('span.menu-logo').click(function(e) {
	jQuery(".mobile-menu").css({'left':'0'});
	jQuery("body").css({'left':'-280px'});
	jQuery(".shade-bg").css({'display':'block'});
	jQuery(".mobile-menu").addClass('slide in');
	jQuery('.menu-close').css({'display':'block'});
});
jQuery('.shade-bg').click(function(e) {
	jQuery(".mobile-menu").css({'left':'-280px'});
	jQuery(".mobile-menu").addClass('slide in');
	jQuery(".shade-bg").css({'display':'none'});
	jQuery('.menu-close').css({'display':'none'});
});
jQuery('.menu-close').click(function(e) {
	jQuery(".mobile-menu").css({'left':'-280px'});
	jQuery(".mobile-menu").addClass('slide in');
	jQuery(".shade-bg").css({'display':'none'});
	jQuery('.menu-close').css({'display':'none'});
});	
jQuery('.mobile-menu ul li a').click(function(e) {
	jQuery(".mobile-menu").css({'left':'-280px'});
	jQuery(".mobile-menu").addClass('slide in');
	jQuery(".shade-bg").css({'display':'none'});
	jQuery('.menu-close').css({'display':'none'});
});


/*Form Validation*/		
jQuery('#contact-name').trigger("input");
jQuery('#contact-lastname').trigger("input");
jQuery('#contact-email').trigger("input");
jQuery('#contact-message').trigger("keyup");

jQuery('#contact-name').on('input', function() {
	var input=jQuery(this);
	var is_name=input.val();
	if(is_name){input.removeClass("invalid").addClass("valid");}
	else{input.removeClass("valid").addClass("invalid");}
});
jQuery('#contact-lastname').on('input', function() {
	var input=jQuery(this);
	var is_name=input.val();
	if(is_name){input.removeClass("invalid").addClass("valid");}
	else{input.removeClass("valid").addClass("invalid");}
});
jQuery('#contact-email').on('input', function() {
	var input=jQuery(this);
	var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	var is_email=re.test(input.val());
	if(is_email){input.removeClass("invalid").addClass("valid");}
	else{input.removeClass("valid").addClass("invalid");}
});
jQuery('#contact-message').keyup(function(event) {
	var input=jQuery(this);
	var message=jQuery(this).val();
	if(message){input.removeClass("invalid").addClass("valid");}
	else{input.removeClass("valid").addClass("invalid");}	
});

/*jQuery("#contact-submit").click(function(event){
	var form_data=jQuery("#contact").serializeArray();
	var error_free=true;
	for (var input in form_data){
		var element=jQuery("#contact_"+form_data[input]['name']);
		var valid=element.hasClass("valid");
		var error_element=jQuery("span", element.parent());
		if (!valid){error_element.removeClass("error").addClass("error_show"); error_free=false;}
		else{error_element.removeClass("error_show").addClass("error");}
	}
	if (!error_free){
		event.preventDefault(); 
	}
	else{
		alert('No errors: Form will be submitted');
	}
});*/
});		