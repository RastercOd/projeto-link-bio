function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light') //modelo mais simples para fazer

    const img = document.querySelector(".profile img")

    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar-light.png')
    } else {
        img.setAttribute('src', './assets/avatar.png')
    }
    //if(html.classList.contains('light')) {
    //    html.classList.remove('light')
    //} els {
    //    html.classList.add('light')
    //}

    
}