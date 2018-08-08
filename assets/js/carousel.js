var partIndex = 1;
vewPart(partIndex);

function botPart(n) {
vewPart(partIndex += n);
}

function currentPart(n) {
    vewPart(partIndex = n);
    }

function vewPart(n) {

        var i;
        var part = document.getElementsByClassName("myPart");
        var dots = document.getElementsByClassName("viewPart");

        if (n > part.length) {partIndex = 1}

        if (n < 1) {partIndex = part.length}
        for (i = 0; i < part.length; i++) {
            part[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
                }
        part[partIndex-1].style.display = "block";
        dots[partIndex-1].className += " active";
    }