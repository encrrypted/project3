document.addEventListener('DOMContentLoaded', 
 function() {
 var elems = document.querySelectorAll('.sidenav');
 var instances = M.Sidenav.init(elems);
 });
 document.addEventListener('DOMContentLoaded', 
 function() {
 var elems2 = document.querySelectorAll('.parallax');
 var instances = M.Parallax.init(elems2);
 });


 ScrollReveal().reveal('.nav-wrapper', { delay: 200, origin:'top'});
 ScrollReveal().reveal('.sub-header', { delay: 200, origin:'top'});
 ScrollReveal().reveal('#srvHeader', { delay: 400, origin:'right', distance:'200px'});
 ScrollReveal().reveal('#box-1', { delay: 400, origin:'bottom', distance:'50px'});
 ScrollReveal().reveal('#box-2', { delay: 600, origin:'bottom', distance:'50px'});
 ScrollReveal().reveal('#box-3', { delay: 800, origin:'bottom', distance:'50px'});
 ScrollReveal().reveal('#readyCont', { delay: 400, origin:'bottom', distance:'50px'});
 ScrollReveal().reveal('#teamBox1', { delay: 400, origin:'left', distance:'50px'});
 ScrollReveal().reveal('#teamBox2', { delay: 600, origin:'bottom', distance:'50px'});
 ScrollReveal().reveal('#teamBox3', { delay: 600, origin:'bottom', distance:'50px'});
 ScrollReveal().reveal('#teamBox4', { delay: 400, origin:'right', distance:'50px'});
 ScrollReveal().reveal('#footerContent1', { delay: 400, origin:'roght'});
 ScrollReveal().reveal('#footerContent2', { delay: 400, origin:'roght'});