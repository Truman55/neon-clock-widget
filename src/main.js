import DateHandler from './modules/Date'
import Render from './modules/render/Render'
import Neon from './modules/neon/Neon'

const date = new DateHandler()

class ClockApp {
    constructor (selector, options = {}) {
        this.selector = selector
        this.options = options
        this.updateOptions()
        this.init()
    }
    updateOptions() {
        Object.keys(this.options).map(property => {
            config.default.update({
                property,
                value: this.options[property]
            })
        })
    }
    init () {
        try {
            new Render(this.selector)
        } catch (e) {
            console.error(`${e.name}: ${e.message}`);
            return
        }

        const neon = new Neon()

        setInterval(() => {
            neon.destroy()
            const {hours, minutes, seconds} = date.getTime()
        
            let i = 0
            while (i < config.default.elementsOnPage) {
                switch (i) {
                    case 0:
                        neon.enable(hours[i], i)
                        break;
                    case 1:
                        neon.enable(hours[i], i)
                        break;
                    case 2: 
                        neon.enable(minutes[0], i)
                        break;
                    case 3:
                        neon.enable(minutes[1], i)
                        break;
                    case 4:
                        neon.enable(seconds[0], i)
                        break;
                    case 5:
                        neon.enable(seconds[1], i)
                        break;
                } 
                i++
            }
        
        }, 1000)
    }
}

module.exports = ClockApp
