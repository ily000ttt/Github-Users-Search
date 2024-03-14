export class Search {



    constructor(view){
        this.view = view;
        this.view.searchInput.addEventListener('keyup', this.debounce(this.searchUsers.bind(this), 500))
    }

    setCurrentUsersPage(number)
{
        this.currentUsersPage = number
}
setTotalUsersCount(number)
{
    this.totalUsersCount = number;
}
    async searchUsers(){
        const inpValue = this.view.searchInput.value;

        this.currentUsersPage = 0;
        this.totalUsersCount = 0;
        return await fetch(`https://api.github.com/search/users?q=${inpValue}`).then(res => res.json().then(
            res => {
                const users = res.items;
                users.forEach(user=>this.view.createPrevUser(user));
            }
        ))
    }
    debounce(func, wait, immediate){
        let timeout;
        return function(){
            let context = this, args = arguments;
            let later = function(){
                timeout = null;
                if (!immediate) func.apply(context, args)
            }
            let callNow = immediate && !timeout
            clearTimeout(timeout)
            timeout = setTimeout(later,wait)
            if (callNow) func.apply(context, args)
        }
    }

}