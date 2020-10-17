import React, { useState, useEffect } from 'react'
import New from './New'

const tearApart = (tab) => {
    let howMany = Math.floor(tab.length / 10) + 1
    let res = [];
    for(let i = 0; i < howMany; i++){
        if(i != howMany - 1){
            let tmp = [];
            for(let j= 0; j < 10; j++){
                tmp.push(tab[(i*10)+j])
            }
            res.push({id: i+1, data: tmp})
        }else{
            let howMuch = tab.length - (i*10)
            let tmp = []
            for(let j = 0; j < howMuch; j++){
                tmp.push(tab[(i*10)+j])
            }
            res.push({id: i+1, data: tmp})
        }
    }
    if(res[howMany - 1].data.length === 0) res.pop()
    return res
}
function News() {
    const [newsVac, setNewsVac] = useState([]);
    const [pagesData, setPagesData] = useState([]);
    const [currentData, setCurrentData] = useState([]);
    useEffect(() => {
        fetch('https://disease.sh/v3/covid-19/vaccine').then(data => data.json())
        .then(data => {
            setNewsVac(data.data)
            setPagesData(tearApart(data.data))
            setCurrentData({id:0, data: tearApart(data.data)[0].data})
        })
    }, [])

    const pageClick = (e) => {
        e.preventDefault();
        setCurrentData(pagesData[parseInt(e.target.value) - 1])
    }

    return (
        <div className="news">
            <h2>The latest News about COVID-19 Vaccin</h2>
            <div className="news__page">
            {Object.keys(currentData).length !== 0 ? 
            (currentData.data.map(newOne => (
                <New data={newOne} />
            ))) 
            : 
            (<p>Loading</p>)
            }
            </div>
            <div className="news__buttons">
                {pagesData.map(page => (
                    <button onClick={pageClick} value={page.id} className="news__buttons__each">{page.id}</button>
                ))}
            </div>
        </div>
    )
}

export default News
