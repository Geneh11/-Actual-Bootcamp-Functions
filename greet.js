function greet() {
    return {
        name: '',
        language: 'en',
        greeting: '',
        greet() {
            const greetings = {
                en: 'Hello',
                es: 'Hola',
                fr: 'Bonjour',
                de: 'Hallo'
            };
            this.greeting = `${greetings[this.language]}, ${this.name}!`;
        }
    };
}

document.addEventListener('alpine:init', () => {
    Alpine.data('greet', greet);
});
