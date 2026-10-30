#define TRIG_PIN 4
#define ECHO_PIN 5

void setup() {
  Serial.begin(115200);

  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);

  Serial.println("Sensor HC-SR04 iniciado!");
}

void loop() {

  // Gera pulso ultrassonico
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);

  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);

  digitalWrite(TRIG_PIN, LOW);

  // Mede o tempo de retorno do sinal
  long duracao = pulseIn(ECHO_PIN, HIGH, 30000);

  // Calcula a distancia em centimetros
  if (duracao == 0) {
    Serial.println("Nenhum objeto detectado!");
  } else {
    float distancia = duracao * 0.0343 / 2;

    Serial.print("Distancia: ");
    Serial.print(distancia);
    Serial.println(" cm");
  }

  // Aguarda 5 segundos
  delay(5000);
}
