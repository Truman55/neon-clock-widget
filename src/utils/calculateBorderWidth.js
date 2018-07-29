export default function (wrapperSelector, borderSelector) {
    const wrapperElement = document.querySelector(wrapperSelector)
    const oneOfPart = wrapperElement.getElementsByTagName('span')[0]

    const borderWidth = (oneOfPart.getBoundingClientRect().height / 2).toFixed(2)
    const borders = document.querySelectorAll(borderSelector)

    let i = 0;
    for (let border of borders) {
        border.style.borderWidth = borderWidth + 'px'
        if (i % 2 !== 0) {
            border.style.right = (-borderWidth * 2) + 'px'
        } else {
            border.style.left = (-borderWidth * 2) + 'px'
        }

        i++
    }

}