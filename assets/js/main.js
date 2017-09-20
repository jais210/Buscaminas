var bomb = initMatriz();

function doGame() {
    doCamp();
    doBomb(bomb);
    bombAround(bomb);
}

<<<<<<< HEAD
function initMatriz() {
    var camp = [];
    for (var i = 0; i < 8; i++) {
        camp[i] = [0, 0, 0, 0, 0, 0, 0, 0];
    }
    return camp;
}
=======

>>>>>>> cdf5aa9d7697da428c188af6ad9f612122b17e50

function doCamp() {
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            var div = document.createElement("div");
            div.id = i + "" + j;
            div.addEventListener("click", appearNumber, true);
            campoMinas.appendChild(div);
        }
    }
}

function doBomb(campo) {
    var fil = 0;
    var col = 0;

    fil = Math.floor((Math.random() * 7) + 0);
    col = Math.floor((Math.random() * 7) + 0);

    for (var i = 0; i < 8; i++) {
        while (campo[fil][col] == "*") {
            fil = Math.floor((Math.random() * 7) + 0);
            col = Math.floor((Math.random() * 7) + 0);
        }
        campo[fil][col] = "*";
    }

}

function appearNumber(e) {
    var auxstr = this.id.split("");
    var myid = auxstr[0] + auxstr[1];
    divObj = document.getElementById(myid);

    if (bomb[parseInt(auxstr[0], 10)][parseInt(auxstr[1], 10)] == 0) {
        divObj.style.backgroundColor = "pink";
        openAround(parseInt(auxstr[0], 10), parseInt(auxstr[1], 10), bomb);
    } else {
        if (bomb[parseInt(auxstr[0], 10)][parseInt(auxstr[1], 10)] != "*") {
            document.getElementById(myid).innerHTML = "<p style='margin-top:15px;'>" + bomb[parseInt(auxstr[0], 10)][parseInt(auxstr[1], 10)] + "</p>";
            divObj.style.backgroundColor = "pink";
        } else {
            divObj.style.backgroundImage = "url(assets/img/bomba.jpg)";
            openCamp(bomb);
            alert("Esto ha explotado");

            var buttonReinicia = document.getElementById(btnReinicia);
            buttonReinicia.addEventListener('click', doGame(), false); // doGame 


        }
    }
}

function bombAround(campo) {
    for (var i = 0; i < 8; i++) {
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                if (campo[i][j] == "*") {
                    if (i == 0 && j == 0) {
                        putNumberBomb(i, j, i + 1, j + 1, campo);
                    } else if (i == 0 && (j > 0 && j < 7)) {
                        putNumberBomb(i, j - 1, i + 1, j + 1, campo);
                    } else if (i == 0 && j == 7) {
                        putNumberBomb(i, j - 1, i + 1, j, campo);
                    } else if (j == 7 && (i > 0 && i < 7)) {
                        putNumberBomb(i - 1, j - 1, i + 1, j, campo);
                    } else if (i == 7 && j == 7) {
                        putNumberBomb(i - 1, j - 1, i, j, campo);
                    } else if (i == 7 && (j > 0 && j < 7)) {
                        putNumberBomb(i - 1, j - 1, i, j + 1, campo);
                    } else if (i == 7 && j == 0) {
                        putNumberBomb(i - 1, j, i, j + 1, campo);
                    } else if (j == 0 && (i > 0 && i < 7)) {
                        putNumberBomb(i - 1, j, i + 1, j + 1, campo);
                    } else {
                        putNumberBomb(i - 1, j - 1, i + 1, j + 1, campo);
                    }
                }
            }
        }
    }
}

function putNumberBomb(vari, varj, fini, finj, campo) {
    for (var i = vari; i <= fini; i++) {
        for (var j = varj; j <= finj; j++) {
            if (campo[i][j] != "*") {
                campo[i][j] = (parseInt(campo[i][j]) + 1);
            }
        }
    }
}



function openMount(vari, varj, fini, finj, cori, corj, campo) {
    for (var i = vari; i <= fini; i++) {
        for (var j = varj; j <= finj; j++) {
            var myid = i + "" + j;
            var objDiv = document.getElementById(myid)
            if (objDiv.textContent == "") {
                if (campo[i][j] == 0) {
                    if (i == cori && j == corj) {
                        objDiv.textContent = "";
                        objDiv.style.backgroundColor = "pink";
                    } else {
                        if (objDiv.style.backgroundColor != "pink") {
                            openAround(i, j, campo);
                        }
                    }

                } else {
                    if (campo[i][j] != "*") {
                        document.getElementById(myid).innerHTML = "<p style='margin-top:15px;'>" + bomb[i][j] + "</p>";
                        objDiv.style.backgroundColor = "pink";
                    }
                }
            }
        }
    }
}

// 
function openCamp(campo) {
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            var myid = i + "" + j;
            var objDiv = document.getElementById(myid);
            if (campo[i][j] == "*") {
                objDiv.style.backgroundImage = "url(assets/img/bomba.jpg)";
            }
        }
    }
}