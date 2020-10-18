Vue.component('round-detail', {
    data() {
        return {
        }
    },
    props: {
        'number': {
            type: Number,
            default: 0
        },
        'winner': {
            type: String,
            default: ''
        }
    },
    template: '#round-detail',
});


// Initialize the root Vue instance
let app = new Vue({
    el: '#app',
    data: {
        played: false,
        choice: 'rock',
        picks: ['rock', 'paper', 'scissors'],
        computer: 'paper',
        userScore: 0,
        computerScore: 0,
        rounds: [],
        round: 1
    },
    methods: {
        play() {
            this.played = true;
            this.computer = this.picks[Math.floor(Math.random() * 3)];
            let winner = '';
            if (this.choice == this.computer) {
                winner = 'Its a Tie!';  
            }else if (this.choice == 'rock') {
                if (this.computer == 'paper') {
                    winner = 'Computer'
                    this.computerScore++
                }
                else if (this.computer == 'scissors') {
                    winner = 'You'
                    this.userScore++
                }
            }else if (this.choice == 'paper') {
                if (this.computer == 'scissors') {
                    winner = 'Computer'
                    this.computerScore++
                }
                else if (this.computer == 'rock') {
                    winner = 'You'
                    this.userScore++
                }
            }else if (this.choice == 'scissors') {
                if (this.computer == 'rock') {
                    winner = 'Computer'
                    this.computerScore++
                }
                else if (this.computer == 'paper') {
                    winner = 'You'
                    this.userScore++
                }
            }else{
                winner='something went wrong'
            }
            this.rounds.push({
                number: this.round++,
                winner: winner,
                computer: this.computer,
                choice: this.choice,
            })
        },
        reset() {
            this.userScore = 0
            this.computerScore = 0
            this.round = 1
            this.played = false
            window.location.reload()
        },
        deleteRound(roundNumber) {
            console.log('Invoked deleteRound from root Vue instance');
            function isMatchingRound(round) {
                return round.number != this;
            }
            this.rounds = this.rounds.filter(isMatchingRound, roundNumber);
        }
    }
});
