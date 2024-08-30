let tossBoard = document.querySelector(".tossBoard");

let toss = document.querySelector(".toss");
let select = document.querySelector(".select");
let heads = document.querySelector(".head");
let tails = document.querySelector(".tail");

let tossYouWon = document.querySelector(".tossYouWon");
let tossCompWon = document.querySelector(".tossCompWon");

let tossResult = document.querySelector(".tossResult");

let start = document.querySelector(".start");

let userRuns = document.querySelector(".userRuns");
let compRuns = document.querySelector(".compRuns");
let scoreBoard = document.querySelector(".scoreboard");
let target = document.querySelector(".target");
let options = document.querySelector(".options");

let targetRuns = document.querySelector(".targetRuns");

let result = document.querySelector(".result");
let restart = document.querySelector(".restart");
let newGame = document.querySelector("#newGame");

let compChoose = document.querySelector(".chooseComp");
let bat = document.querySelector(".bat");
let bowl = document.querySelector(".bowl");

let userImage = document.querySelector(".userImage");
let compImage = document.querySelector(".compImage");

let runs = document.querySelectorAll(".runs");
let runsScored = document.querySelector(".run");
let totalRuns = document.querySelector(".totalRuns");
let innings = document.querySelector(".innings");
let aboutRuns = document.querySelector(".aboutRuns");
let press = document.querySelector(".continue");
let declare = document.querySelector("#declare");


hideFunction = () => {
    tossBoard.classList.add("hide");
    toss.classList.add("hide");
    select.classList.add("hide");
    heads.classList.add("hide");
    tails.classList.add("hide");
    tossYouWon.classList.add("hide");
    tossCompWon.classList.add("hide");
    tossResult.classList.add("hide");
    start.classList.add("hide");
    userRuns.classList.add("hide");
    compRuns.classList.add("hide");
    scoreBoard.classList.add("hide");
    target.classList.add("hide");
    options.classList.add("hide");
    press.classList.add("hide");
    targetRuns.classList.add("hide");
    result.classList.add("hide");
    restart.classList.add("hide");
}

let user = 1;
let comp = 0;
let out = 0;        // 0-not out  1-out  2-draw

let userRun = 0;
let compRun = 0;
let userScore = 0;
let compScore = 0;
let targetScore = 0;
let finalTarget = 0;

let userTurn = false;       // false-bowling    true-batting

let targets = new Audio('batHit.mp3');
let outs = new Audio('out.mp3');
let wons = new Audio('won.mp3');
let losts = new Audio('lost.mp3');
let starts = new Audio('start.mp3');
let batHits = new Audio('bat.mp3');

tossDecisionFunctionHeads = () => {
    batHits.play();
    let dec = Math.ceil(Math.random()*2);
    if(dec == 1){
        tossDecisionf();
        tossYouWon.classList.remove("hide");
        bat.addEventListener("click",()=>{
            batHits.play();
            tossResultf();
            tossResult.innerText = "You will BAT first.";
            tossResult.style.marginTop = "-20px";
            press.classList.remove("hide");
            user = 1;
            comp = 0;
        });
        bowl.addEventListener("click",()=>{
            batHits.play();
            tossResultf();
            tossResult.innerText = "You will BOWL first.";
            tossResult.style.marginTop = "-20px";
            press.classList.remove("hide");
            user = 0;
            comp = 1;
        });
        document.addEventListener("keypress",startf);
    } else {
        tossDecisionf();
        let compDec = Math.ceil(Math.random()*2);
        user = 0;
        comp = 1;
        press.classList.remove("hide");
        if(compDec == 2){
            compChoose.innerText = "Elected to BOWL first";
            user = 1;
            comp = 0;
        }
        tossCompWon.classList.remove("hide");
        document.addEventListener("keypress",startf);
    }
}

