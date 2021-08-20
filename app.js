'use strict'

const draftPlayer = document.querySelector('.draftPlayer');

draftPlayer.addEventListener('click', function() {
    let playerName = player.value;
    
    var li = document.createElement('li');
    li.className = 'draftedPlayer';
    var textNode = document.createTextNode(playerName);
    li.appendChild(textNode);
    document.getElementById('draftList').appendChild(li);

    player.value = '';
    
    console.log('Draft ' + playerName);
})