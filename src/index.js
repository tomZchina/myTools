import CusSequence from './cusSequence';

// document.querySelectorAll('input').forEach((val) => { 
//     console.log(val);
// })

const cusSequence = new CusSequence();

const task_1 = function () {
    setTimeout(() => {
        console.log('task 1');
        cusSequence.next();
    }, 3000)
    // console.log('task 1');
    // cusSequence.next();
}

task_1.constructor = 'task_1';

const task_2 = function () {
    setTimeout(() => {
        console.log('task 2');

        cusSequence.next();
    }, 5000)
}
task_2.constructor = 'task_2';

const task_3 = function () {
    console.log('task 3');
    cusSequence.next();
}

task_3.constructor = 'task_3';

cusSequence.push(task_1);

cusSequence.push(task_2);

cusSequence.push(task_3);

cusSequence.start();

let i = 4;
while (i <= 5) {
    console.log(i)
    let o = i;
    const temp = function () {
        console.log(`task ${o}`);
        cusSequence.next();
    }
    temp.constructor = `task_${o}`;
    cusSequence.push(temp);
    i++;
}
cusSequence.start();
