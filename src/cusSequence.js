// const list = [];

// function cusInterval(task) {
//     setTimeout(() => {
//         task();
//     }, 2000);

// }

class CusSequence {
    constructor() {
        this.list = [];
        this.status = 'stop';
        return 'CusSequence';
    }

    push(task) {
        this.list.push(task);
        // if (this.list.length === 1) {
        //     this.next();
        // }
    }

    start() {
        if (this.status === 'stop') {
            console.log('real start')
            this.next()
        }
    }

    next() {
        if (this.list.length > 0) {
            this.status = 'running'
            this.list.shift()();
        } else {
            this.status = 'stop'
        }
    }
}



export default CusSequence;