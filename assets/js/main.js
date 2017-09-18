window.onload = function() {
    function doCamp() {
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                var div = document.createElement("div");
                div.id = i + "" + j;
                div.addEventListener("click", mostrarNumero, true);
                campoMinas.appendChild(div);
            }
        }
    }

    var minas = initMatriz();

    function initMatriz() {
        var campo = [];
        for (var i = 0; i < 8; i++) {
            campo[i] = [0, 0, 0, 0, 0, 0, 0, 0];
        }
        return campo;
    }

    function doBomb(minas) {
        var fil = 0;
        var col = 0;

        fil = Math.floor((Math.random() * 7) + 0);
        col = Math.floor((Math.random() * 7) + 0);

        for (var i = 0; i < 8; i++) {
            while (minas[fil][col] == "*") {
                fil = Math.floor((Math.random() * 7) + 0);
                col = Math.floor((Math.random() * 7) + 0);

            }
            tablero[fil][col] = "*";
        }

    }

    function bombAround(minas) {

        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                if (minas[i][j] == "*") {
                    if (i == 0 && j == 0) {
                        addNumberOfBomb(i, j, i + 1, j + 1, minas);
                    } else if (i == 0 && (j > 0 && j < 7)) {
                        addNumberOfBomb(i, j - 1, i + 1, j + 1, minas);
                    } else if (i == 0 && j == 7) {
                        addNumberOfBomb(i, j - 1, i + 1, j, minas);
                    } else if (j == 7 && (i > 0 && i < 7)) {
                        addNumberOfBomb(i - 1, j - 1, i + 1, j, minas);
                    } else if (i == 7 && j == 7) {
                        addNumberOfBomb(i - 1, j - 1, i + 1, j, minas);
                    } else if (i == 7 && j == 7) {
                        addNumberOfBomb(i - 1, j - 1, i, j, minas)
                    } else if (i == 7 && (j > 0 && j < 7)) {
                        addNumberOfBomb(i - 1, j - 1, i, j + 1, minas);

                    }
                }
            }
        }

    }
}