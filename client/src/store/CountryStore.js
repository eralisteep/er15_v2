import { makeAutoObservable } from "mobx";
import axios from "axios";

class CountryStore {
  countries = [];
  loading = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  fetchCountries = async () => {
    this.loading = true;
    this.error = null;

    try {
      const response = await axios.get("http://localhost:3000/countries");
      this.countries = response.data;
    } catch (err) {
      this.error = "Ошибка загрузки данных о странах";
    } finally {
      this.loading = false;
    }
  };

  get countryCount() {
    return this.countries.length;
  }
}

const countryStore = new CountryStore();
export default countryStore;
