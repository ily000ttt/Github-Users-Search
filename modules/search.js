export class Search {



    constructor(view, log){
        this.view = view;
        this.log = log

        this.currentUsersPage = 0;
        this.showUsersCount = 0

        this.view.searchInput.addEventListener('keyup', this.debounce(this.searchUsers.bind(this), 500))
    }

    setCurrentUsersPage(number)
{
        this.currentUsersPage = number
}
setShowUsersCount(number)
{
    this.showlUsersCount = number;
}
    async searchUsers(){
        const inpValue = this.view.searchInput.value;

        return await fetch(`https://api.github.com/search/users?q=${inpValue}`).then((res) => res.json().then(
            res => {
                const users = res.items;
                
                this.setShowUsersCount(this.showUsersCount + users.length)
                this.view.showCountMessage(this.log.countMessage(res.total_count))
                this.view.toggleViewUserLoadMoreBtn(
                    this.showUsersCount< res.total_count 
                    && this.showUsersCount !== res.total_count);
                    
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