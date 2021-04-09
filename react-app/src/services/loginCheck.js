var login = false;

export function getLogin(){
    return login;
}

export function setLogin() {
    login = !login;
    console.log("New Login: ", login);
}
