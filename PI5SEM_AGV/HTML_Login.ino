const char* loginPage(){
    const char* code = 
    "<div id='main'>"
    "<img width='100' height='100' src='https://media.licdn.com/dms/image/C4D0BAQF2nIpNK4FMpQ/company-logo_100_100/0/1651974426008?e=1720051200&v=beta&t=6qMQGTnhTPqcXQm0ChEYKNLXMRANOAwCpnFiDSfIw20' alt='logo Dup'>"
    "<form name='loginForm' id='containerForm'>"
        "<h1>Atualizar Firewall</h1>"

        "<div class='controleform'>"
            "<label for='usuario'>Usuario</label>"
            "<input type='text' id='usuario' name='userid' placeholder='seu nome de usuario'>"
        "</div>"

        "<div class='controleform'>"
            "<label for='senha'>Senha</label>"
            "<input type='Password' id='senha' name='pwd' placeholder='sua senha'>"
        "</div>"

        "<input id='bot' type='submit' onclick='check(this.form)' value='Entrar'>"
    "</form>"
"</div>"

"<style>"

    "img{"
    "border-radius: 50px;"
    "}"

    ":root{"
        "font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;"
        "background-image: url(https://picsum.photos/2714/1916);"
        "background-repeat: no-repeat;"
        "background-size: cover;"
    "}"

    "h1{"
        "font-size: 14pt;"
        "text-align: center;"
    "}"

    "#main{"
        "display: flex;"
        "align-items: center;"
        "flex-direction: column;"
        "margin: 100px;"
    "}"

    "#containerForm{"
        "background-color: white;"
        "padding: 30px 80px;"
        "margin: 25px;"
        "border-radius: 25px;"

    "}"

    ".controleform{"
        "display: flex;"
        "flex-direction: column;"
        "width: 300px;"
        "height: 75px;"
    "}"

    ".controleform label{"
    "font-size: 10pt;"
    "padding-bottom: 5px;"
    "}"
    
    ".controleform input{"
        "height: 30px;"
        "border: solid 1px #807e7e;"
        "border-radius: 4px;"
    "}"

    "#bot{"
        "height: 40px;"
        "width: 100%;"
        "border: none;"
        "border-radius: 8px;"
        "color: #000000;"
        "cursor: pointer;"
        "box-shadow: inset 2px 2px 1px #ac9fa8;"
        "background-color: #8ef487;"
        "}"

    "#bot:active {"
        "box-shadow: inset 1px 1px 2px #ac9fa8;"
    "}"

    "#bot:hover, #bot:focus {"
    "background-color: #55e855;"
    "}"

"</style>"

"<script>"
    "function check(form){"
        "if(form.userid.value=='admin' && form.pwd.value=='admin'){"
            "window.open('/serverIndex')"
        "}"
        "else {"
            "alert('Login ou senha inválidos')"
        "}"
    "}"
"</script>";

    return code;
}