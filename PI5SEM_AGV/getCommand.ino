#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>

int fazerRequisicao() {
  String resposta;
  String url = "http://192.168.15.5:3000/api/Controlar_veiculo/1";
  
  HTTPClient http;
  http.begin(url);
  int httpResponseCode = http.GET();

  Serial.println(httpResponseCode);

  if (httpResponseCode > 0) {
    resposta = http.getString();
  } else {
    Serial.println(httpResponseCode);
  }

  http.end();

  int fieldValue = extrairValorCampo(resposta, "comando");

  return fieldValue;
}

int extrairValorCampo(const String& json, const char* campo) {
  StaticJsonDocument<200> doc;
  DeserializationError error = deserializeJson(doc, json);

  if (!error && doc.containsKey(campo)) {
    return doc[campo];
  } else {
    return -1; // Retorna um valor padrão caso o campo não seja encontrado ou ocorra um erro na análise do JSON
  }
}
