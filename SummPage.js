 var finalReturn = { 
"playerOrTeamName": 'ZwHoneyBadger',
"tier": "MASTER",
"rank": "I",
"leaguePoints": 20,
"tEloDelta": 0,
"eEloDelta": -123,

};

 

 var kScore = (finalReturn.tEloDelta - finalReturn.eEloDelta) * 3;

function whatItMeans(kScore){
	if (kScore > -400 && kScore <= -200) {
		return "Riot has blessed you with hot trash teammates";
	} else if (kScore >= -199  && kScore <= -50) {
		return "your teamates are underperforming compared to your enemies";
	} else if (kScore >= -49  && kScore <= 50) {
		return "your teammates and enemies are performing equally well";
	} else if (kScore >= 51  && kScore <= 200) {
		return "your teammates are performing better than your enemies";
	}else if (kScore >= 201) {
		return "your teammates are significantly better than your enemies";
	} else {
		return "something went wrong";
	}
}

document.getElementById('karmaText').innerHTML = 'You have a Karma Score of ' + kScore + '.  This means that ' + whatItMeans(kScore);



function tierPic(tier) {

	if (tier === 'BRONZE'){
		return "http://opgg-static.akamaized.net/images/medals/bronze_1.png"
	} else if (tier === 'SILVER'){
		return "http://opgg-static.akamaized.net/images/medals/silver_1.png" 	
	} else if (tier === 'GOLD'){
		return "http://opgg-static.akamaized.net/images/medals/gold_1.png"
	} else if (tier === 'PLATINUM'){
		return "http://opgg-static.akamaized.net/images/medals/platinum_1.png"
	}  else if (tier === 'DIAMOND'){
		return "http://opgg-static.akamaized.net/images/medals/diamond_1.png"
	}  else if (tier === 'MASTER'){
		return "http://opgg-static.akamaized.net/images/medals/master_1.png"
	}  else if (tier === 'CHALLENGER'){
		return "http://opgg-static.akamaized.net/images/medals/challenger_1.png"
	} else {
		return "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c0/BlankBadge.png/revision/latest?cb=20131201231015"
	} 
}

function yikers (){
document.getElementsByTagName("IMG")[0].setAttribute("src", tierPic(finalReturn.tier)); 
 if (finalReturn.tier === "CHALLENGER" || finalReturn.tier === "MASTER") {document.getElementById('rankHold').innerHTML = finalReturn.tier + " " + finalReturn.leaguePoints + " LP"}
 	else  {document.getElementById('rankHold').innerHTML = finalReturn.tier + " " + finalReturn.rank + " " + finalReturn.leaguePoints + " LP"}
}
 yikers();

document.getElementById('enemyScore').innerHTML = finalReturn.eEloDelta;
document.getElementById('teamScore').innerHTML = finalReturn.tEloDelta;
document.getElementById('printSummName').innerHTML = finalReturn.playerOrTeamName;



function whatShouldYouBe(tier, rank) {
var elo = 0;
var icon = "";
var printRank = "";
	if (tier === "BRONZE") elo = elo + 0;
    else if (tier === "SILVER") elo = elo + 500;
    else if (tier === "GOLD") elo = elo + 1000;
    else if (tier === "PLATINUM") elo = elo + 1500;
    else if (tier === "DIAMOND") elo = elo + 2000;
    else if (tier === "MASTER") return masterChallenger(); 
    else if (tier === "CHALLENGER") return masterChallenger(); 
    
if (rank == "V") elo = elo + 0;
    else if (rank === "IV") elo = elo + 100;
    else if (rank === "III") elo = elo + 200;
    else if (rank === "II") elo = elo + 300;
    else if (rank === "I") elo = elo + 400;

var newElo = (elo + finalReturn.leaguePoints - finalReturn.tEloDelta + finalReturn.eEloDelta);

if (newElo < 0) return document.getElementById('SBRankHold').innerHTML = 'Bronze V 0 LP', document.getElementsByTagName("IMG")[1].setAttribute("src", tierPic("BRONZE"));

var roundedElo = Math.floor(newElo / 100) * 100;
var rankRound = (newElo - Math.floor(newElo / 1000) * 1000) - (newElo - roundedElo);
console.log(rankRound);
	if (newElo < 500) icon = "BRONZE";
	else if (newElo >= 500 && newElo < 1000) icon = "SILVER";
	else if (newElo >= 1000 && newElo < 1500) icon = "GOLD";
	else if (newElo >= 1500 && newElo < 2000) icon = "PLATINUM";
	else if (newElo >= 2000 && newElo < 2500) icon = "DIAMOND";
	else if (newElo >= 2500 && newElo < 2900) icon = "MASTER";
	else if (newElo >= 2000) icon = "CHALLENGER";

	if (rankRound <= 0) printRank = 'V';
	else if (rankRound === 100) printRank = 'IV';
	else if (rankRound === 200) printRank = 'III';
	else if (rankRound === 300) printRank = 'II';
	else if (rankRound === 400) printRank = 'I';


document.getElementsByTagName("IMG")[1].setAttribute("src", tierPic(icon)); 
document.getElementById('SBRankHold').innerHTML = (icon + " " + printRank + " ") + (newElo - roundedElo + ' LP');


};
whatShouldYouBe(finalReturn.tier, finalReturn.rank);


function masterChallenger (){
	var mcElo = 2500 + finalReturn.leaguePoints - finalReturn.tEloDelta + finalReturn.eEloDelta
	if (mcElo < 2500) return document.getElementsByTagName("IMG")[1].setAttribute("src", tierPic("DIAMOND")), 
					  document.getElementById('SBRankHold').innerHTML = ('DIAMOND I ' ) + (mcElo - 2400 + ' LP');
						
	if (mcElo < 2900) document.getElementsByTagName("IMG")[1].setAttribute("src", tierPic("MASTER")), 
					  document.getElementById('SBRankHold').innerHTML = ('MASTER' + " ") + (mcElo - 2500 + ' LP');
	else if (mcElo >= 2900) document.getElementsByTagName("IMG")[1].setAttribute("src", tierPic("CHALLENGER")), 
							document.getElementById('SBRankHold').innerHTML = ('CHALLENGER' + " ") + (mcElo - 2500 + ' LP');
}



