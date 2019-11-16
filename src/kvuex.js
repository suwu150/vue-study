let Vue;

class Store {
    constructor(options) {
        this.state = new Vue({ data: options.state });
        this.mutations = options.mutations;
        this.actions = options.actions;
    }
}

function install() {

}


export default { Store, install };