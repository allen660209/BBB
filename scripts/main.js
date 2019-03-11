

jQuery(function () {
    var P1id, P2id, P3id, P4id, Ptotal, T1id,T2id, T3id, T4id,Ttotal,Bid,Aid
    var P1value, P2value, P3value, P4value, T1value, T2value, T3value, T4value, Avalue,Bvalue
    var Atotal=0

    /*
    // keyup event
    $('#P1').on('keyup', function () {
        //console.log('.on(keyup) = ' + $(this).val());
        P1count();
    });
    $('#P2').on('keyup', function () {
        //console.log('.on(keyup) = ' + $(this).val());
        P1count();
    });
    $('#P3').on('keyup', function () {
        //console.log('.on(keyup) = ' + $(this).val());
        P1count();
    });
    $('#P4').on('keyup', function () {
        //console.log('.on(keyup) = ' + $(this).val());
        P1count();
    });*/

    $('#B').on('keyup', function () {
        Ccount();
    });

    function P1count(){
        /*P1id = document.getElementById('P1');
        P1value = P1id.value;
        //if (P1value.length = 1) { //輸入值只有1個欄位，前面補1個0
        //    P1value = '0' + P1value
        //    $('input[id="P1"]').val(P1value);
        //}
        

        P2id = document.getElementById('P2');
        P2value = P2id.value;
        P3id = document.getElementById('P3');
        P3value = P3id.value;
        P4id = document.getElementById('P4');
        P4value = P4id.value;
        Ptotal = P1value + P2value + P3value + P4value;
        console.log("P:" + Ptotal);*/
        Ccount();
    }

    /*
    // keyup event
    $('#T1').on('keyup', function () {
        //console.log('.on(keyup) = ' + $(this).val());
        T1count();
    });
    $('#T2').on('keyup', function () {
        //console.log('.on(keyup) = ' + $(this).val());
        T1count();
    });
    $('#T3').on('keyup', function () {
        //console.log('.on(keyup) = ' + $(this).val());
        T1count();
    });
    $('#T4').on('keyup', function () {
        //console.log('.on(keyup) = ' + $(this).val());
        T1count();
    });*/

    function T1count() {
        /*T1id = document.getElementById('T1');
        T1value = T1id.value;
        T2id = document.getElementById('T2');
        T2value = T2id.value;
        T3id = document.getElementById('T3');
        T3value = T3id.value;
        T4id = document.getElementById('T4');
        T4value = T4id.value;
        Ttotal = T1value + T2value + T3value + T4value;
        console.log('T:' + Ttotal);*/
        Ccount();
    }

    function Ccount() {
        //Atotal = parseInt(Ptotal) + parseInt(Ttotal);
        //$('input[id="A"]').val(Atotal);
        Aid = document.getElementById('A');
        Avalue = Aid.value;
        Atotal = Avalue


        Bid = document.getElementById('B');
        Bvalue = Bid.value;
        if (Bvalue > 0) {
            $('input[id="C"]').val(Math.floor(Atotal / Bvalue));
            $('input[id="D"]').val(Math.floor(Atotal / Bvalue) * Bvalue);
            $('input[id="Jackpot"]').val(Atotal - (Math.floor(Atotal / Bvalue) * Bvalue));
        }
        else {
            $('input[id="C"]').val('');
            $('input[id="D"]').val('');
            $('input[id="Jackpot"]').val('');
        }

        
    }
})