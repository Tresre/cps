var clicks = 0;
var seconds = 0;
var ms = 0;
var started;
var finished;
function buttonClick() {
	if (finished !== true) {
    	++clicks;
    	document.getElementById("clicks").innerHTML = "Clicks: " + clicks;
    	if (started !== true) {startTest();}
    } else {
    	location.reload();
    }
}

function startTest() {
	started = true;
	var interval = setInterval(function () {
    	++ms;
        if (ms < 10) {
        	document.getElementById("time").innerHTML = (seconds + ":" + ms + "0");
        } else {
        	document.getElementById("time").innerHTML = (seconds + ":" + ms);
        }
        if (ms > 98) {
        	ms = 0;
            ++seconds;
        }
        if (seconds == 10) {
        	clearInterval(interval);
            var finalcps = clicks / 10;
            document.getElementById("final").innerHTML = "Your CPS: " + finalcps + "cps";
            setTimeout(function() {
              document.getElementById("clicks").innerHTML = "Click to try again!";
              finished = true;
            }, 3000);
        }
    }, 10);
}