tossDecisionFunctionTails = () => {
    batHits.play();
    let dec = Math.ceil(Math.random()*2);
    if(dec == 2){
        tossDecisionf();
        tossYouWon.classList.remove("hide");
        bat.addEventListener("click",()=>{
            batHits.play();
            tossResultf();
            tossResult.innerText = "You will BAT first.";
            press.classList.remove("hide");
            user = 1;
            comp = 0;
        });
        bowl.addEventListener("click",()=>{
            batHits.play();
            tossResultf();
            tossResult.innerText = "You will BOWL first.";
            press.classList.remove("hide");
            user = 0;
            comp = 1;
        });
        document.addEventListener("keypress",startf);
    } else {
        tossDecisionf();
        let compDec = Math.ceil(Math.random()*2);
        user = 0;
        comp = 1;
        press.classList.remove("hide");
        if(compDec == 2){
            compChoose.innerText = "Elected to BOWL first";
            user = 1;
            comp = 0;
        }
        tossCompWon.classList.remove("hide");
        document.addEventListener("keypress",startf);
    }
}

tossf = () => {
    hideFunction();
    tossBoard.classList.remove("hide");
    toss.classList.remove("hide");
    select.classList.remove("hide");
    heads.classList.remove("hide");
    tails.classList.remove("hide");

    heads.addEventListener("click", tossDecisionFunctionHeads);
    tails.addEventListener("click", tossDecisionFunctionTails);
}

tossDecisionf = () => {
    hideFunction();
    tossBoard.classList.remove("hide");
}

tossResultf = () => {
    hideFunction();
    tossBoard.classList.remove("hide");
    tossResult.classList.remove("hide");
}

startf = () => {
    starts.play();
    hideFunction();
    start.classList.remove("hide");
    press.classList.remove("hide");
    document.addEventListener("keypress",firstInningsf);
}

compOneToSix = () => {
    return Math.ceil(Math.random()*6);
}

scoringFirst = () => {
    starts.pause();

    if(user == 1){
        runs.forEach((run) => {
            run.addEventListener("click",function(){
                userRun = this.innerText;
                compRun = compOneToSix();
                if(userRun == compRun){
                    outs.play();
                    runsScored.innerText = "OUT!!";
                    options.classList.add("hide");
                    press.classList.remove("hide");
                    runsScored.style.fontSize = "80px";
                    runsScored.style.paddingTop = "20px";
                    runsScored.style.height = "130px";
                    aboutRuns.style.backgroundColor = "red";
                    targetScore = userScore + 1;
                    document.addEventListener("keypress",targetf);
                } else {
                    batHits.play();
                    runsScored.innerText = userRun;
                    userScore += Number(userRun);
                    totalRuns.innerText = `RUNS SCORED : ${userScore}`;
                }
            });
        });
        newGame.addEventListener("click",function(){
            window.location.reload();
        });
        declare.addEventListener("click",function(){
            userTurn = true;
            out = 1;
            resultf();
        });
    } else {
        runs.forEach((run) => {
            run.addEventListener("click",function(){
                userRun = this.innerText;
                compRun = compOneToSix();
                if(userRun == compRun){
                    outs.play();
                    runsScored.innerText = "OUT!!";
                    press.classList.remove("hide");
                    options.classList.add("hide");
                    runsScored.style.fontSize = "80px";
                    runsScored.style.paddingTop = "20px";
                    runsScored.style.height = "130px";
                    aboutRuns.style.backgroundColor = "red";
                    targetScore = compScore + 1;
                    document.addEventListener("keypress",targetf);
                } else {
                    batHits.play();
                    runsScored.innerText = compRun;
                    compScore += Number(compRun);
                    totalRuns.innerText = `RUNS SCORED : ${compScore}`;
                }
            });
        });
        newGame.addEventListener("click",function(){
            window.location.reload();
        });
        declare.addEventListener("click",function(){
            userTurn = true;
            out = 1;
            resultf();
        });
    }   
}

firstInningsf = () => {
    targets.play();
    hideFunction();
    userRuns.classList.remove("hide");
    compRuns.classList.remove("hide");
    scoreBoard.classList.remove("hide");
    options.classList.remove("hide");

    if(user == 1){      // comp=0  // i am batting and comp is bowling
        userRuns.classList.add("border");
        userImage.src="cricket-bat.png";
        compImage.src="cricket-ball.png";
        scoringFirst();
    } else {            //user=0  comp=1   // i am bowling and computer is batting
        compRuns.classList.add("border");
        scoringFirst();
    }
}

