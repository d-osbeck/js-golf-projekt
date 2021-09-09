export default class Gamecontroller {
    constructor(){
        this.nameInput = document.querySelector('#player-name-input');
        this.playerName = document.querySelector('span#player-name');

    }

    createName() {
        const span = document.createElement('span');
        span.innerHTML = `${this.nameInput.value}`;
        this.playerName.appendChild(span);
        this.nameInput.value = '';
    }




}



