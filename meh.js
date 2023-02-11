mehbook.addEventListener('click', ()=>{
    document.querySelector('.meh__info__tittle').innerHTML='Зачарования'
    document.querySelector('.meh__info__text').innerHTML='Мы решили внести немного разнообразия в привычный гемлей, добавив возможность совмещения несколько книжек с зачарованиями, для получения более сильных чар. Например, две эффективности 5 дадут эффективность 6.'
    mehinfo.style.zIndex=5
    mehinfo.style.opacity=1
    windowblack.classList.add('window__black')
    windowblack.addEventListener('click',()=>{
        mehinfo.style.zIndex=0
        mehinfo.style.opacity=0
        windowblack.classList.remove('window__black')
    })
})
mehbook.addEventListener('mouseover', ()=>{
    mehbook.style.width=100+'px'
    mehbook.style.height=100+'px'
})
mehbook.addEventListener('mouseout', ()=>{
    mehbook.style.width=75+'px'
    mehbook.style.height=75+'px'
})


mehpotion.addEventListener('click', ()=>{
    document.querySelector('.meh__info__tittle').innerHTML='Ресурс пак'
    document.querySelector('.meh__info__text').innerHTML='У нас есть свой собственный, уникальный ресурс пак, который работает по принципу переименования вещей в наковальне. К примеру, можно взять бутылек воды, переименовать его в "мохито" и получить текстурку мохито.'
    mehinfo.style.zIndex=5
    mehinfo.style.opacity=1
    windowblack.classList.add('window__black')
    windowblack.addEventListener('click',()=>{
        mehinfo.style.zIndex=0
        mehinfo.style.opacity=0
        windowblack.classList.remove('window__black')
    })
})
mehpotion.addEventListener('mouseover', ()=>{
    mehpotion.style.width=100+'px'
    mehpotion.style.height=100+'px'
})
mehpotion.addEventListener('mouseout', ()=>{
    mehpotion.style.width=75+'px'
    mehpotion.style.height=75+'px'
})

meharmor.addEventListener('click', ()=>{
    document.querySelector('.meh__info__tittle').innerHTML='Армор стенды'
    document.querySelector('.meh__info__text').innerHTML='Плагин, позволяющий редактировать стойки для брони! На сервере имеется возможность продвинутого редактирования позиций стоек для брони, что открывает новые просторы для творчества игрокам.'
    mehinfo.style.zIndex=5
    mehinfo.style.opacity=1
    windowblack.classList.add('window__black')
    windowblack.addEventListener('click',()=>{
        mehinfo.style.zIndex=0
        mehinfo.style.opacity=0
        windowblack.classList.remove('window__black')
    })
})
meharmor.addEventListener('mouseover', ()=>{
    meharmor.style.width=120+'px'
    meharmor.style.height=140+'px'
})
meharmor.addEventListener('mouseout', ()=>{
    meharmor.style.width=100+'px'
    meharmor.style.height=120+'px'
})


mehmicro.addEventListener('click', ()=>{
    document.querySelector('.meh__info__tittle').innerHTML='Сборка сервера'
    document.querySelector('.meh__info__text').innerHTML='На сервере установлена сборка модов, включающая в себя такие дополнения, как simple voice chat, emotecraft и другие, не мешающие ванильному игровому процессу моды.'
    mehinfo.style.zIndex=5
    mehinfo.style.opacity=1
    windowblack.classList.add('window__black')
    windowblack.addEventListener('click',()=>{
        mehinfo.style.zIndex=0
        mehinfo.style.opacity=0
        windowblack.classList.remove('window__black')
    })
})
mehmicro.addEventListener('mouseover', ()=>{
    mehmicro.style.width=100+'px'
    mehmicro.style.height=100+'px'
})
mehmicro.addEventListener('mouseout', ()=>{
    mehmicro.style.width=75+'px'
    mehmicro.style.height=75+'px'
})


mehsword.addEventListener('click', ()=>{
    document.querySelector('.meh__info__tittle').innerHTML='Ивенты'
    document.querySelector('.meh__info__text').innerHTML='Чтобы не дать вам заскучать на сервере, каждые выходные проводятся экстраординарные ивенты!'
    mehinfo.style.zIndex=5
    mehinfo.style.opacity=1
    windowblack.classList.add('window__black')
    windowblack.addEventListener('click',()=>{
        mehinfo.style.zIndex=0
        mehinfo.style.opacity=0
        windowblack.classList.remove('window__black')
    })
})
mehsword.addEventListener('mouseover', ()=>{
    mehsword.style.width=120+'px'
    mehsword.style.height=120+'px'
})
mehsword.addEventListener('mouseout', ()=>{
    mehsword.style.width=100+'px'
    mehsword.style.height=100+'px'
})

