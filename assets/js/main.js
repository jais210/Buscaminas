window.onload = function() {

    // doCamp();
    // doBomb(minas);
    // bombAround(minas);

   

    var minas = initMatriz();

    function initMatriz() {
        var campo = [];
        for (var i = 0; i < 8; i++) {
            campo[i] = [0, 0, 0, 0, 0, 0, 0, 0];
        }
        return campo;
    }
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

    function appearNumber(e){
        var auxstr = this.id.split("");				
        var myid = auxstr[0] + auxstr[1];			
        divObj = document.getElementById(myid);

        if(minas[parseInt(auxstr[0],10)][parseInt(auxstr[1],10)] == 0){
            divObj.style.backgroundColor = "white";					
            abrirAlrededor(parseInt(auxstr[0],10),parseInt(auxstr[1],10),minas);
        }else{
            if(minas[parseInt(auxstr[0],10)][parseInt(auxstr[1],10)] != "*"){
                document.getElementById(myid).innerHTML = "<p style='margin-top:15px;'>" + minas[parseInt(auxstr[0],10)][parseInt(auxstr[1],10)] + "</p>";
                divObj.style.backgroundColor = "white";
            }else{
                divObj.style.backgroundImage = "url(img/bomba.jpg)";						
                abrirTablero(minas);
                alert("Perdiste =(");
            }
        }						
    }			

    function bombAround(minas) {
        for (var i = 0; i < 8; i++) {
            for (var i = 0; i < 8; i++) {
                for (var j = 0; j < 8; j++) {
                    if (tablero[i][j] == "*") {
                        if (i == 0 && j == 0) {
                            putNumberBomb(i, j, i + 1, j + 1, tablero);
                        }
                        else if (i == 0 && (j > 0 && j < 7)) {
                            putNumberBomb(i, j - 1, i + 1, j + 1, tablero);
                        }
                        else if (i == 0 && j == 7) {
                            putNumberBomb(i, j - 1, i + 1, j, tablero);
                        }
                        else if (j == 7 && (i > 0 && i < 7)) {
                            putNumberBomb(i - 1, j - 1, i + 1, j, tablero);
                        }
                        else if (i == 7 && j == 7) {
                            putNumberBomb(i - 1, j - 1, i, j, tablero);
                        }
                        else if (i == 7 && (j > 0 && j < 7)) {
                            putNumberBomb(i - 1, j - 1, i, j + 1, tablero);
                        }
                        else if (i == 7 && j == 0) {
                            putNumberBomb(i - 1, j, i, j + 1, tablero);
                        }
                        else if (j == 0 && (i > 0 && i < 7)) {
                            putNumberBomb(i - 1, j, i + 1, j + 1, tablero);
                        } else {
                            putNumberBomb(i - 1, j - 1, i + 1, j + 1, tablero);
                        }
                    }
                }
            }
        }
    }


    function putNumberBomb(vari,varj,fini,finj,tablero){
        for(var i = vari; i <= fini; i++){
            for(var j = varj; j <= finj; j++){			           
               if(tablero[i][j] != "*"){
                       tablero[i][j] = (parseInt(tablero[i][j])+1);		           		
               }
            }
        }
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

    
    

    function openMount(vari,varj,fini,finj,cori,corj,tablero){
        for(var i = vari; i <= fini; i++){
            for(var j = varj; j <= finj; j++){		
                var myid = i+""+j;
                var objDiv =  document.getElementById(myid)	           
               if(objDiv.textContent == ""){			           		
                       if(tablero[i][j] == 0){			           			
                           if(i == cori && j == corj){			           				
                               objDiv.textContent = ""	; 
                               objDiv.style.backgroundColor = "white";	          				
                           }else{
                               if(objDiv.style.backgroundColor != "white"){
                                   openAround(i, j,tablero);
                               }			           				
                           }

                       }else{
                           if(tablero[i][j] != "*"){
                               document.getElementById(myid).innerHTML = "<p style='margin-top:15px;'>" + tablero[i][j] + "</p>"; 
                               objDiv.style.backgroundColor = "white";	
                           }
                       }			           			           		
               }			           
            }
        }
    }

    function openAround(xi,xj,tablero){
        if(xi == 0 && xj == 0){
            openMount(xi, xj, xi + 1, xj + 1, xi, xj,tablero);
        }
        else if(xi == 0 && (xj > 0 && xj < 7)){
            openMount(xi, xj - 1, xi + 1, xj + 1, xi, xj,tablero);
        }
        else if(xi == 0 && xj == 7){
            openMount(xi, xj - 1, xi + 1, xj, xi, xj,tablero);
        }
        else if(xj == 7 && (xi > 0 && xi < 7)){
            openMount(xi - 1, xj - 1, xi + 1, xj, xi, xj,tablero);
        }
        else if(xi == 7 && xj == 7){
            openMount(xi - 1, xj - 1, xi, xj, xi, xj,tablero);
        }
        else if(xi == 7 && (xj > 0 && xj < 7)){
            openMount(xi - 1, xj - 1, xi, xj + 1, xi, xj,tablero);
        }
        else if(xi == 7 && xj == 0){
            openMount(xi - 1, xj, xi, xj + 1, xi, xj,tablero);
        }
        else if(xj == 0 && (xi > 0 && xi < 7)){
            openMount(xi - 1, xj, xi + 1, xj + 1, xi, xj,tablero);
        }else{
            openMount(xi - 1, xj - 1, xi + 1, xj + 1, xi, xj,tablero);
        }
    } 

    function OpenCamp(tablero){
        for(var i = 0; i < 8; i++){
            for(var j = 0; j < 8; j++){	
                var myid = i+""+j;
                var objDiv =  document.getElementById(myid);		           
               if(tablero[i][j] == "*"){			        		
                       objDiv.style.backgroundImage = "url(img/bomba.jpg)";
               }
            }
        }
    }			
}
