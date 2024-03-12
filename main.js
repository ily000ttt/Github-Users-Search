// https://www.youtube.com/watch?v=aaudUAzIKVU


class App{
    constructor(view){
        this.view = view;
    }
}
const view = new View()
const search = new Search(view)
const app = new App(view,search)