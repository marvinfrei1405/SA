
document.getElementById("f1").style.display = "none";

    var id = localStorage.key('3');
    var dados = localStorage.getItem(id);
    var finali = JSON.stringify(dados);



function invi() {
    document.getElementById("visivel2").style.display = "block";
    return false;
}

function final() {
        document.getElementById("visivel1").style.display = "block";
        return false;
    }


function tentativas() {
    var id = localStorage.key('1');
    var dados = localStorage.getItem(id);
    var tentativa = JSON.stringify(dados);
    
    tentativa = localStorage.getItem(1); 

    if(tentativa == 1){
        alert("Suas tentativas chegaram a 0 refaça as aulas do curso e tente novamente :)");
        invi();
    }

    if(tentativa == 3){
        alert("Você acertou menos que 70% você tem mais " + tentativa + " tentativas!");
        localStorage.setItem(1, 2);
        location.reload();
        return false;
    }
    if(tentativa == 2){
        tentativa = localStorage.getItem(1); 
        alert("Você acertou menos que 70% você tem mais " + tentativa + " tentativas!");
        localStorage.setItem(1, 1);
        location.reload();
        return false;      
    }
}

function resultadoprova(){

    var atv1 = document.getElementById('atv1').checked;
    var atv2 = document.getElementById('atv2').checked;
    var atv3 = document.getElementById('atv3').checked;
    var atv4 = document.getElementById('atv4').checked;
    var atv5 = document.getElementById('atv5').checked;
    var atv6 = document.getElementById('atv6').checked;
    var atv7 = document.getElementById('atv7').checked;
    var atv8 = document.getElementById('atv8').checked;
    var atv9 = document.getElementById('atv9').checked;
    var atv10 = document.getElementById('atv10').checked;
    var atv11 = document.getElementById('atv11').checked;
    var atv12 = document.getElementById('atv12').checked;
  
    var aprovado = 0;

    var id = localStorage.key('1');
    var dados = localStorage.getItem(id);
    var tentativa = JSON.stringify(dados);


    if(atv1 == true) {
        aprovado++
    } 
    if(atv2 == true) {
        aprovado++
    }
    if(atv3 == true) {
        aprovado++
    } 
    if(atv4 == true) {
        aprovado++
    } 
    if(atv5 == true) {
        aprovado++
    } 
    if(atv6 == true) {
        aprovado++
    } 
    if(atv7 == true) {
        aprovado++
    } 
    if(atv8 == true) {
        aprovado++
    } 
    if(atv9 == true) {
        aprovado++
    } 
    if(atv10 == true) {
        aprovado++
    } 
    if(atv11 == true) {
        aprovado++
    } 
    if(atv12 == true) {
        aprovado++
        
    } 

    if(aprovado > 8 && tentativa != 0){
        alert("você acertou mais de 70%");
        final();
    }


    if(aprovado <= 8) {
        tentativas();
        aprovado = 0;
    }


}

/*function tentativa1(){
    if (localStorage.getItem('tentativas') == 1)
    {
        
        localStorage.setItem('tentativas', 2);
    }
}*/
    /* parte do local storage (3 tentativas de fazer a prova que está dando erro: 
        to tentando saber como fazer o site manter a contagem mesmo reiniciando a página) 
        localStorage.setItem('tentativas', 0);
        localStorage.setItem('ajuda',2)
        localStorage.setItem('ajuda1',3)
        localStorage.setItem('ajuda2',1)

        alert(localStorage.getItem('tentativas'));
        Location.reload(True);
       if (localStorage.getItem('tentativas') + 1 == localStorage.getItem('ajuda2') )
       alert(localStorage.getItem('tentativas')) */
        

        
   
        /* if (i == 0) {
    
        localStorage.setItem('tentativas', 1);
        alert(localStorage.getItem('tentativas'));
        Location.reload()
    }
    if (i == 1) {
   
        localStorage.setItem('tentativas', 2);
        alert(localStorage.getItem('tentativas'));
        Location.reload()
    }
} */


/*function tempo(target, cb) {
    this.counter = 20000;
    this.target = target;
    this.callback = cb;
}
tempo.prototype.pad = function(s) {
    return (s < 10) ? '0' + s : s;
}
tempo.prototype.start = function(s) {
    this.counter();
}
tempo.prototype.stop = function(s) {
    this.counter();
}
tempo.prototype.done = function(s) {
    if(this.callback) this.callback();
}
tempo.prototype.display = function(s) {
    this.target.innerHTML = this.pad(s);
}
tempo.prototype.count = function(s) {
    var self = this;
    self.display.call(self, self.counter);
    self.counter--;
    var clock = setInterval(function() {
        var self = this;
        self.display.call(self, self.counter);
        self.counter--;
    */
