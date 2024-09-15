class GuessingGame {
    constructor() {
        this.min = null;  // Минимальная граница диапазона
        this.max = null;  // Максимальная граница диапазона
        this.currentGuess = null;  // Текущее предположение
      }
    
      // Метод для установки диапазона чисел
      setRange(min, max) {
        this.min = min;
        this.max = max;
      }
    
      // Метод для предположения (вычисляем среднее число в диапазоне)
      guess() {
        this.currentGuess = Math.ceil((this.min + this.max) / 2);
        return this.currentGuess;
      }
    
      // Метод вызывается, если предположение больше загаданного числа
      lower() {
        this.max = this.currentGuess;
      }
    
      // Метод вызывается, если предположение меньше загаданного числа
      greater() {
        this.min = this.currentGuess;
      }
    }

module.exports = GuessingGame;
