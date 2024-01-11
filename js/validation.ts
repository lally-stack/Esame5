

function start() {

    const input = document.getElementsByTagName('input')
    for (let i = 0; i < input.length; i++) {
        if (input[i].type === 'text') {
            input[i].addEventListener('keyup', validaCampi)
        } else if (input[i].type === 'radio') {
            input[i].addEventListener('change', validaCampi)
        } else if (input[i].type === 'date') {
            input[i].addEventListener('input', validaCampi)
        } else if (input[i].type === 'email') {
            input[i].addEventListener('keyup', validaCampi)
        } else if (input[i].type === 'tel') {
            input[i].addEventListener('keyup', validaCampi)
        } else if (input[i].type === 'password') {
            input[i].addEventListener('keyup', validaCampi)
        } else if (input[i].type === 'checkbox') {
            input[i].addEventListener('click', validaCampi)
        }

        input[i].id = input[i].id;

    }

}

function validaCampi(event) {
    const obj = document.getElementById(event.currentTarget.id) as HTMLInputElement
    const divError = document.getElementById(obj.id + "Error") as HTMLDivElement

    if (obj.required === true && obj.value !== null || obj.value !== "") {
        let validator = new isValid();
        if (obj.id === "nome") {
            const nome = obj.value
            nome.trim
            if (validator.nomeIsValid(nome) === true) {
                divError.innerHTML = "Ok!"
            } else {
                divError.innerHTML = "Compila il campo correttamente"
            }
        }

        if (obj.id === "cognome") {
            const cognome = obj.value
            cognome.trim
            if (validator.cognomeIsValid(cognome) === true) {
                divError.innerHTML = "Ok!"

            } else {
                divError.innerHTML = "Compila il campo correttamente"
            }

        }
        if (obj.id === "email") {
            const email = obj.value
            email.trim
            if (validator.emailIsValid(email) === true) {
                divError.innerHTML = "Ok!"

            } else {
                divError.innerHTML = "Compila il campo correttamente"
            }

        }
        if (obj.id === "ff" || obj.id === "mm" || obj.id === "ns") {
            const gender = obj.value
            const error = document.getElementById("genderError") as HTMLDivElement
            if (validator.sessoIsValid(gender) === true) {
                error.innerHTML = "Ok!"

            } else {
                error.innerHTML = "Compila il campo correttamente"
            }
        }
        if (obj.id === "citta") {
            const citta = obj.value
            citta.trim
            if (validator.cittaIsValid(citta) === true) {
                divError.innerHTML = "Ok!"

            } else {
                divError.innerHTML = "Compila il campo correttamente"
            }
        }
        if (obj.id === "provincia") {
            const provincia = obj.value
            provincia.trim
            if (validator.provinciaIsValid(provincia) === true) {
                divError.innerHTML = "Ok!"

            } else {
                divError.innerHTML = "Compila il campo correttamente"
            }
        }
        if (obj.id === "dataDiNascita") {
            let dataDiNascita = new Date()
            let data = dataDiNascita.toDateString()
            if (validator.dataDiNascitaIsValid(dataDiNascita) === true) {
                divError.innerHTML = "Ok!"

            } else {
                divError.innerHTML = "Compila il campo correttamente"
            }
        }
        if (obj.id === "casa" || obj.id === "ufficio" || obj.id === "azienda") {
            const tipoIndirizzo = obj.value
            const error = document.getElementById("tipoIndirizzoError") as HTMLDivElement
            if (validator.tipoIndirizzoIsValid(tipoIndirizzo) === true) {
                error.innerHTML = "Ok"

            } else {
                error.innerHTML = "Compila il campo correttamente"
            }

        }
        if (obj.id === "cap") {
            const cap = obj.value
            cap.trim
            if (validator.capIsValid(cap) === true) {
                divError.innerHTML = "Ok!"

            } else {
                divError.innerHTML = "Compila il campo correttamente"
            }
        }
        if (obj.id === "indirizzo") {
            const indirizzo = obj.value
            indirizzo.trim
            if (validator.indirizzoIsValid(indirizzo) === true) {
                divError.innerHTML = "Ok!"

            } else {
                divError.innerHTML = "Compila il campo correttamente"
            }
        }
        if (obj.id === "civico") {
            const civico = obj.value
            civico.trim
            if (validator.civicoIsValid(civico) === true) {
                divError.innerHTML = "Ok!"

            } else {
                divError.innerHTML = "Compila il campo correttamente"
            }
        }
        if (obj.id === "telefono" || obj.id === "cellulare" || obj.id === "aziendale") {
            const tipoRecapito = obj.value
            const error = document.getElementById("tipoRecapitoError") as HTMLDivElement
            if (validator.tipoRecapitoIsValid(tipoRecapito) === true) {
                error.innerHTML = "Ok"

            } else {
                error.innerHTML = "Compila il campo correttamente"
            }
        }
        if (obj.id === "recapito") {
            const recapito = obj.value
            if (validator.recapitoIsValid(recapito) === true) {
                divError.innerHTML = "Ok!"

            } else {
                divError.innerHTML = "Compila il campo correttamente"
            }
        }
        if (obj.id === "username") {
            const username = obj.value
            if (validator.usernameIsValid(username) === true) {
                divError.innerHTML = "Ok!"

            } else {
                divError.innerHTML = "Compila il campo correttamente"
            }
        }
        if (obj.id === "password") {
            const password = obj.value
            if (validator.passwordIsValid(password) === true) {
                divError.innerHTML = "Ok!"

            }

        }
        if (obj.id === "retypePassword") {
            const retypePassword = obj.value
            const inputPsw = document.getElementById('password') as HTMLInputElement
            const password = inputPsw.value
            if (validator.retypePswIsValid(retypePassword, password) === true) {
                divError.innerHTML = "Ok!"

            } else {
                divError.innerHTML = "Le psw non coincidono"
            }
        }
        if (obj.id === "terms") {
            const terms = obj.value
            if (validator.termsIsValid(terms) === true) {
                divError.innerHTML = "Grazie!"
                // campiValidi.push("terms: " + terms)
            } else {
                divError.innerHTML = "Oh no :("
            }
        }
    } else {
        if (obj.id === "signUpBtn" && obj.value === null || obj.value === "") {
            alert("Non hai compilato correttamente i campi")
        }
    }

}

