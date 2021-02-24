//###################################################### 
//

// global variables
var usrSurnameValue, 
    formErase = false,
    listErase = false,
    surnameList = [
      'Bianchi',
      'Rossi',
      'Duzioni',
      'Balsano',
      'Verdi',
      'Giallini',
      'Santamaria',
      'Favino',
      'Mastandrea',
      'Accorsi'
    ];

// starting list in console
console.log('-- original surname list -----------------------');
for (var i = 0; i < surnameList.length; i++) {
  console.log('#'+(i+1)+' '+surnameList[i]);
}

// form sources
var usrSurnameForm = document.getElementById('usr_surname');

// info display hooks
var msgHtml           = document.getElementById('msg');
var checkMsgHtml      = document.getElementById('check_msg');
var displayResultHtml = document.getElementById('display_result');
var resultListHtml    = document.getElementById('result_list');

// button hooks
var checkBtn     = document.getElementById('check_btn');
var eraseBtn     = document.getElementById('erase_btn');
var resumeBtn    = document.getElementById('resume_btn');
var insertionBtn = document.getElementById('insertion_btn');

// ** SURNAME CHECK **
checkBtn.addEventListener('click', 
  function() {
    // form data retrieving
    usrSurnameValue = usrSurnameForm.value;
    console.log('usrSurnameValue = ' + usrSurnameValue);
    // consistency check
    if (usrSurnameValue == '') {
      msgHtml.className = 'show';
      checkMsgHtml.innerHTML = 'Compila il campo cognome';
    } else {
      // surname check
      var index = null;
      for (var i=0; i<surnameList.length; i++) {
        if (usrSurnameValue == surnameList[i]) index = i;
      }
      if (index != null) {
        // surname already in list: show notice
        checkMsgHtml.innerHTML = usrSurnameValue+' è già presente in lista';
        console.log(usrSurnameValue+' già presente');
        formErase = true;
      } else {
        // surname not in list: show notice and insertion button
        checkMsgHtml.innerHTML = usrSurnameValue+' non è presente in lista';
        console.log(usrSurnameValue+' non presente');
        insertionBtn.className = 'show';
        formErase = false;
      }
      msgHtml.className = 'show';
    }
  }
);

// ** CHECK REDO **
eraseBtn.addEventListener('click', 
  function() {
    usrSurnameForm.value = '';
  }
);

// ** CHECK RESUME **
resumeBtn.addEventListener('click', 
  function() {
    msgHtml.className = 'hide';
    checkMsgHtml.innerHTML = '';
    insertionBtn.className = 'hide';
    if (formErase) usrSurnameForm.value = '';
    if (listErase) {
      displayResultHtml.className = 'hide';
      resultListHtml.innerHTML = '';
    }
  }
);

// ** SURNAME INSERTION **
insertionBtn.addEventListener('click', 
  function() {
    // adding surname to list
    surnameList.push(usrSurnameValue);
    console.log(usrSurnameValue+' aggiunto')
    // capitalize list
    for (var i = 0; i < surnameList.length; i++) {
      surnameList[i] = surnameList[i][0].toUpperCase() + surnameList[i].substring(1).toLowerCase();
    }
    // sorting capitalized list
    surnameList.sort();
    // surname position & final list content filling
    console.log('-- new surname list -------------------');
    var index = null;
    usrSurnameValue = usrSurnameValue[0].toUpperCase() + usrSurnameValue.substring(1)
    for (var i = 0; i < surnameList.length; i++) {
      console.log('#'+(i+1)+' '+surnameList[i]);
      if (usrSurnameValue == surnameList[i]) index = i;
      resultListHtml.innerHTML += (index == i) ? '<li><span class="strong">#'+(i+1)+' '+surnameList[i]+'</span></li>' : '<li>#'+(i+1)+' '+surnameList[i]+'</li>';
    }
    // insertion message
    insertionBtn.className = 'hide';
    checkMsgHtml.innerHTML = usrSurnameValue+' è stato aggiunto in posizione <span class="strong">#'+(index+1)+'</span>';
    formErase = true;
    listErase = true;
    // show list
    displayResultHtml.className = 'show';
  }
);

//###################################################### 
//
