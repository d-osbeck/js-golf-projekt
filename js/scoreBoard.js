import Gamecontroller from "./gameController.js";

const gc = new Gamecontroller();

export default class Scoreboard{
    constructor() {
        this.numberInput = document.querySelector('#number-input');
        this.div = document.querySelector('div#counter-list');

        this.reset = document.querySelector('#reset');
        this.startGame = document.querySelector('.start-game');

        this.li = undefined;

        this.reset.addEventListener('click', (e) => this.reload(e));



        this.startGame.addEventListener('click', (e) => {
            this.addListItem(e);
            gc.createName(e);
        });

        // Tæller op og ned, kan ikke gå under 0
        var counterDecrease = document.querySelectorAll('.counter-decrease');
        var counterIncrease = document.querySelectorAll('.counter-increase');

        counterDecrease.forEach((counterDecrease) => {
            counterDecrease.addEventListener('click', (e) => {
                this.decrease(e);
            })
        })

        counterIncrease.forEach((counterIncrease) => {
            counterIncrease.addEventListener('click', (e) => {
                this.increase(e);
            })
        })


    }

    
    addListItem(){
        const number = document.querySelector('#number-input').value;
        for (let step = 0; step < number; step++) {
            this.createListItem();
        }
    }

    createListItem(){
        const li = document.createElement('li');
        li.className = 'input-group my-1';
        li.innerHTML = `
        <button class="btn btn-danger text-white btn-lg counter-decrease">-</button>
        <input type="text" class="form-control input-filed sum fs-4 text-center" value="">
        <button class="btn btn-success text-white btn-lg counter-increase">+</button>
        `;

        li.querySelector('.counter-decrease').addEventListener('click', (e) => {
            this.decrease(e);
        });

        li.querySelector('.counter-increase').addEventListener('click', (e) => {
            this.increase(e);
        });


        this.div.appendChild(li);
        this.numberInput.value = '';
    }

    deleteListItem(){
        const counterList = document.querySelector('#counter-list');
        counterList.removeChild(counterList.lastChild);
    }

    getTotal(){
        let arr = document.querySelectorAll('.sum');
        let total = 0;
        for(let i=0;i<arr.length;i++){
            if(parseInt(arr[i].value))
                total += parseInt(arr[i].value);
        }
        document.getElementById('total').value = total;
    }

    decrease(e){
        if(e.target.nextElementSibling.value > 0) {
            e.target.nextElementSibling.value-- }
        this.getTotal();
    }

    increase(e){
        e.target.previousElementSibling.value++;
        this.getTotal();
    }

    reload(e){
        location.reload();
    }

}
















