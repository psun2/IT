const name = {
    firstName: "",
    lastName: "",
    get fullName() {
        console.log(`Hi, ${this.firstName} ${this.lastName}.`)
    },
    set fullName(value) {
        let array = value.split(" ");
        this.firstName = array[0];
        this.lastName = array[1];
    }
}

name.fullName = "박 성언";

name.fullName; // Hi, 박 성언.