function enoughAirtime() {
    return {
        usage: '',
        available: 0,
        result: '',
        calculateAirtime() {
            const rates = { call: 2.75, sms: 0.65, data: 12 };
            const totalUsage = this.usage.split(',').reduce((total, item) => total + rates[item.trim()], 0);
            this.result = this.available >= totalUsage ? `R${this.available - totalUsage}` : 'Insufficient airtime';
        }
    };
}

document.addEventListener('alpine:init', () => {
    Alpine.data('enoughAirtime', enoughAirtime);
});
