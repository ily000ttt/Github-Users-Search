// https://www.youtube.com/watch?v=aaudUAzIKVU
class View{
    constructor(){
        this.app = document.getElementById('app')
        
        this.title = this.createElement('h1', 'title')
        this.title.textContent = "Github Search users";

        this.searchForm = this.createElement('form', 'form')
        this.searchInput = this.createElement('input', 'input')
        this.searchInput.placeholder = "Write user name..."
        this.searchForm.append(this.searchInput)

        this.main = this.createElement('div', 'main');

        this.users = this.createElement('div', 'users')
        this.usersList = this.createElement('div', 'users-list')
        this.userLoadMoreBtn = this.createElement('button', 'button')
        this.userLoadMoreBtn.textContent = "Load More"
        this.users.append(this.usersList)
        this.users.append(this.userLoadMoreBtn)

        this.usersInfo = this.createElement("div", 'user-info')

        this.main.append(this.users)
        this.main.append(this.usersInfo)


        this.app.append(this.title)
        this.app.append(this.searchForm)
        this.app.append(this.main)
    }
    createElement(elTag, elClass){
        const element = document.createElement(elTag)
        if (elClass)
            element.classList.add(elClass);
        return element;
    }
}
class Search {
    constructor(view){
        this.view = view;
        this.view.searchInput.addEventListener('keyup', this.searchUsers.bind(this))
    }
    async searchUsers(){
        const inpValue = this.view.searchInput.value;
        return await fetch(`https://api.github.com/search/users?q=${inpValue}`.then)
    }
}
class App{
    constructor(view){
        this.view = view;
    }
}
const view = new View()
const search = new Search(view)
const app = new App(view,search)