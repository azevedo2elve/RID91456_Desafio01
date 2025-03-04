function countNumbers() {
    const counters = document.querySelectorAll(".info h2");
    const speed = 50;

    console.log(counters);
    
    counters.forEach(counter => {
        const target = +counter.getAttribute("data-target");
        let count = 0;
        const increment = target / speed;

        const updateCounter = () => {
            count += increment;
            if (count < target) {
                counter.textContent = Math.floor(count);
                requestAnimationFrame(updateCounter);
            } else {            
                counter.textContent = target.toLocaleString();
            }
        };

        updateCounter();
    });
}

window.addEventListener("load", countNumbers);