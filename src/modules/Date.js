export default class DateHandler {
    hours (time) {
        const hours = time.getHours()
        return this.setZero(hours)
    }

    minutes (time) {
        const minutes = time.getMinutes()
        return this.setZero(minutes)
    }

    seconds (time) {
        const seconds = time.getSeconds()
        return this.setZero(seconds)
    }

    setZero (number) {
        number = number < 10 ? '0' + number : number
        return number.toString()
    }

    getTime () {
        const time = new Date()
        
        return {
            hours: this.hours(time).split(''),
            minutes: this.minutes(time).split(''),
            seconds: this.seconds(time).split('')
        }
    }
}