function Creategame(){
    let score=0;
    function incScr(points){
        score+=points;
        console.log(`+${points}pts.`);    
    }
    function decScr(points){
        score-=points;
        console.log(`-${points}pts.`);    
    }
    function getScr(){
        return score;
    }
    return {incScr,decScr,getScr};
}
const game=Creategame();
game.incScr(15);
game.decScr(12);
console.log(`Total points are: ${game.getScr()}pts`);