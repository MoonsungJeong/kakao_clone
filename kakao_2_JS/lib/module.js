var omok = function(){
    alert("OOOOmooooK!");
}
////////////////////////////////////////////////////////////////////////////////////
var Tab_change = function(navi_link, items_tab){   
    var _arr = document.querySelectorAll(`.${navi_link}`); 
    var items = document.querySelectorAll(`.${items_tab}`);
    Array.prototype.forEach.call(_arr,function(list){
        list.addEventListener('click', function(e){
            if(list.classList[1] !== undefined){
                var tab = document.querySelector('.'+list.classList[1]+'_tab');
                Array.prototype.forEach.call(items,function(cont){
                    cont.style.display = 'none';
                })
                tab.style.display = 'block';
                if(list.classList[1] === 'friends'){
                    _arr[0].firstElementChild.classList.remove('far');
                    _arr[0].firstElementChild.classList.add('fas');
                    _arr[1].firstElementChild.classList.remove('fas');
                    _arr[1].firstElementChild.classList.add('far');
                }else if(list.classList[1] === 'chats'){
                    _arr[0].firstElementChild.classList.remove('fas');
                    _arr[0].firstElementChild.classList.add('far');
                    _arr[1].firstElementChild.classList.remove('far');
                    _arr[1].firstElementChild.classList.add('fas');
                }else if(list.classList[1] === 'more'){
                    _arr[0].firstElementChild.classList.remove('fas');
                    _arr[0].firstElementChild.classList.add('far');
                    _arr[1].firstElementChild.classList.remove('fas');
                    _arr[1].firstElementChild.classList.add('far');
                }
            }
        })
    })
}

var Screen_change = function(arr, id){
    var _arr = document.querySelectorAll(`.${arr}`);
    Array.prototype.forEach.call(_arr,function(list){
        list.addEventListener('click', function(e){
            var profile_tab = document.querySelector('.profile_tab');
            var chat_tab = document.querySelector('.chat_tab');
            Array.prototype.forEach.call(['friends','chats','more','nav'],function(cont){
                var cont = '.'+cont+'_tab';
                var tab = document.querySelector(cont);
                tab.style.display = 'none';
            })
            if(arr === 'profile__link'){
                profile_tab.style.display = 'block';
            }else if(arr === 'chat__link'){
                chat_tab.style.display = 'block';
            }
        })
    })
}
var Screen_back_change = function(btn){
    var _btn = document.querySelector(`.${btn}`);
    _btn.addEventListener('click', function(e){
        var nav_tab = document.querySelector('.nav_tab');
        var nav = document.querySelectorAll('.nav__list-link');
        var friends_tab = document.querySelector('.friends_tab');
        var chats_tab = document.querySelector('.chats_tab');
        var profile_tab = document.querySelector('.profile_tab');
        var chat_tab = document.querySelector('.chat_tab'); 
        
        if(btn === 'header__x-btn'){
            profile_tab.style.display = 'none';
            nav_tab.style.display = 'block';
            friends_tab.style.display = 'block';
        }else if(btn === 'header__back-btn'){
            chat_tab.style.display = 'none';
            nav_tab.style.display = 'block';
            chats_tab.style.display = 'block';
            nav[0].firstElementChild.classList.remove('fas');
            nav[0].firstElementChild.classList.add('far');
            nav[1].firstElementChild.classList.remove('far');
            nav[1].firstElementChild.classList.add('fas');
        }else if(btn == 'profile__content-chat'){
            profile_tab.style.display = 'none';
            chat_tab.style.display = 'block';
        }
    })
}
var box_btn = function(btn){
    var _btn = document.querySelectorAll(`.${btn}`);
    Array.prototype.forEach.call(_btn,function(list){
        list.addEventListener('click', function(e){
            var winW = window.innerWidth;
            var _overlay = document.querySelector(`.add_overlay`);
            var cont = list.classList[1]+'-body';
            var box = document.querySelector(`.${cont}`);
            
            _overlay.style.display = "block";
            if(cont === "friend__add-body" || cont === "news-body")
                box.style.left = (winW/2) - (300/2)+"px";
            else if(cont === "newchat-body")
                box.style.left = (winW/2) - (350/2)+"px";
    	    box.style.top = "50px";
            box.style.display = "block";
        })
    })
}
var box_back_btn = function(btn){
    var _btn = document.querySelectorAll(`.${btn}`);
    Array.prototype.forEach.call(_btn,function(list){
        list.addEventListener('click', function(e){
            var _overlay = document.querySelector(`.add_overlay`);
            var cont = list.classList[1]+'-body';
            var box = document.querySelector(`.${cont}`);
            _overlay.style.display = "none";
            box.style.display = "none";
        })
    })
}
export {omok, Tab_change, Screen_change, Screen_back_change, box_btn, box_back_btn};


