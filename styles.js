/*Parallax*/


    function scrollFunction2() {
    var scroll = window.scrollY;
    var outer = document.getElementById("MiamiWare");
    var m = -0.10;
	var b = 6;
    var newTop = m*scroll + b;
    outer.style.backgroundPositionY = newTop + "px";
}

/*Scrollfire Function for About Images*/

    function scrollFunction() {
    var scroll = window.scrollY;
    var newimg = document.getElementById("tools");
    if (scroll > 100) {
    newimg.style.opacity = "2";
}
}

function scrollFunction1() {
    var scroll = window.scrollY;
    var newimg = document.getElementById("miamibeach");
    if (scroll > 900) {
    newimg.style.opacity = "2";
}
}

// scrollfunction Title Page

function scrollFunction3() {
 var msg  = document.title;
  var scroll = window.scrollY;
    if (scroll < 400) {
        document.title = "MiamiWare - Welcome"
    }
    if (scroll > 480) {
        document.title = "MiamiWare - About"
    }
    
    if (scroll > 2500) {
        document.title = "MiamiWare - Products"
    }
    
    if (scroll > 3200) {
        document.title = "MiamiWare - Account"
    }
    
    if (scroll > 3550) {
        document.title = "MiamiWare - References"
    }

}


/*COVID 19 BANNER*/
/* Get all elements with class="close" */

function closeButton() {
    var closebtns = document.getElementsByClassName("close");
    closebtns[0].parentElement.style.display = "none";
}


/* Loop through the elements, and hide the parent, when clicked on 
for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
  this.parentElement.style.display = null; 
      
  })
    
};

*/

// sticky header

window.addEventListener('scroll', function(e) {
    var header_top = document.getElementById("myHeader").offsetTop;
    if (window.pageYOffset  > header_top) {
        $('#myHeader').addClass('sticky');
    } else {
        $('#myHeader').removeClass('sticky');
    }
});



