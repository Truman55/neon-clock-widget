import calcBorder from '../../utils/calculateBorderWidth'
import jss from '../../utils/jss'
import style from './style';

const sheet = jss.createStyleSheet(style)

class Render {
    constructor (selector) {
        this.config = config.default
        this.elementsOnPage = this.config.elementsOnPage
        this.dataWrapperAttr = this.config.dataWrapperAttr
        this.dataBorderAttr = 'data-border'
        this.targetSelector = selector

        this.init()
    }

    getHTMLElement (element) {
        return document.createElement(element)
    }

    getWrapper () {
        const wrapper = this.getHTMLElement('div')
        wrapper.className = sheet.classes['clock-face']
        wrapper.setAttribute(this.dataWrapperAttr, '')
        
        return wrapper
    }

    findElement (selector) {
        return document.querySelector(selector)
    }

    insertBorder (part, index) {
        const bordersQuantity = 2
        
        let i = 0
        while (i < bordersQuantity) {
            const border = this.getHTMLElement('span')
            border.className = sheet.classes[`part-border-${this.config.positionMapper[index]}`]
            border.setAttribute(this.dataBorderAttr, '')

            part.appendChild(border)
            i++
        }

        return part
    }

    insertParts (wrapper) {
        let i = 0
        while (i < this.config.parts) {
            let part = this.getHTMLElement('span')
            part.className = `${sheet.classes['clock-part']} ${sheet.classes[`clock-part-${i}`]}`
            part.setAttribute('data-part', this.config.positionMapper[i])
            part = this.insertBorder(part, i)
            wrapper.appendChild(part)
            i++
        }

        return wrapper
    }

    init () {
        if (!this.targetSelector) {
            const error = new Error('Selector is not given!')
            error.name = 'Clock Widget Error'
            throw error
        }

        sheet.attach()
        const target = this.findElement(this.targetSelector)
        target.classList.add(sheet.classes['clock-main-wrapper'])
        target.style.maxWidth = this.config.defaultWidth


        let i = 0
        while (i < this.elementsOnPage) {
            let wrapper = this.getWrapper()
            wrapper = this.insertParts(wrapper)
            target.appendChild(wrapper)

            i++
        }

        calcBorder(`[${this.dataWrapperAttr}]`, `[${this.dataBorderAttr}]`)

        window.addEventListener('resize', () => {
            calcBorder(`[${this.dataWrapperAttr}]`, `[${this.dataBorderAttr}]`) 
        })
    }
}

export default Render