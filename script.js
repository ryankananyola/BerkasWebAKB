document.getElementById('nextmelodic').onclick = function(){
    let lists = document.querySelectorAll('.itemmelodic');
    document.getElementById('slidemelodic').appendChild(lists[0]);
}

document.getElementById('prevmelodic').onclick = function(){
    let lists = document.querySelectorAll('.itemmelodic');
    document.getElementById('slidemelodic').prepend(lists[lists.length - 1]);
}