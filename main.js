class View{
    constructor(){
        this.app = document.getElementById('app')
        
        this.title = this.createElement('h1', 'title')
        this.title.textContent = "Github Search users";

        this.searchForm = this.createElement('form', 'form')
        this.searchInput = this.createElement('input', 'input')
        this.searchInput.placeholder = "Write user name..."
        this.searchForm.append(this.searchInput)

        this.app.append(this.title)
        this.app.append(this.searchForm)
    }
    createElement(elTag, elClass){
        const element = document.createElement(elTag)
        if (elClass)
            element.classList.add(elClass);
        return element;
    }
}
class App{
    constructor(view){
        this.view = view;
    }
}

const app = new App(new View())