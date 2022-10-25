const app = Vue.createApp({
    data() {
        return {
            box1: false,
            box2: false,
            box3: false,
        };
    },
    computed: {
        box1Class() {
            return { active: this.box1 };
        },
    },
    methods: {
        boxSelected(box) {
            if (box === 'A') {
                this.box1 = !this.box1;
            } else if (box === 'B') {
                this.box2 = !this.box2;
            } else if (box === 'C') {
                this.box3 = !this.box3;
            }
        },
    },
});

app.mount('#styling');