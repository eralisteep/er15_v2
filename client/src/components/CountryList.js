import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { COUNTRIES_ROUTE } from "../utils/consts";
import countryStore from "../store/CountryStore";
import "../styles/css.css";

const CountryList = observer(() => {
  const history = useHistory();

  useEffect(() => {
    if (countryStore.countries.length === 0) {
      countryStore.fetchCountries();
    }
  }, []);

  const handleCountryClick = (name) => {
    history.push(`${COUNTRIES_ROUTE}/${name}`);
  };

  if (countryStore.loading) return <div>Загрузка стран...</div>;
  if (countryStore.error) return <div>{countryStore.error}</div>;

  return (
    <>
      <h1 className="h1">Countries</h1>
      <Row>
      </Row>
      <Col>
        <div className="countries-list">
          {countryStore.countries.map((country) => (
            <div key={country.name} className="i" onClick={() => handleCountryClick(country.name)}>
              <img
                className="flag"
                src={`/images/flags/${country.name.replace(" ", "")}.png`}
                alt={country.name}
              />
              {country.name}
            </div>
          ))}
        </div>
      </Col>
    </>
  );
});

export default CountryList;
