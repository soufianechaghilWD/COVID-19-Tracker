import React, { useState, useEffect } from 'react'
import numeral from "numeral";

const sortData = (data) => {
    let sortedData = [...data];
    sortedData.sort((a, b) => {
      if (a.cases > b.cases) {
        return -1;
      } else {
        return 1;
      }
    });
    return sortedData;
  };

function Table() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getCountriesData = async () => {
            fetch("https://disease.sh/v3/covid-19/countries")
              .then((response) => response.json())
              .then((data) => {
                    setData(sortData(data))
              });
          };
      
          getCountriesData();
    }, [])
    return (
        <div className="table">
            <h3>Worldwide numbers sorted</h3>
        <table>
            <tr>
                <td><h5>Coutry</h5></td>
                <td><h5>Cases</h5></td>
                <td><h5>Recovered</h5></td>
                <td><h5>Deaths</h5></td>
            </tr>
            {data.map(country => (
                <tr>
                    <td><strong>{country.country}</strong></td>
                    <td>{numeral(country.cases).format("0.0a")}<br /><small className="table__newcases">+ {numeral(country.todayCases).format("0.0a")}</small></td>
                    <td>{numeral(country.recovered).format("0.0a")}<br /><small className="table__newrecovered">+ {numeral(country.todayRecovered).format("0.0a")}</small></td>
                    <td>{numeral(country.deaths).format("0.0a")}<br /><small className="table__newdeaths">+ {numeral(country.todayDeaths).format("0.0a")}</small></td>
                </tr>
            ))}
        </table>
        </div>
        
    )
}

export default Table
