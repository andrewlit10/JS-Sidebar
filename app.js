const toggleBtn = document.querySelector('.sidebar-toggle')
const sidebar = document.querySelector('.sidebar')
const exitBtn = document.querySelector('.close-btn')


toggleBtn.addEventListener('click', function(){
    sidebar.classList.toggle('show-sidebar')

})
exitBtn.addEventListener('click', function(){
    sidebar.classList.toggle('show-sidebar')
})[0]