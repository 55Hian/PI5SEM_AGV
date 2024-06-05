/*  Programa para ESP32 antes da atualização OTA */
#include <WiFi.h>
#include <WiFiClient.h>
#include <WebServer.h>
#include <ESPmDNS.h>
#include <Update.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>

// const char* loginPage();
// const char* updatePage();
void updateSetup();
void updateLoop();
void StartUpdateServer();
void StopUpdateServer();

int fazerRequisicao();
 
/* Constantes - conexão wi-fi e webserver */
const char* host = "DUP";
const char* ssid = "CACHORRO1"; /* coloque aqui o nome da rede wi-fi que o ESP32 deve se conectar */
const char* password = "hi12345678"; /* coloque aqui a senha da rede wi-fi que o ESP32 deve se conectar */
 
/* Variáveis globais */
int contador_ms = 0;
int contador_ms2 = 0;

String serverName = "";

int in1 = 26; //1º Motor
int in2 = 27; //1º Motor
int in3 = 32; //2º Motor
int in4 = 33 ; //2º Motor
int botao = 14;


unsigned long timeBotao = 0;
boolean ota = false;

 
/* Códigos da página que será aberta no browser 
   (quando comunicar via browser com o ESP32) 
   Esta página exigirá um login e senha, de modo que somente 
   quem tenha estas informações consiga atualizar o firmware 
   do ESP32 de forma OTA */
// const char* loginIndex = loginPage(); 
// const char* serverIndex = updatePage();

 
void setup(void) 
{
    Serial.begin(115200);
 
    /* Conecta-se a rede wi-fi */
    WiFi.begin(ssid, password);
    Serial.println("");
 
    while (WiFi.status() != WL_CONNECTED) 
    {
        delay(500);
        Serial.print(".");
    }
     
    Serial.println("");
    Serial.print("Conectado a rede wi-fi ");
    Serial.println(ssid);
    Serial.print("IP obtido: ");
    Serial.println(WiFi.localIP());
 
    /* Usa MDNS para resolver o DNS */
    if (!MDNS.begin(host)) 
    { 
        //http://esp32.local
        Serial.println("Erro ao configurar mDNS. O ESP32 vai reiniciar em 1s...");
        delay(1000);
        ESP.restart();        
    }
   
    Serial.println("mDNS configurado e inicializado;");
   
    updateSetup();

    // StartUpdateServer();

    pinMode(in1, OUTPUT);
    pinMode(in2, OUTPUT);
    pinMode(in3, OUTPUT);
    pinMode(in4, OUTPUT);
    pinMode(botao, INPUT_PULLUP);
}
 
void loop(){

    timeBotao = 0;
    boolean statusBotao = digitalRead(botao);
    if (statusBotao == 0){
        if ((timeBotao - millis()) >= 5000){
            StartUpdateServer();
            ota = true;
        }
        else{
            timeBotao = millis();
        }
    }

    if (ota == true){
        updateLoop();

        contador_ms++;

        if (contador_ms >= 1000){    
            Serial.print("Servidor online, acesse pelo IP: ");
            Serial.println(WiFi.localIP());
            Serial.println("Atualizado via PC");
            contador_ms = 0;
        }

    }

    contador_ms2++;

    if (contador_ms2 >= 10000){
        int respostaServidor = fazerRequisicao();
        Serial.println(respostaServidor);
        // respostaServidor = 1;
        switch (respostaServidor)
        {


        case 0:
            digitalWrite(in1, LOW); 
            digitalWrite(in2, LOW); 
            digitalWrite(in3, LOW); 
            digitalWrite(in4, LOW); 
            break;

        case 1:
            digitalWrite(in1, HIGH); 
            digitalWrite(in2, LOW); 
            digitalWrite(in3, HIGH); 
            digitalWrite(in4, LOW); 
            break;

        case 2:
            digitalWrite(in1, LOW); 
            digitalWrite(in2, HIGH); 
            digitalWrite(in3, LOW); 
            digitalWrite(in4, HIGH); 
            break;

        case 3:
            digitalWrite(in1, HIGH); 
            digitalWrite(in2, LOW); 
            digitalWrite(in3, LOW); 
            digitalWrite(in4, HIGH); 
            break;

        case 4:
            digitalWrite(in1, LOW); 
            digitalWrite(in2, HIGH); 
            digitalWrite(in3, HIGH); 
            digitalWrite(in4, LOW); 
            break;
        
        default:
            break;
        }

        contador_ms2 = 0;
    }




    
}
