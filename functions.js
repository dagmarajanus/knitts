function scrollTrigger(selector, options = {}) {
    let els = document.querySelectorAll(selector)
    els = Array.from(els)
    els.forEach(el => {
        addObserver(el, options)
    })
}

function addObserver(el, options) {
    if (!('IntersectionObserver' in window)) {
        if (options.cb) {
            options.cb(el)
        } else {
            entry.target.classList.add('active')
        }
        return
    }
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (options.cb) {
                    options.cb(el)
                } else {
                    entry.target.classList.add('active')
                }
                observer.unobserve(entry.target)
            }
        })
    }, options)
    observer.observe(el)
}

// scrollTrigger('.intro-text')

scrollTrigger('.scroll-reveal', {
    rootMargin: '-200px',
})

// scrollTrigger('.loader', {
//     rootMargin: '-200px',
//     cb: function(el) {
//         el.innerText = 'Loading...'
//         setTimeout(() => {
//             el.innerText = 'Task Complete!'
//         }, 1000)
//     }
// })

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        $("nav").addClass("bluenav");
    } else {
        $("nav").removeClass("bluenav");
    }
}