//###################################################### 
//

// global variables
var usrSurnameValue, 
    // checkOK = 0,
    surnameList = [
      'Bianchi',
      'Rossi',
      'Duzioni',
      'Balsano',
      'Verdi',
      '',
      '',
      '',
      '',
      '',
      ''
    ];

// email list in console
console.log('-- surname list -----------------------');
for (var i = 0; i < surnameList.length; i++) {
  console.log('#'+(i+1)+' '+surnameList[i]);
}

// form sources
var usrSurnameForm = document.getElementById('usr_surname');

// info display hooks
var msgHtml       = document.getElementById('msg');
var checkMsgHtml  = document.getElementById('check_msg');

// ** SURNAME INSERTION **
var checkBtn = document.getElementById('check_btn');
checkBtn.addEventListener('click', 
  function() {

    // data retrieving
    usrSurnameValue = usrSurnameForm.value;
    console.log('usrSurnameValue = ' + usrSurnameValue);

    // consistency check
    if (usrSurnameValue == '') {
      msgHtml.className = 'show';
      checkMsgHtml.innerHTML = 'Compila il campo cognome';
    } else {

      // se non è già presente
      // aggiungi usrSurnameValue a surnameList

      // se è già presente
      // non fare nessuna aggiunta

      // riordina la lista (forse duplicando)
      // surnameList.sort();

      // mostra la lista ordinata

      // indica la posizione di usrSurnameValue

    }
  }
);

//###################################################### 
//
