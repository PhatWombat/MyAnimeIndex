
/*var x, y;
x = 5;
y = 6;
document.getElementById("demo").innerHTML = x + y;*/



/*	var Everything = 0;



function ShowMovie() {
	var Article = "article";
	var Debut = 1;
	var Incre = Debut + 1;
	var Res = (Article + Incre);
	
	var bob = document.getElementsByClassName('ColoneCentre');
	var gag = document.getElementsByClassName('Movie');
	
	if (Everything == 0) {
		
		for (var i = 0, length = bob.length; i < length; i++)
          bob[i].style.display = 'none';
		}
		
		for (var i = 0, length = gag.length; i < length; i++)
          gag[i].style.display = 'block';
		}
		
		bob.style.display = "none";
		gag.style.display = block;
		
	} else {
		//document.getElementById('ColoneCentre').display = block;
		
	}
}*/
function totalTiming(nbEpisode, lengthEpisode) {
	var totalTiming = 0;
	
	var x1 = document.getElementsByClassName("nbEpisode");
	var	x2 = document.getElementsByClassName("lengthEpisode");
	var x3, x4, limite = document.getElementsByClassName("nbEpisode").length;
	
	for (var i = 0; i < limite; i++){
		x3 = x1[i].innerHTML;
		x4 = x2[i].innerHTML;
		totalTiming += document.getElementById("timeInvest").innerHTML = (parseInt(x3, 10) * parseInt(x4, 10));
	}
	
	
	document.getElementById("timeInvest").innerHTML = "Total : " + converTime(totalTiming) + numberWithSpaces(totalTiming) +
				"<p> Total en heures : " + (totalTiming / 60).toFixed(2) + " heure(s)."  + "</p>" + 
				"<p> Total en minutes : " + totalTiming + " minutes" + "</p>";
}

function converTime(tempsMinute) {
	var resultat;
	
	var nbJour =  Math.floor((tempsMinute / 1440));
	var nbHeure = Math.floor((tempsMinute % 1440) /60);
	var nbMin = (tempsMinute % 1440) %  60;
	
	return resultat = nbJour/*.toFixed(0) */+ " jour " + nbHeure + " heure " +  nbMin + " min " ;
}

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

/*

	//document.getElementById("span1").innerHTML = Res;
	document.getElementById(Res).style.display= "block"								//this one calls a variable
	document.getElementById("article1").style.display= "none"
	//document.getElementById("span1").innerHTML = "Paragraph changed!";*/







