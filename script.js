/*function rd(_link) {
    let d = .3;
    let e = 0;
    const g = new Date().getTime();
    let l = false;
    try { clearInterval(ca); } catch (e) {}
        const ca = setInterval(function(){
        document.body.style.animation = undefined;
        document.body.style.opacity = 1 - easeOutQuart(e / 100);
        e = (new Date().getTime() - g) / 10 / d;
        e = Math.round(e * 100) / 100;
        if (e > 80 && l === false) {
            location.href = _link;
            l = true;
        }
        if (e > 2000) {
            clearInterval(ca);
            document.body.style.opacity = undefined;
            document.body.style.animation = "begin 1.6s cubic-bezier(0.25, 1, 0.5, 1);";
        }
    }, 1);
}*/
const As = document.querySelectorAll('a:not([target])');
As.forEach(i => {
    i.addEventListener("click", e => {
        if (e.ctrlKey||e.metaKey||e.altKey||e.shiftKey) return;
        e.preventDefault();
        console.log(e.target.href)
        document.body.style.opacity = 0;
        setTimeout(() => location.href = e.target.href, 300)
    })
})