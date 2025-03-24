// 
const date = new Date(), ni = document.querySelectorAll('img[nightsrc]');
ni.forEach(i => {
    // 18 ~ 30  -7
    const T = date.getHours() - 7;
    if (T >= 11 && T <= 23) {
        i.src = i.attributes.nightsrc.value
    }
})