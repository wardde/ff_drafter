'use strict'

var pickNum = 1;

const teams = 3;
const draftPlayer = document.querySelector('.draftPlayer');

draftPlayer.addEventListener('click', function() {
    let playerName = player.value;
    
    var pickedPlayer = document.createElement('h3');
    pickedPlayer.className = 'pickedPlayer';

    let round = 1 + Math.floor((pickNum - 1)/teams);
    let roundPick = ((pickNum - 1) % teams) + 1;
    let pickStr = round + '.' + (roundPick < 10 ? '0' : '') + roundPick;

    var textNode = document.createTextNode(pickStr + ' ' + playerName + '\n');
    pickedPlayer.appendChild(textNode);
    document.body.appendChild(pickedPlayer);

    player.value = '';
    ++pickNum;
    
    console.log('Draft ' + playerName);
});