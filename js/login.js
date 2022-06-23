let btnClose = document.getElementsByClassName('btnClose');
let userReg = document.getElementById('nameUser');
let emailReg = document.getElementById('emailUser');
let passReg = document.getElementById('passUser');
let recordarUser = document.getElementById('recordarme');
let btnLogin = document.getElementById('btnLogin')
let modal = document.getElementById('modalSignin');

function validarUser(storage) {
    let userName = userReg.value;
    let userEmail = emailReg.value;
    let userPass = passReg.value;
    const usuario = {
        'name': userName,
        'email': userEmail,
        'pass': userPass
    }
    storage === 'sessionStorage' && sessionStorage.setItem('usuario', JSON.stringify(usuario));
    storage === 'localStorage' && localStorage.setItem('usuario', JSON.stringify(usuario));
}

btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    if (!userReg.value || !emailReg.value || !passReg.value) {
        alert('Todos los campos son requeridos');
    } else {
        if (recordarUser.checked) {
            validarUser('localStorage');
            saludarUsuario(recuperarUsuario(localStorage));
        } else {
            validarUser('sessionStorage');
            saludarUsuario(recuperarUsuario(sessionStorage));
        }
    }

});

function recuperarUsuario(storage) {
    let usuarioGuardado = JSON.parse(storage.getItem('usuario'));
    return usuarioGuardado;
}
function irAIndex() {
    window.location.href = "index.html";
}

function saludarUsuario(validarUser) {
    if (validarUser)
        Swal.fire({
            title: (`${validarUser.name} ingresaste correctamente a VapeLife`),
        })
    window.setTimeout(function () {
        irAIndex();
    }, 2500);
}