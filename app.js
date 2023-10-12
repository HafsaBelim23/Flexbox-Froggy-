const buttonElement = document.querySelector('button');

function addCSS(){
    const textAreaElement = document.querySelector('textarea')
    const css = textAreaElement.value
    const forefront = document.querySelector('#forefront')
    forefront.style.cssText = css
    console.log(forefront)

}

buttonElement.addEventListener('click', addCSS)
