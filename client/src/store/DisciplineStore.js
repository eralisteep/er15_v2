// DisciplineStore.js
import { makeAutoObservable } from "mobx";

class DisciplineStore {
  disciplines = []; // Инициализируем как пустой массив
  isLoading = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchDisciplines() {
    this.isLoading = true;
    this.error = null;

    try {
      const response = await fetch("http://localhost:3000/countries");
      if (!response.ok) {
        throw new Error("Failed to fetch disciplines");
      }
      const data = await response.json();

      this.disciplines = data; // Устанавливаем данные после успешной загрузки
    } catch (err) {
      this.error = err.message;
    } finally {
      this.isLoading = false;
    }
  }
}

const disciplineStore = new DisciplineStore();
export default disciplineStore;
