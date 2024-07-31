function totalPhoneBill() {
    return {
        phoneUsage: '',
        total: 0,
        calculateBill() {
            const calls = this.phoneUsage.split(',').filter(item => item.trim() === 'call').length;
            const sms = this.phoneUsage.split(',').filter(item => item.trim() === 'sms').length;
            this.total = (calls * 2.75) + (sms * 0.65);
        }
    };
}

document.addEventListener('alpine:init', () => {
    Alpine.data('totalPhoneBill', totalPhoneBill);
});
