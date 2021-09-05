class Calculator{
    constructor(oncekiSayi, sonrakiSayi) {
        this.oncekiSayi = oncekiSayi;
        this.sonrakiSayi = sonrakiSayi;
        this.clear();
    }

    clear(){
        this.sonrakiSayi = '';
        this.oncekiSayi = '';
        this.operation = undefined;
    }

    delete(){

    }

    sayiEkle(sayi){
        if (sayi === '.' && this.sonrakiSayi.includes('.')) return;
        this.sonrakiSayi = this.sonrakiSayi.toString() + sayi.toString();
    }

    islemSec(operation){
        this.operation = operation;
        if (this.sonrakiSayi === '') return;
        if (this.oncekiSayi !== ''){
            this.isle();
        }
        this.oncekiSayi = this.sonrakiSayi;
        this.sonrakiSayi = '';
    }

    isle(){
        let islem;
        const prev = parseFloat(this.oncekiSayi);
        const current = parseFloat(this.sonrakiSayi);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation){
            case '+':
                islem  = prev + current;
                console.log('Toplama');
                break;
            case '-':
                islem = prev - current;
                console.log('Cıkarma');
                break;
            case '/':
                islem = prev / current;
                console.log('Bolme');
                break;
            case '*':
                islem = prev * current;
                console.log('Carpma');
                break;
            default:
                return;
        }
        this.sonrakiSayi = islem;
        this.operation = undefined;
        this.oncekiSayi = '';
    }

    ekraniGuncelle(){
        sonrakiSayiElementi.innerText = this.sonrakiSayi;
        if (this.operation != null){
            oncekiSayiElementi.innerText = `${this.oncekiSayi} ${this.operation}` ;
        }
    }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const esittirButton = document.querySelector('[data-esittir]');
const oncekiSayiElementi = document.querySelector('[data-onceki]');
const sonrakiSayiElementi = document.querySelector('[data-sonraki]');
const hepsiniSil = document.querySelector('[data-sil]');




const calculator = new Calculator(oncekiSayiElementi,sonrakiSayiElementi);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.sayiEkle(button.innerText);
        calculator.ekraniGuncelle();
    })
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.islemSec(button.innerText);
        calculator.ekraniGuncelle();
    })
});
esittirButton.addEventListener('click', () => {
    calculator.isle();
    calculator.ekraniGuncelle();
});

hepsiniSil.addEventListener('click', () => {
    calculator.clear();
    calculator.ekraniGuncelle();
});