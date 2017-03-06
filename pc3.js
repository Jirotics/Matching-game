var st = ["image009.gif", "image010.gif", "image011.gif", "image012.gif", "image013.gif", "image014.gif", "image015.gif", "image016.gif", "image017.gif", "image018.gif", "image019.gif", "image020.gif", "image021.gif", "image022.gif", "image023.gif", "image024.gif"];
var mem_val = ["image001.gif", "image001.gif", "image002.gif", "image002.gif", "image003.gif", "image003.gif", "image004.gif", "image004.gif", "image005.gif", "image005.gif", "image006.gif", "image006.gif", "image007.gif", "image007.gif", "image008.gif", "image008.gif"];
var mem_tile = [];
var mem_ids = [];
var mem_return = [];
var flipped = 0;
shuffle(mem_val);


function newgame(){
	
var out = "<table>";
out += "<tr>"
var i;
for(i=0; i<st.length; i++){
	
	out += '<td><div id="tile'+i+'" onclick="memflip(this,\''+mem_val[i]+'\')">';
	out += "<img src=" +mem_val[i] + ">";
	out += '</div></td>';
	if((i+1)%4==0){
		out += "</tr>"
	}
}
out += "</table>";
document.getElementById("board").innerHTML = out;

	function hide(){
		var str;
		var x;
		for(x=0; x<st.length; x++){
			str = "tile"+x;
			document.getElementById(str).innerHTML = "<img src="+ st[x]+">";
		}
	}
	
	setTimeout(hide, 3000);
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

function memflip(tile, val){
	if(mem_tile.length<2){
		mem_return.push(tile.innerHTML);
		tile.innerHTML = '<img src='+val+'>';
		if(mem_tile.length==0){			
			mem_tile.push(val);
			mem_ids.push(tile.id);
		}else if(mem_tile.length==1){	
			mem_tile.push(val);
			mem_ids.push(tile.id);	
			if(mem_tile[0]==mem_tile[1]){
				flipped +=2;
				mem_tile = [];
				mem_ids = [];
				mem_return = [];
				if(flipped==mem_val.length){
					alert("game cleared");
					newgame();
				}
			}else{
				function flipback(){
					document.getElementById(mem_ids[0]).innerHTML = mem_return[0];
					document.getElementById(mem_ids[1]).innerHTML = mem_return[1];
					mem_tile = [];
					mem_ids = [];
					mem_return = [];
				}
				setTimeout(flipback, 700);
			}
			
		}
	}
}
	


newgame();

setInterval(myTimer, 1000);
var count =-3;

function myTimer() {
    count +=1;
	if(count>0){
    document.getElementById("cou").innerHTML = count;
	}
	if(count==120){
		alert("You failed to match the pictures in 120s. A new game will start");
		newgame();
	}
}