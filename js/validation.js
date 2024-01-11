function start() {
    var input = document.getElementsByTagName('input');
    for (var i = 0; i < input.length; i++) {
        if (input[i].type === 'text') {
            input[i].addEventListener('keyup', validaCampi);
        }
        else if (input[i].type === 'radio') {
            input[i].addEventListener('change', validaCampi);
        }
        else if (input[i].type === 'date') {
            input[i].addEventListener('input', validaCampi);
        }
        else if (input[i].type === 'email') {
            input[i].addEventListener('keyup', validaCampi);
        }
        else if (input[i].type === 'tel') {
            input[i].addEventListener('keyup', validaCampi);
        }
        else if (input[i].type === 'password') {
            input[i].addEventListener('keyup', validaCampi);
        }
        else if (input[i].type === 'checkbox') {
            input[i].addEventListener('click', validaCampi);
        }
        input[i].id = input[i].id;
    }
}
function validaCampi(event) {
    var obj = document.getElementById(event.currentTarget.id);
    var divError = document.getElementById(obj.id + "Error");
    if (obj.required === true && obj.value !== null || obj.value !== "") {
        var validator = new isValid();
        if (obj.id === "nome") {
            var nome = obj.value;
            nome.trim;
            if (validator.nomeIsValid(nome) === true) {
                divError.innerHTML = "Ok!";
            }
            else {
                divError.innerHTML = "Compila il campo correttamente";
            }
        }
        if (obj.id === "cognome") {
            var cognome = obj.value;
            cognome.trim;
            if (validator.cognomeIsValid(cognome) === true) {
                divError.innerHTML = "Ok!";
            }
            else {
                divError.innerHTML = "Compila il campo correttamente";
            }
        }
        if (obj.id === "email") {
            var email = obj.value;
            email.trim;
            if (validator.emailIsValid(email) === true) {
                divError.innerHTML = "Ok!";
            }
            else {
                divError.innerHTML = "Compila il campo correttamente";
            }
        }
        if (obj.id === "ff" || obj.id === "mm" || obj.id === "ns") {
            var gender = obj.value;
            var error = document.getElementById("genderError");
            if (validator.sessoIsValid(gender) === true) {
                error.innerHTML = "Ok!";
            }
            else {
                error.innerHTML = "Compila il campo correttamente";
            }
        }
        if (obj.id === "citta") {
            var citta = obj.value;
            citta.trim;
            if (validator.cittaIsValid(citta) === true) {
                divError.innerHTML = "Ok!";
            }
            else {
                divError.innerHTML = "Compila il campo correttamente";
            }
        }
        if (obj.id === "provincia") {
            var provincia = obj.value;
            provincia.trim;
            if (validator.provinciaIsValid(provincia) === true) {
                divError.innerHTML = "Ok!";
            }
            else {
                divError.innerHTML = "Compila il campo correttamente";
            }
        }
        if (obj.id === "dataDiNascita") {
            var dataDiNascita = new Date();
            var data = dataDiNascita.toDateString();
            if (validator.dataDiNascitaIsValid(dataDiNascita) === true) {
                divError.innerHTML = "Ok!";
            }
            else {
                divError.innerHTML = "Compila il campo correttamente";
            }
        }
        if (obj.id === "casa" || obj.id === "ufficio" || obj.id === "azienda") {
            var tipoIndirizzo = obj.value;
            var error = document.getElementById("tipoIndirizzoError");
            if (validator.tipoIndirizzoIsValid(tipoIndirizzo) === true) {
                error.innerHTML = "Ok";
            }
            else {
                error.innerHTML = "Compila il campo correttamente";
            }
        }
        if (obj.id === "cap") {
            var cap = obj.value;
            cap.trim;
            if (validator.capIsValid(cap) === true) {
                divError.innerHTML = "Ok!";
            }
            else {
                divError.innerHTML = "Compila il campo correttamente";
            }
        }
        if (obj.id === "indirizzo") {
            var indirizzo = obj.value;
            indirizzo.trim;
            if (validator.indirizzoIsValid(indirizzo) === true) {
                divError.innerHTML = "Ok!";
            }
            else {
                divError.innerHTML = "Compila il campo correttamente";
            }
        }
        if (obj.id === "civico") {
            var civico = obj.value;
            civico.trim;
            if (validator.civicoIsValid(civico) === true) {
                divError.innerHTML = "Ok!";
            }
            else {
                divError.innerHTML = "Compila il campo correttamente";
            }
        }
        if (obj.id === "telefono" || obj.id === "cellulare" || obj.id === "aziendale") {
            var tipoRecapito = obj.value;
            var error = document.getElementById("tipoRecapitoError");
            if (validator.tipoRecapitoIsValid(tipoRecapito) === true) {
                error.innerHTML = "Ok";
            }
            else {
                error.innerHTML = "Compila il campo correttamente";
            }
        }
        if (obj.id === "recapito") {
            var recapito = obj.value;
            if (validator.recapitoIsValid(recapito) === true) {
                divError.innerHTML = "Ok!";
            }
            else {
                divError.innerHTML = "Compila il campo correttamente";
            }
        }
        if (obj.id === "username") {
            var username = obj.value;
            if (validator.usernameIsValid(username) === true) {
                divError.innerHTML = "Ok!";
            }
            else {
                divError.innerHTML = "Compila il campo correttamente";
            }
        }
        if (obj.id === "password") {
            var password = obj.value;
            if (validator.passwordIsValid(password) === true) {
                divError.innerHTML = "Ok!";
            }
        }
        if (obj.id === "retypePassword") {
            var retypePassword = obj.value;
            var inputPsw = document.getElementById('password');
            var password = inputPsw.value;
            if (validator.retypePswIsValid(retypePassword, password) === true) {
                divError.innerHTML = "Ok!";
            }
            else {
                divError.innerHTML = "Le psw non coincidono";
            }
        }
        if (obj.id === "terms") {
            var terms = obj.value;
            if (validator.termsIsValid(terms) === true) {
                divError.innerHTML = "Grazie!";
                // campiValidi.push("terms: " + terms)
            }
            else {
                divError.innerHTML = "Oh no :(";
            }
        }
    }
    else {
        if (obj.id === "signUpBtn" && obj.value === null || obj.value === "") {
            alert("Non hai compilato correttamente i campi");
        }
    }
}
var isValid = /** @class */ (function () {
    function isValid() {
    }
    isValid.prototype.nomeIsValid = function (nome) {
        if (nome !== "") {
            if (nome.length < 3 || nome.length > 20) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
    };
    isValid.prototype.cognomeIsValid = function (cognome) {
        if (cognome !== "") {
            if (cognome.length < 3 || cognome.length > 20) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
    };
    isValid.prototype.emailIsValid = function (email) {
        if (email !== "") {
            var regexEmail = /^[A-z0-9\.\+_-]+@[A-z0-9\._-]+\.[A-z]{2,6}$/;
            if (!regexEmail.test(email)) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
    };
    isValid.prototype.sessoIsValid = function (sesso) {
        var radio = document.querySelector("input[name=gender]:checked");
        if (radio !== null) {
            return true;
        }
        else {
            return false;
        }
    };
    isValid.prototype.cittaIsValid = function (citta) {
        if (citta !== "") {
            if (citta.length < 3 || citta.length > 20) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
    };
    isValid.prototype.provinciaIsValid = function (provincia) {
        if (provincia !== "") {
            if (provincia.length < 2 || provincia.length > 15) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
    };
    isValid.prototype.dataDiNascitaIsValid = function (dataDiNascita) {
        if (dataDiNascita !== null) {
            return true;
        }
        else {
            return false;
        }
    };
    isValid.prototype.tipoIndirizzoIsValid = function (tipoIndirizzo) {
        var radio = document.querySelector("input[name=tipoIndirizzo]:checked");
        if (radio !== null) {
            return true;
        }
        else {
            return false;
        }
    };
    isValid.prototype.capIsValid = function (cap) {
        if (cap !== "") {
            if (cap.length < 5 || cap.length > 6) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
    };
    isValid.prototype.indirizzoIsValid = function (indirizzo) {
        if (indirizzo !== "") {
            if (indirizzo.length < 5 || indirizzo.length > 25) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
    };
    isValid.prototype.civicoIsValid = function (civico) {
        if (civico !== "") {
            if (civico.length < 1 || civico.length > 10) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
    };
    isValid.prototype.tipoRecapitoIsValid = function (tipoRecapito) {
        var radio = document.querySelector("input[name=tipoRecapito]:checked");
        if (radio !== null) {
            return true;
        }
        else {
            return false;
        }
    };
    isValid.prototype.recapitoIsValid = function (recapito) {
        if (recapito !== "") {
            if (recapito.length < 10 || recapito.length > 13) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
    };
    isValid.prototype.usernameIsValid = function (username) {
        if (username !== "") {
            if (username.length < 5 || username.length > 15) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
    };
    isValid.prototype.passwordIsValid = function (password) {
        var regexSP = /^(?=.*\W).{1,20}$/;
        var regexN = /^(?=.*[0-9]).{1,20}$/;
        var pswStrength = false;
        var isValid = {
            isLow: false,
            isHigh: false
        };
        var pswCheck1 = document.querySelector('#l_1');
        var pswCheck2 = document.querySelector('#l_2');
        var pswCheck3 = document.querySelector('#l_3');
        var passwordError = document.querySelector('#passwordError');
        if (password.length >= 10) {
            pswCheck1.classList.add('bg-danger');
            passwordError.innerHTML = "Aggiungi un carattere speciale";
            if (search(regexSP, password) === 1) {
                pswCheck2.classList.add('bg-warning');
                passwordError.innerHTML = "Aggiungi un numero";
                isValid.isLow = true;
                if (search(regexN, password) === 1) {
                    pswCheck3.classList.add('bg-success');
                    pswStrength = (isValid.isLow || isValid.isHigh) ? true : false;
                    if (pswStrength === true) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                else {
                    pswCheck3.classList.remove('bg-success');
                    isValid.isHigh = false;
                }
            }
            else {
                pswCheck2.classList.remove('bg-warning');
                isValid.isLow = false;
            }
        }
        else {
            pswCheck1.classList.remove('bg-danger');
            passwordError.innerHTML = "La psw deve contenere almeno 10 caratteri";
        }
    };
    isValid.prototype.retypePswIsValid = function (retypePsw, psw) {
        // let retypePsw = document.getElementById("retypePassword") as HTMLInputElement
        // let retypeVal = retypePsw.value
        // let password = document.getElementById("password") as HTMLInputElement
        // let pswVal = password.value
        if (retypePsw !== "") {
            if (retypePsw !== psw) {
                return false;
            }
            else {
                return true;
            }
        }
        else {
            return false;
        }
    };
    isValid.prototype.termsIsValid = function (terms) {
        var check = document.querySelector("input[id=terms]:checked");
        var val = check.value;
        if (check !== null && val === "on") {
            return true;
        }
        else {
            return false;
        }
    };
    return isValid;
}());
function search(regex, psw) {
    return (psw.match(regex) || []).length;
}
