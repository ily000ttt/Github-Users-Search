// https://www.youtube.com/watch?v=aaudUAzIKVU

import {View} from "./modules/view.js"
import {Api} from "./modules/api.js"
import {Search} from "./modules/search.js"
import {Log} from "./modules/log.js"
class App{
    constructor(view){
        this.view = view;
    }
}
const api = new Api();
const log = new Log()
const view = new View()
const search = new Search(view, log)


const app = new App(view,search)