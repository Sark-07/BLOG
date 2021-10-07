const allMenus = document.getElementById('allMenus');
const allMenuDiv = document.getElementById('allmenuDiv');
const menuBtn = document.getElementById("menuBtn");
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const navSearch = document.getElementById('navSearch');
const social = document.getElementById('social');
const searchIconDiv = document.getElementById('searchIconDiv');
const navSearchDiv = document.getElementById('navSearchDiv');
const searchCross = document.getElementById('searchCross');
const searchIcon = document.getElementById('searchIcon');
// const post = document.getElementsByClassName("post");
const searchInput = document.getElementById("searchInput");
menu.addEventListener('click', (e) => {
    openMenu.classList.toggle('openMenu');
    closeMenu.classList.toggle('closeMenu');
    allMenus.classList.toggle('hidden');
    allMenuDiv.classList.toggle('allmenuDiv');
})
searchIconDiv.addEventListener('click', () => {
    navSearch.classList.toggle('navSearchIcon');
    searchIcon.classList.toggle('searchIcon');
    searchCross.classList.toggle('searchCross');
    navSearchDiv.classList.toggle('navSearchDiv');
})
searchInput.addEventListener("keyup", (e) => {
    let searchText = e.target.value.toLowerCase();
    // console.log(searchText);
    let blogPost = document.getElementsByClassName("blogPost");
    Array.from(blogPost).forEach(element => {
        let post = element.getElementsByTagName("p")[0].innerText.toLowerCase();
        // console.log(post);
        if (post.includes(searchText)) {
            element.style.display = '';
        } else {
            element.style.display = 'none';
        }
    });

})