var mySelection = document.getElementById('mySelection'),
    compSelection = document.getElementById('compSelection'),
    winner = document.getElementById('winner');


var play = function(){
    var myResponse = prompt('Rock[1], Paper[2], Scissors[3]');
    var compResponse = compSelectionGenerator();

    mySelection.innerHTML = translator(myResponse);
    compSelection.innerHTML = translator(compResponse);

    var winnerDecision = processWinner(myResponse, compResponse);
    var winnerValue = translator(winnerDecision);
    winner.innerHTML = winnerValue;
}

var compSelectionGenerator = function(input){
    return Math.floor(Math.random()*3+1);
}

var processWinner = function(myResp, compResp){
    var diff = Math.abs(myResp - compResp);

    if(diff === 1){
        if(myResp > compResp){
            return myResp;
        }else{
            return compResp;
        }
    }else if(diff > 1){
        if(myResp < compResp){
            return myResp;
        }else{
            return compResp;
        }
    }else if(diff === 0){
        return 0;
    }
}

var translator = function(input){
    input = parseInt(input);

    if(input ==0){
        return 'Draw';
    }else if(input == 1){
        return "Rock";
    }else if(input == 2){
        return 'Paper';
    }else if(input == 3){
        return 'Scissors'
    }else{
        return "Could not understand response"
    }
}