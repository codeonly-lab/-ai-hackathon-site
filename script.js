particlesJS("particles-js", {
    particles: {
        number: { value: 100 },
        size: { value: 3 },
        move: { speed: 2 },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#00ff00",
            opacity: 0.5
        },
        color: { value: "#ffff00" }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" }
        }
    }
});
