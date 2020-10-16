import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Corona from '../files/corona.png';
import { FormControl, Select, MenuItem } from '@material-ui/core'
import numeral from 'numeral';
import CardInfo from './CardInfo';
import LineGraph from './Line';
import Table from './Table';

function Home() {
    const [worldwide, setWordwide] = useState(null)
    const [country, setInputCountry] = useState("worldwide");
    const [countryInfo, setCountryInfo] = useState(null);
    const [countries, setCountries] = useState([]);
    const [type, setType] = useState('cases')
    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/all')
        .then(data => data.json())
        .then(data=> {
            setWordwide({
                todayCases: data.todayCases,
                cases: data.cases,
                todayrecovered: data.todayRecovered,
                recovered: data.recovered,
                todaydeaths: data.todayDeaths,
                deaths: data.deaths
            })
            setCountryInfo({
                todayCases: data.todayCases,
                cases: data.cases,
                todayRecovered: data.todayRecovered,
                recovered: data.recovered,
                todayDeaths: data.todayDeaths,
                deaths: data.deaths
            })
        })
        
    }, [])
    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/countries')
        .then(data => data.json())
        .then(data => {
            setCountries(data.map(x => ({
                name: x.country,
                value: x.countryInfo.iso2
            })))
        })
    }, [])
    const countryChange = (e) => {
        const selected = e.target.value;
        const url = `https://disease.sh/v3/covid-19/countries/${selected}`
        if(selected === 'worldwide'){
            setInputCountry(selected);
            setCountryInfo(worldwide)
        }else{
            fetch(url).then(data => data.json())
            .then(data => {
                setInputCountry(selected);
                setCountryInfo(data)
            })
        }
    }
    const typeChange = (e) => {
        setType(e.target.value)
    }
    return (
        <Container fluid >
            <Row className="home__row1">
                <Col md={6} className="Home__row1__left">
                    <div className="Home__row1__left-part1">
                        <img src={Corona} className="home__pic" alt="Corona"/>
                    </div>
                    <div className="Home__row1__left-part2">
                        <h3>COVID-19 Tracker</h3>
                        <p>Get all the latest data and news about</p>
                        <p>the CoronaVirus in the world </p>
                        <p>and your country </p>
                        <p>(updated every 10 min)</p>
                    </div>
                </Col>
                {worldwide !== null ? (<Col className="Home__row1__right">
                    <h3>Worldwide new numbers</h3>
                    <div className="Home__row1__right__cards">
                        <CardInfo classname="Home__row1__right-card" type='Cases' 
                        today={numeral(worldwide.todayCases).format("0.0a")}
                         total={numeral(worldwide.cases).format("0.0a")} />

                        <CardInfo classname="Home__row1__right-card" type='Recovered' 
                        today={numeral(worldwide.todayrecovered).format("0.0a")}
                         total={numeral(worldwide.recovered).format("0.0a")} />
                        
                        <CardInfo classname="Home__row1__right-card" type='Deaths' 
                        today={numeral(worldwide.todaydeaths).format("0.0a")}
                         total={numeral(worldwide.deaths).format("0.0a")} />
                        
                    </div>
                </Col>) 
                : 
                (<Col>
                    <h3>Loading</h3>
                </Col>) }
                
            </Row>
            <Row> 
                <Col md={6}>
                    <div className="home__input">
                        <FormControl>
                            <Select variant="outlined" value={country} onChange={countryChange}>
                                <MenuItem value="worldwide">worldwide</MenuItem>
                                {countries.map(country => (
                                    <MenuItem  value={country.value}>{country.name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl>
                            <Select variant="outlined" value={type} onChange={typeChange}>
                                <MenuItem value="cases">Cases</MenuItem>
                                <MenuItem value="recovered">Recovered</MenuItem>
                                <MenuItem value="deaths">Deaths</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    {countryInfo !== null ? (<div className="home__cards">
                        <CardInfo classname="Home__row1__right-card home__cards__each" type="Cases" 
                        today={numeral(countryInfo.todayCases).format("0.0a")}
                        total={numeral(countryInfo.cases).format("0.0a")}
                        />
                        <CardInfo classname="Home__row1__right-card home__cards__each" type="Recovered" 
                        today={numeral(countryInfo.todayRecovered).format("0.0a")}
                        total={numeral(countryInfo.recovered).format("0.0a")}
                        />
                        <CardInfo classname="Home__row1__right-card home__cards__each" type="Deaths" 
                        today={numeral(countryInfo.todayDeaths).format("0.0a")}
                        total={numeral(countryInfo.deaths).format("0.0a")}
                        />
                    </div>) : (<div><h3>LOading</h3></div>)}
                </Col>
                <Col md={6}>
                    <LineGraph casesType={type} classname={"home__chart"} where={country}/>
                </Col>
            </Row>
            <Row className="home__row3">
                <Col xs={12}>
                    <Table />
                </Col>
            </Row>
        </Container>
    )
}

export default Home