class isValid {

    public nomeIsValid(nome: string): boolean {
        if (nome !== "") {
            if (nome.length < 3 || nome.length > 20) {
                return false

            } else {

                return true
            }
        } else {
            return false
        }
    }
    public cognomeIsValid(cognome: string): boolean {
        if (cognome !== "") {
            if (cognome.length < 3 || cognome.length > 20) {
                return false
            } else {

                return true
            }
        } else {
            return false
        }
    }
    public emailIsValid(email: string): boolean {
        if (email !== "") {
            const regexEmail = /^[A-z0-9\.\+_-]+@[A-z0-9\._-]+\.[A-z]{2,6}$/
            if (!regexEmail.test(email)) {
                return false
            } else {

                return true
            }
        } else {
            return false
        }

    }
    public sessoIsValid(sesso: string): boolean {
        let radio = document.querySelector("input[name=gender]:checked")
        if (radio !== null) {
            return true
        } else {
            return false
        }
    }
    public cittaIsValid(citta: string): boolean {
        if (citta !== "") {
            if (citta.length < 3 || citta.length > 20) {
                return false
            } else {

                return true
            }
        } else {
            return false
        }

    }
    public provinciaIsValid(provincia: string) {
        if (provincia !== "") {
            if (provincia.length < 2 || provincia.length > 15) {
                return false
            } else {
                return true
            }
        } else {
            return false
        }
    }
    public dataDiNascitaIsValid(dataDiNascita: Date): boolean {
        if (dataDiNascita !== null) {
            return true
        } else {
            return false
        }
    }
    public tipoIndirizzoIsValid(tipoIndirizzo: string): boolean {
        let radio = document.querySelector("input[name=tipoIndirizzo]:checked")
        if (radio !== null) {
            return true
        } else {
            return false
        }
    }
    public capIsValid(cap: string): boolean {
        if (cap !== "") {
            if (cap.length < 5 || cap.length > 6) {
                return false
            } else {
                return true
            }
        } else {
            return false
        }
    }
    public indirizzoIsValid(indirizzo: string): boolean {
        if (indirizzo !== "") {
            if (indirizzo.length < 5 || indirizzo.length > 25) {
                return false
            } else {
                return true
            }
        } else {
            return false
        }
    }
    public civicoIsValid(civico: string): boolean {
        if (civico !== "") {
            if (civico.length < 1 || civico.length > 10) {
                return false
            } else {
                return true
            }
        } else {
            return false
        }
    }
    public tipoRecapitoIsValid(tipoRecapito: string): boolean {
        let radio = document.querySelector("input[name=tipoRecapito]:checked")
        if (radio !== null) {
            return true
        } else {
            return false
        }
    }
    public recapitoIsValid(recapito: string): boolean {
        if (recapito !== "") {
            if (recapito.length < 10 || recapito.length > 13) {
                return false
            } else {
                return true
            }
        } else {
            return false
        }
    }
    public usernameIsValid(username: string): boolean {
        if (username !== "") {
            if (username.length < 5 || username.length > 15) {
                return false
            } else {
                return true
            }
        } else {
            return false
        }
    }
    public passwordIsValid(password: string) {
        let regexSP = /^(?=.*\W).{1,20}$/
        let regexN = /^(?=.*[0-9]).{1,20}$/

        let pswStrength: boolean = false

        let isValid = {
            isLow: false,
            isHigh: false
        }

        const pswCheck1 = document.querySelector('#l_1') as HTMLDivElement
        const pswCheck2 = document.querySelector('#l_2') as HTMLDivElement
        const pswCheck3 = document.querySelector('#l_3') as HTMLDivElement

        const passwordError = document.querySelector('#passwordError') as HTMLDivElement

        if (password.length >= 10) {
            pswCheck1.classList.add('bg-danger')
            passwordError.innerHTML = "Aggiungi un carattere speciale"
            if (search(regexSP, password) === 1) {
                pswCheck2.classList.add('bg-warning')
                passwordError.innerHTML = "Aggiungi un numero"
                isValid.isLow = true
                if (search(regexN, password) === 1) {
                    pswCheck3.classList.add('bg-success')
                    pswStrength = (isValid.isLow || isValid.isHigh) ? true : false
                    if (pswStrength === true) {
                        return true
                    } else {
                        return false
                    }
                } else {
                    pswCheck3.classList.remove('bg-success')
                    isValid.isHigh = false
                }
            } else {
                pswCheck2.classList.remove('bg-warning')
                isValid.isLow = false
            }
        } else {
            pswCheck1.classList.remove('bg-danger')
            passwordError.innerHTML = "La psw deve contenere almeno 10 caratteri"
        }
    }
    public retypePswIsValid(retypePsw: string, psw: string): boolean {
        // let retypePsw = document.getElementById("retypePassword") as HTMLInputElement
        // let retypeVal = retypePsw.value
        // let password = document.getElementById("password") as HTMLInputElement
        // let pswVal = password.value
        if (retypePsw !== "") {
            if (retypePsw !== psw) {
                return false
            } else {
                return true
            }
        } else {
            return false
        }
    }
    public termsIsValid(terms: string): boolean {
        let check = document.querySelector("input[id=terms]:checked") as HTMLInputElement
        let val = check.value
        if (check !== null && val === "on") {
            return true
        } else {
            return false
        }

    }
}

function search(regex: RegExp, psw: string) {
    return (psw.match(regex) || []).length
}