targetf = () => {
    targets.play();
    hideFunction();
    targetRuns.classList.remove("hide");
    press.classList.remove("hide");
    targetRuns.innerText = `Target = ${targetScore}`;
    document.addEventListener("keypress",secondInningsf);
}

scoringSecond = () => {

    if(user == 1){      //user batting   comp bowling
        
        runs.forEach((score) => {
            score.addEventListener("click",function(){
                userRun = this.innerText;
                compRun = compOneToSix();
                aboutRuns.style.backgroundColor = "rgb(240,195,167)";
                userScore += Number(userRun);
                    if(userScore >= finalTarget){
                        outs.pause();
                        batHits.play();
                        out = 0;
                        userTurn = true;
                        runsScored.style.fontSize = "150px";
                        runsScored.style.paddingTop = "0px";
                        runsScored.style.height = "150px";
                        runsScored.innerText = userRun;
                        totalRuns.innerText = `RUNS SCORED : ${userScore}`;
                        options.classList.add("hide");
                        press.innerText = "Match ended. Press any key to see Results....";
                        press.classList.remove("hide");
                        document.addEventListener("keypress",resultf);
                    }
                    else if(userScore == finalTarget-1 && userRun == compRun){ //draw
                        batHits.pause();
                        outs.play();
                        options.classList.add("hide");
                        press.classList.remove("hide");
                        runsScored.innerText = "OUT!!";
                        runsScored.style.fontSize = "80px";
                        runsScored.style.paddingTop = "20px";
                        runsScored.style.height = "130px";
                        aboutRuns.style.backgroundColor = "red";
                        totalRuns.innerText = `RUNS SCORED : ${userScore - userRun}`;
                        out = 2;
                        userTurn = true;
                        document.addEventListener("keypress",resultf);
                    }
                    else if(userRun == compRun){
                        batHits.pause();
                        outs.play();
                        options.classList.add("hide");
                        press.classList.remove("hide");
                        runsScored.innerText = "OUT!!";
                        runsScored.style.fontSize = "80px";
                        runsScored.style.paddingTop = "20px";
                        runsScored.style.height = "130px";
                        aboutRuns.style.backgroundColor = "red";
                        out = 1;
                        userTurn = true;
                        totalRuns.innerText = `RUNS SCORED : ${userScore - userRun}`;
                        document.addEventListener("keypress",resultf);
                    } else {
                        outs.pause();
                        batHits.play();
                        options.classList.remove("hide");
                        press.classList.add("hide");
                        runsScored.style.fontSize = "150px";
                        runsScored.style.paddingTop = "0px";
                        runsScored.style.height = "150px";
                        runsScored.innerText = userRun;
                        totalRuns.innerText = `RUNS SCORED : ${userScore}`;
                    }
            });
        });
        newGame.addEventListener("click",function(){
            window.location.reload();
        });
        declare.addEventListener("click",function(){
            userTurn = true;
            out = 1;
            resultf();
        });

    } else {            //user bowling   comp batting

        runs.forEach((score) => {
            score.addEventListener("click",function(){
                userRun = this.innerText;
                compRun = compOneToSix();
                aboutRuns.style.backgroundColor = "rgb(240,195,167)";
                compScore += Number(compRun);
                    if(compScore >= finalTarget){
                        outs.pause();
                        batHits.play();
                        out = 0;
                        userTurn = false;
                        runsScored.style.fontSize = "150px";
                        runsScored.style.paddingTop = "0px";
                        runsScored.style.height = "150px";
                        runsScored.innerText = compRun;
                        totalRuns.innerText = `RUNS SCORED : ${compScore}`;
                        options.classList.add("hide");
                        press.innerText = "Match ended. Press any key to see Results....";
                        press.classList.remove("hide");
                        document.addEventListener("keypress",resultf);
                    }
                    else if(compScore == finalTarget-1 && userRun == compRun){ //draw
                        batHits.pause();
                        outs.play();
                        options.classList.add("hide");
                        press.classList.remove("hide");
                        runsScored.innerText = "OUT!!";
                        runsScored.style.fontSize = "80px";
                        runsScored.style.paddingTop = "20px";
                        runsScored.style.height = "130px";
                        aboutRuns.style.backgroundColor = "red";
                        totalRuns.innerText = `RUNS SCORED : ${compScore - compRun}`;
                        out = 2;
                        userTurn = false;
                        document.addEventListener("keypress",resultf);
                    }
                    else if(userRun == compRun){
                        batHits.pause();
                        outs.play();
                        options.classList.add("hide");
                        press.classList.remove("hide");
                        runsScored.innerText = "OUT!!";
                        out = 1;
                        userTurn = false;
                        aboutRuns.style.backgroundColor = "red";
                        runsScored.style.fontSize = "80px";
                        runsScored.style.paddingTop = "20px";
                        runsScored.style.height = "130px";
                        totalRuns.innerText = `RUNS SCORED : ${compScore - compRun}`;
                        document.addEventListener("keypress",resultf);
                    } else {
                        outs.pause();
                        batHits.play();
                        options.classList.remove("hide");
                        press.classList.add("hide");
                        runsScored.style.fontSize = "150px";
                        runsScored.style.paddingTop = "0px";
                        runsScored.style.height = "150px";
                        runsScored.innerText = compRun;
                        totalRuns.innerText = `RUNS SCORED : ${compScore}`;
                    }
            });
        });
        newGame.addEventListener("click",function(){
            window.location.reload();
        });
        declare.addEventListener("click",function(){
            userTurn = true;
            out = 1;
            resultf();
        });
    }
}

