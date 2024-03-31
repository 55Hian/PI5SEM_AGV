const char* updatePage(){
    const char* code = 
"<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>"
"<div id='main'>"
    "<img width='100' height='100' src='https://media.licdn.com/dms/image/C4D0BAQF2nIpNK4FMpQ/company-logo_100_100/0/1651974426008?e=1720051200&v=beta&t=6qMQGTnhTPqcXQm0ChEYKNLXMRANOAwCpnFiDSfIw20' alt='logo Dup'>"
    "<form method='POST' action='#' enctype='multipart/form-data' id='upload_form'>"
        "<h1>Atualizar Firewall</h1>"
        "<div class='controleform'>"
            "<input type='file' name='update'>"
            "<input type='submit' value='Update' id='bot'>"
        "</div>"
    "</form>"
    "<div id='prg'>Progresso: 0%</div>"
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
        "margin-bottom: 30px;"
    "}"

    "#main{"
        "display: flex;"
        "align-items: center;"
        "flex-direction: column;"
        "margin: 100px;"
    "}"

    "#upload_form{"
        "background-color: white;"
        "padding: 30px 80px;"
        "margin: 25px;"
        "border-radius: 25px;"

    "}"

    ".controleform{"
        "display: flex;"
        "flex-direction: column;"
        "width: 300px;"
    "}"

    ".controleform label{"
    "font-size: 10pt;"
    "padding-bottom: 5px;"
    "}"
    
    ".controleform input{"
        "height: 30px;"
        "border-radius: 4px;"
        "margin-bottom: 20px;"
    "}"

    "#bot{"
        "height: 40px;"
        "width: 100%;"
        "border: none;"
        "border-radius: 8px;"
        "color: #000000;"
        "cursor: pointer;"
        "box-shadow: inset 2px 2px 1px #ac9fa8;"
        "background-color: #ffD700;"
    "}"

    "#bot:active {"
        "box-shadow: inset 1px 1px 2px #ac9fa8;"
    "}"

    "#bot:hover, #bot:focus {"
    "background-color: #FFE34C;"
    "}"

"</style"

"<script>"
    "$('form').submit(function(e){"
        "e.preventDefault();"
        "var form = $('#upload_form')[0];"
        "var data = new FormData(form);"
        " $.ajax({"
            "url: '/update',"
            "type: 'POST',"
            "data: data,"
            "contentType: false,"
            "processData:false,"
            "xhr: function() {"
                "var xhr = new window.XMLHttpRequest();"
                "xhr.upload.addEventListener('progress', function(evt) {"
                    "if (evt.lengthComputable) {"
                        "var per = evt.loaded / evt.total;"
                        "$('#prg').html('Progresso: ' + Math.round(per*100) + '%');"
                    "}"
                "}, false);"
                "return xhr;"
            "},"
        "success:function(d, s) {"
        "console.log('Sucesso!')"
        "},"
        "error: function (a, b, c) {"
        "}"
    "});"
"});"
"</script>";

 return code;
}