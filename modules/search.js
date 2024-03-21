export class Search {



    constructor(view, log, api){
        this.view = view;
        this.log = log
        this.api = api

        this.currentUsersPage = 1;
        this.showUsersCount = 0

        this.view.searchInput.addEventListener('keyup', this.debounce(this.searchUsers.bind(this), 500))
        this.view.UserLoadMoreBtn.addEventListener('click')
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
        if (inpValue.length){
            this.api.searchUsers(inpValue, this.currentUsersPage).then(
                res => {
                    const users = res.items;
                    
                    this.setShowUsersCount(this.showUsersCount + users.length)
                    this.setCurrentUsersPage(this.currentUsersPage + 1)
                    this.view.showCountMessage(this.log.countMessage(res.total_count))
                    this.view.toggleViewUserLoadMoreBtn(
                        this.showUsersCount< res.total_count 
                        && this.showUsersCount !== res.total_count);
                        
                    users.forEach(user=>this.view.createPrevUser(user));
                }
            )
        } else {
            this.view.clearList();
        }
        
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