secondInningsf = () => {
    targets.play();
    hideFunction();
    userRuns.classList.remove("hide");
    compRuns.classList.remove("hide");
    scoreBoard.classList.remove("hide");
    target.classList.remove("hide");
    options.classList.remove("hide");
    aboutRuns.style.backgroundColor = "rgb(240,195,167)";
    target.innerText = `TARGET : ${targetScore}`;
    innings.innerText = "2nd INNINGS";
    finalTarget = targetScore;
    runsScored.innerText="--";
    totalRuns.innerText="RUNS SCORED : ";
    userScore = 0;
    compScore = 0;
    userRun = 0;
    compRun = 0;

    if(user == 1){  // user bowling    comp batting
        user = 0;
        comp = 1;
        userRuns.classList.remove("border");
        compRuns.classList.add("border");
        compImage.src="cricket-bat.png";
        userImage.src="cricket-ball.png";
        scoringSecond();

    } else {    //user==0    user batting   comp bowling
        user = 1;
        comp = 0;
        userRuns.classList.add("border");
        compRuns.classList.remove("border");
        userImage.src="cricket-bat.png";
        compImage.src="cricket-ball.png";
        scoringSecond();
    }

}

resultf = () => {
    hideFunction();
    result.classList.remove("hide");
    restart.classList.remove("hide");

    if(userTurn == true){      // you 2nd batting
        if(out == 0){
            wons.play();
            result.innerText = "You WON!!";
        } else if(out == 1){
            losts.play();
            result.innerText = "You LOST!!";
            result.style.backgroundColor = "red";
        } else {        //out==2
            result.innerText = "Match DRAW";
            result.style.backgroundColor = "orange";
        }
    } else {            // comp 2nd batting
        if(out == 0){
            losts.play();
            result.innerText = "You LOST!!";
            result.style.backgroundColor = "red";
        } else if(out == 1){
            wons.play();
            result.innerText = "You WON!!";
        } else {        //out==2
            result.innerText = "Match DRAW";
            result.style.backgroundColor = "orange";
        }
    }

    restart.addEventListener("click",function(){
        window.location.reload();
    });

}


// window.location.reload(()=>{
//     starts.play();
// });

tossf();