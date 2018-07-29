const config = {
    parts: 7,
    elementsOnPage: 6,
    defaultColor: '#181818',
    activeColor: 'red',
    dataWrapperAttr: 'data-clock-wrapper',
    defaultWidth: '100vw',
    positionMapper: {
        0: 'top',
        1: 'left-top',
        2: 'left-bottom',
        3: 'right-top',
        4: 'right-bottom',
        5: 'center',
        6: 'bottom'
    },

    update ({ property, value }) {
        this[property] = value
    }
}

export default config