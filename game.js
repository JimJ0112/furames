
var q;

function my(){
var name01 = document.getElementById("Name1").value;
var name02 = document.getElementById("Name2").value;
var cont1;//addition of names
var cont2;//.length
var modd;






document.getElementById("p1").style.color = "black"; 
document.getElementById("p2").style.color = "black"; 
document.getElementById("p3").style.color = "black"; 
document.getElementById("p4").style.color = "black"; 
document.getElementById("p5").style.color = "black"; 
document.getElementById("p6").style.color = "black"; 

var h =0;

if(name01 ==0 || name02 == 0){ window.alert("Please enter your names");
window.reload();}



cont1 = name01+name02;
cont2 = cont1.length;
document.getElementById("total").innerHTML = cont2;


if(cont2==0){
	document.getElementById("total").innerHTML = "Oops";


}//end of this if

var cnt = cont2;




               
                var j=0;

for(var z = 1; z<=cnt; z++){

 
	if(j >= 6){
		j = 0; } 
		
		j++;

	

	}

		if( j==1){document.getElementById("Answer").innerHTML = "Friends"; document.getElementById("p1").style.color = "#FF0000"; document.getElementById("Answer").style.color = "#FF0000";} 
	else if( j==2){document.getElementById("Answer").innerHTML = "Lovers"; document.getElementById("p2").style.color = "#FF0000";  document.getElementById("Answer").style.color = "#FF0000";}
	else if( j==3){document.getElementById("Answer").innerHTML = "Affair"; document.getElementById("p3").style.color = "#FF0000";  document.getElementById("Answer").style.color = "#FF0000";}
	else if( j==4){document.getElementById("Answer").innerHTML = "Marriage"; document.getElementById("p4").style.color = "#FF0000";  document.getElementById("Answer").style.color = "#FF0000";}
	else if( j==5){document.getElementById("Answer").innerHTML = "Enemies"; document.getElementById("p5").style.color = "#FF0000";  document.getElementById("Answer").style.color = "#FF0000";}
	else if( j==6){document.getElementById("Answer").innerHTML = "Special someone"; document.getElementById("p6").style.color = "#FF0000";  document.getElementById("Answer").style.color = "#FF0000";}
	else{document.getElementById("Answer").innerHTML = "error"; document.getElementById("Answer").style.color = "#FF0000";  document.getElementById("Answer").style.color = "#FF0000";} 
	q = j;

	if(cont2==0){}else{modd = setTimeout(zap, 1500);}

} //end of my


function zap(){
document.getElementById("bg-modal").style.display="flex";

if(q == 1 ){document.getElementById("modal-text").innerHTML = "A real friend is one who walks in when the rest of the world walks out";}
else if (q == 2 ){document.getElementById("modal-text").innerHTML = "Love is composed of a single soul inhabiting two bodies.";}
else if (q == 3 ){document.getElementById("modal-text").innerHTML = "Hoy bawal yan";}
else if (q == 4 ){document.getElementById("modal-text").innerHTML = "sana alls";}
else if (q == 5 ){document.getElementById("modal-text").innerHTML = "magbati na kayo pls";}
else if (q == 6 ){document.getElementById("modal-text").innerHTML = "kung ako sayo, aamin na ko";}

}


function arf(){



	document.getElementById("bg-modal").style.display="none";
	location.reload();

}

console.log();