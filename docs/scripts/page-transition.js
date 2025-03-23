const As = document.querySelectorAll('a:not([target])');
let inter;
As.forEach(i => {
    i.addEventListener("click", e => {
        if (e.ctrlKey||e.metaKey||e.altKey||e.shiftKey) return;
        try {
            const tu = new URL(e.target.href)
            if (tu.host !== location.host) {
                e.preventDefault()
                window.open(e.target.href, "_blank", "noreferrer").focus()
                return;
            }
            if (tu.pathname === location.pathname) return;
            e.preventDefault();
            document.body.classList.remove("load")
            inter = setInterval(() => document.body.style.opacity = 0)
            setTimeout(() => location.href = e.target.href, 300)
        } catch (er) {
            console.error(er)
            location.href = e.target.href
        }
    })
})

window.addEventListener('pageshow', e => {
    if (["reload", 'back_forward'].includes(performance.getEntriesByType("navigation")[0].type)) {
        console.log('welcome back...')
        try { clearInterval(inter) } catch (er) { console.error(er) }
        document.body.style.opacity = 1;
    }
});