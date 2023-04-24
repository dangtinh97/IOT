#include <ESP8266WiFi.h>



int pin=2;
const char* ssid = "KHONG CO AI O NHA";
const char* password = "0372052643";
IPAddress staticIP(192,168,1,22);
IPAddress gateway(192,168,1,9);
IPAddress subnet(255,255,255,0);

void setup() {
  Serial.begin(115200);
  Serial.println();

  Serial.printf("Connecting to %s \n", ssid);
  WiFi.begin(ssid, password);
  WiFi.config(staticIP, gateway, subnet);
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }
  Serial.println();
  Serial.print("Connected, IP address: ");
  Serial.println(WiFi.localIP());

  pinMode(pin, OUTPUT);

}

void loop() {
  digitalWrite(pin, HIGH);   //bật led
  delay(1000);               //dừng 1s
  digitalWrite(pin, LOW);    //tắt led
  delay(1000);               //dừng 1s
}
