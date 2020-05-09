const add = {
    x: 1,
    sum(y, z) {
        let result = this.x + y + z;
        console.log(this.x + y + z);
        // return result;
    }
}

const unBindTest = add.sum;
// FIXME: console.log(unBindTest()); // NAN
unBindTest(); // NAN

const bindTest = unBindTest.bind(add, 5, 5);
// FIXME: console.log(bindTest()); // 11
bindTest(); // 11