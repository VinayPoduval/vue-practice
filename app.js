const app = Vue.createApp({
    data() {
        return {
            showData: true,
            players: [
                {name: 'Kohli', type: 'Batsman', img: 'assets/1.png', isFav: true},
                {name: 'Bumrah', type: 'Bowler', img: 'assets/2.png', isFav: false},
                {name: 'Hardik', type: 'All-rounder', img: 'assets/3.png', isFav: false},
            ],
            x: 0,
            y: 0
        }
    },
    methods: {
        toggleData() {
            this.showData = !this.showData;
        },
        toggleFav(player) {
            player.isFav = !player.isFav;
        }/*,
        handleEvent(e, data) {
            console.log(e, e.type);
            if(data) {
                console.log(data);
            }
        },
        handleMouseMove(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        }*/
    },
    computed: {
        favPlayers() {
            return this.players.filter(player => player.isFav);
        }
    }
});

app.mount('#app');