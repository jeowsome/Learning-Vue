function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHp: 100,
      monsterHp: 100,
      turnCounter: 0,
      winner: null,
      logs: [],
    };
  },
  computed: {
    monsterBarStyle() {
      return { width: (this.monsterHp > 0 ? this.monsterHp : 0) + '%' };
    },
    playerBarStyle() {
      return { width: (this.playerHp > 0 ? this.playerHp : 0) + '%' };
    },
    specialToggle() {
      return this.turnCounter % 3 !== 0;
    },
  },
  watch: {
    playerHp(val) {
      if (val <= 0 && this.monsterHp <= 0) {
        this.winner = 'draw';
      } else if (val <= 0) {
        this.winner = 'monster';
      }
    },
    monsterHp(val) {
      if (val <= 0 && this.playerHp <= 0) {
        this.winner = 'draw';
      } else if (val <= 0) {
        this.winner = 'player';
      }
    },
  },
  methods: {
    restartGame() {
      this.playerHp = 100;
      this.monsterHp = 100;
      this.winner = null;
      this.turnCounter = 0;
      this.logs = [];
    },
    attackMonster() {
      const attackValue = getRandomValue(5, 12);
      this.monsterHp -= attackValue;
      this.turnCounter++;
      this.addLogMessage('player', 'attack', attackValue);
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(5, 12);
      this.playerHp -= attackValue;
      this.addLogMessage('monster', 'attack', attackValue);
    },
    specialAttack() {
      const attackValue = getRandomValue(10, 25);
      this.turnCounter++;
      this.monsterHp -= attackValue;
      this.addLogMessage('player', 'special-attack', attackValue);
      this.attackPlayer();
    },
    healPlayer() {
      const healValue = getRandomValue(8, 20);
      if (this.playerHp + healValue > 100) {
        this.playerHp = 100;
      } else {
        this.playerHp += healValue;
      }
      this.addLogMessage('player', 'heal', healValue);
      this.attackPlayer();
    },
    surrender() {
      this.winner = 'monster';
      this.playerHp = 0;
    },
    addLogMessage(who, what, value) {
      this.logs.unshift({
        actionBy: who,
        actiontype: what,
        actionValue: value,
      });
    },
  },
});

app.mount('#game');
