/*  Programa para ESP32 antes da atualização OTA */
#include <WiFi.h>
#include <WiFiClient.h>
#include <WebServer.h>
#include <ESPmDNS.h>
#include <Update.h>

const char* loginPage();
const char* updatePage();

const char* loginIndex = loginPage(); 
const char* serverIndex = updatePage();

/* Webserver para se comunicar via browser com ESP32  */
WebServer server(80);

void updateSetup(){

    /* Configfura as páginas de login e upload de firmware OTA */
    server.on("/", HTTP_GET, []() 
    {
        server.sendHeader("Connection", "close");
        server.send(200, "text/html", (loginIndex));
    });
     
    server.on("/serverIndex", HTTP_GET, []() 
    {
        server.sendHeader("Connection", "close");
        server.send(200, "text/html", serverIndex);
    });
   
    /* Define tratamentos do update de firmware OTA */
    server.on("/update", HTTP_POST, []() 
    {
        server.sendHeader("Connection", "close");
        server.send(200, "text/plain", (Update.hasError()) ? "FAIL" : "OK");
        ESP.restart();
    }, []() {
        HTTPUpload& upload = server.upload();
         
        if (upload.status == UPLOAD_FILE_START) 
        {
            /* Inicio do upload de firmware OTA */
            Serial.printf("Update: %s\n", upload.filename.c_str());
            if (!Update.begin(UPDATE_SIZE_UNKNOWN)) 
                Update.printError(Serial);
        } 
        else if (upload.status == UPLOAD_FILE_WRITE) 
        {
            /* Escrevendo firmware enviado na flash do ESP32 */
            if (Update.write(upload.buf, upload.currentSize) != upload.currentSize) 
                Update.printError(Serial);      
        } 
        else if (upload.status == UPLOAD_FILE_END) 
        {
            /* Final de upload */
            if (Update.end(true))             
                Serial.printf("Sucesso no update de firmware: %u\nReiniciando ESP32...\n", upload.totalSize);
            else
                Update.printError(Serial);
        }   
    });
    
}

void StartUpdateServer(){
    server.begin();
}

void StopUpdateServer(){
    server.stop();
}

void updateLoop(){
    server.handleClient();
    delay(1);
}