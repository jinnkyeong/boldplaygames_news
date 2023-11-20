
// prevent showing contextmenu(mounse right click)
document.addEventListener("contextmenu", function(event){
    event.preventDefault(); 
}, false);


// 버튼 hover 효과
const con_test = document.querySelector(".con_test");
const con_ranking = document.querySelector(".con_ranking");
const con_event = document.querySelector(".con_event");
const ovl_test = document.querySelector(".overlay_test");
const ovl_ranking = document.querySelector(".overlay_ranking");
const ovl_event = document.querySelector(".overlay_event");

con_test.addEventListener("mouseover", function(){
    if(!ovl_test.classList.contains('hover')){
        ovl_test.classList.add('hover')
    }
}, false);

con_test.addEventListener("mouseout", function(){
    if(ovl_test.classList.contains('hover')){
        ovl_test.classList.remove('hover')
    }
}, false);

con_ranking.addEventListener("mouseover", function(){
    if(!ovl_ranking.classList.contains('hover')){
        ovl_ranking.classList.add('hover')
    }
}, false);

con_ranking.addEventListener("mouseout", function(){
    if(ovl_ranking.classList.contains('hover')){
        ovl_ranking.classList.remove('hover')
    }
}, false);

con_event.addEventListener("mouseover", function(){
    if(!ovl_event.classList.contains('hover')){
        ovl_event.classList.add('hover')
    }
}, false);

con_event.addEventListener("mouseout", function(){
    if(ovl_event.classList.contains('hover')){
        ovl_event.classList.remove('hover')
    }
}, false);


