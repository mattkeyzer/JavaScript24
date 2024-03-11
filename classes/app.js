class VideoGame {
    constructor(players, name, maturity, console){
        this.players = players;
        this.name = name;
        this.maturity = maturity;
        this.console = console;
    }

    vgStats() {
        document.getElementById('players').textContent = this.players;
        document.getElementById('name').textContent = this.name;
        document.getElementById('maturity').textContent = this.maturity;
        document.getElementById('console').textContent = this.console;
    }
}

const needforspeed = new VideoGame(4, 'Need For Speed', 'Teen', 'all');
needforspeed.vgStats();