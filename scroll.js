const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                entry.target.classList.remove("hide");
            } else {
                // Decide direction based on position
                const rect = entry.boundingClientRect;
                if (rect.top < 0) {
                    entry.target.classList.remove("show");
                    entry.target.classList.add("hide");
                } else {
                    entry.target.classList.remove("show");
                    entry.target.classList.remove("hide");
                }
            }
        });
    },
    {
        threshold: 0.2
    }
);

reveals.forEach(el => observer.observe(el));
