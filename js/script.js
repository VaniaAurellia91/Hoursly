const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

const sr = ScrollReveal ({
	distance: '30px',
	duration: 2600,
	reset: true
})

sr.reveal('.home-text',{delay:280, origin:'bottom'})

sr.reveal('.featured,.about,.cta,.new,.brand,.contact',{delay:200, origin:'bottom'})