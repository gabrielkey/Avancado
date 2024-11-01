const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;

const myFormat = printf(({ level, message, timestamp }) => {
return `${timestamp} [${level}]: ${message}`;
});

const logger = createLogger({
  format: combine(
    format.splat(),
    timestamp(),
    myFormat
  ),
  transports: [
    new transports.Console({ level: 'debug' }),
    new transports.File({ filename: "logs/app-log.log", level: 'debug' })
  ]
});

function isPrime(number) {
  const startTime = Date.now();
  logger.debug('Verificando se %d é primo', number);

  if (number <= 1) {
    logger.info('O número %d não é primo porque é menor ou igual a 1', number);
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      logger.info('O número %d não é primo porque é divisível por %d', number, i);
      return false;
    }
  }
  const endTime = Date.now();
  logger.info('Tempo de execução para isPrime(%d): %d ms', number, endTime - startTime);
  return true;
}

    const numbersToCheck = [2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log("Números primos:");
    for (const number of numbersToCheck) {
    if (isPrime(number)) {
    console.log(number);
  }
}
