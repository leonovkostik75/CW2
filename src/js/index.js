import $ from 'jquery';
import Masonry from 'masonry-layout';
import jQueryBridget from 'jquery-bridget';

jQueryBridget('masonry', Masonry,$);
  

// $(document).ready(() => {
//   $('.grid').masonry({
//   itemSelector: '.grid-item',
//   columnWidth: 160
// });
// });

// Masonry

var $masn = $('.pictures-package').masonry({
    itemSelector: '.item',
   columnWidth: '.grid-sizer',
});

            // search-form

function animated() {
    if(document.getElementById('search').style.opacity) then 
       (document.getElementByClassName('button').style.opacity = 1)
   ;    
};
animated();


             // Burgermenu

 
 document.getElementById("burger").addEventListener('click', function() {
  show()
});
function show(){
 document.getElementById("menu").classList.toggle("show");
};

 $('.pictures-package').masonry({
  itemSelector: '.item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});  


             // load all pictures

const URL = 'https://my-json-server.typicode.com/ha100790tag/baseBuildJS/images';
!function getResponse(targetUrl) {

    $.ajax({
        url: targetUrl,
        cache: false,
        success: function (respText) {
        	console.log(respText);
            respText.forEach((el, i) => {
                let pic = $('<img></img>');
                let dv = $('<div></div>');
                dv.addClass('item');
                let elType = el.type.toLowerCase();
                if ('presentation' != elType && 'illustration' != elType && 'photography' != elType) {
                    elType = 'other';
                }
                pic.addClass(elType + ' all');
                pic.attr({ 'src': el.url, 'alt': elType, 'id': el.id.toLowerCase() });
                dv.append(pic)
                // $(allpic).append(dv);
                $masn.append(dv)
				  .masonry( 'appended', dv)
				  // layout
				  .masonry();
				 
			 });
		 }
	});
}(URL);




                  //filter

$('.pic-menu-links').on('click', (e) => {
    $('.pic-item a').removeClass('all-active');
    $(e.target).addClass('all-active');
    let txt = $(e.target).text().toLowerCase();
    filerImg('allpic', txt);
});

function filerImg(imgContId, className) {
    Array.from($('#' + imgContId + ' img')).forEach((el) => {
        $(el).show();
        let element = $(el);
        if (!element.hasClass(className)) {
            element.hide();
        }
    });
};



// // Masonry

// var $masn = $('.pictures-package').masonry({
//     itemSelector: '.item',
//    columnWidth: '.grid-sizer',
// });