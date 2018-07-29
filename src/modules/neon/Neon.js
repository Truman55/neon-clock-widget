class Neon {
    constructor () {
        this.numbersMapping = {
            0: [
                'top',
                'left-top',
                'left-bottom',
                'bottom',
                'right-bottom',
                'right-top',
            ],

            1: [
                'right-bottom',
                'right-top',
            ],

            2: [
                'top',
                'left-bottom',
                'bottom',
                'right-top',
                'center'
            ],

            3: [
                'top',
                'bottom',
                'right-bottom',
                'right-top',
                'center'
            ],

            4: [
                'left-top',
                'right-bottom',
                'right-top',
                'center'
            ],

            5: [
                'top',
                'left-top',
                'bottom',
                'right-bottom',
                'center'
            ],

            6: [
                'top',
                'left-top',
                'left-bottom',
                'bottom',
                'right-bottom',
                'center'
            ],

            7: [
                'top',
                'right-bottom',
                'right-top',
            ],

            8: [
                'top',
                'left-top',
                'left-bottom',
                'bottom',
                'right-bottom',
                'right-top',
                'center'
            ],

            9: [
                'top',
                'left-top',
                'bottom',
                'right-bottom',
                'right-top',
                'center'
            ],
        }
        this.wrapperElements = null
        this.init()
    }

    enable (number, wrapperNumber) {
        const numberArray = this.numbersMapping[number]
        const wrapper = this.wrapperElements[wrapperNumber]
        numberArray.forEach(element => {
            const domEl = wrapper.querySelector(`[data-part="${element}"]`)
            domEl.classList.add('active')
            
            const borders = domEl.getElementsByTagName('span')
            for (let border of borders) {
                border.classList.add('active')
            }
        })
    }

    destroy () {
        for (let wrapElement of this.wrapperElements) {
            const activeParts = wrapElement.querySelectorAll('.active')
            for (let activePart of activeParts) {
                activePart.classList.remove('active')
            }
        }
    }

    init () {
        this.wrapperElements = document.querySelectorAll(`[${config.default.dataWrapperAttr}]`)
    }
}

export default Neon