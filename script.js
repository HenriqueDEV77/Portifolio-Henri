document.addEventListener("DOMContentLoaded", function() {
    const sr = ScrollReveal({
        distance: '60px',
        duration: 400,
        delay: 50,
        reset: true
    });

    sr.reveal('.namelogo', { delay: 50, origin: 'top' });
    sr.reveal('.bx-menu', { delay: 50, origin: 'top' });
    sr.reveal('.topo p', { delay: 50, origin: 'top' });
    sr.reveal('.topo h1', { delay: 50, origin: 'top' });
    sr.reveal('.topo span', { delay: 100, origin: 'top' });
    sr.reveal('.fundoimg img', { delay: 150, origin: 'top' });
    
    sr.reveal('.interface h2', { delay: 50, origin: 'left' });
    sr.reveal('.cases-container', { delay: 100, origin: 'left' });
    sr.reveal('.case-box', { delay: 150, origin: 'left' });
    sr.reveal('.case-info', { delay: 200, origin: 'left' });
    
    sr.reveal('.sobre h1', { delay: 50, origin: 'left' });
    sr.reveal('.sobre .p', { delay: 100, origin: 'left' });
    
    sr.reveal('.reserved p', { delay: 50, origin: 'bottom' });
});
