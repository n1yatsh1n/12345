function myFunction(a) {
    console.log(a);
    let el = a.slice(-1);
    document.getElementById('share_'+el).classList.toggle("show");
    return false;
}

// Закройте выпадающее меню, если пользователь щелкает за его пределами
window.onclick = function(event) {
    if (!event.target.matches('.share-button')) {
            let dropdowns = document.getElementsByClassName("share-list");
            for (let i = 0; i < dropdowns.length; i++) {
                let openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
    }
}
let likes_counter=0;
let likes_check= true;
function like(a){
    let el = a.slice(-1);
    document.getElementById('likes_button'+el).classList.toggle("active");
    if (document.getElementById('likes_button'+el).classList.contains("active")) {
        let b = 'likes' + el;
        likes_counter++
        document.getElementById(b).innerHTML = likes_counter;
    }
    else{
        let b = 'likes' + el;
        likes_counter--
        document.getElementById(b).innerHTML = likes_counter;
    }
}
function option_view() {
    document.getElementById('fanpage-options').style.display="block";
}
function option_none_view(){
    document.getElementById('fanpage-options').style.display="none";
}