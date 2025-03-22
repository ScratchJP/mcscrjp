const As = document.querySelectorAll('a:not([target])');
As.forEach(i => {
    i.addEventListener("click", e => {
        if (e.ctrlKey||e.metaKey||e.altKey||e.shiftKey) return;
        try {
            const tu = new URL(e.target.href)
            if (tu.host !== location.host) {
                e.preventDefault()
                window.open(e.target.href, "_blank").focus()
                return;
            }
            if (tu.pathname === location.pathname) return;
            e.preventDefault();
            document.body.classList.remove("load")
            setInterval(() => document.body.style.opacity = 0)
            setTimeout(() => location.href = e.target.href, 300)
        } catch (er) {
            console.error(er)
            location.href = e.target.href
        }
    })
})