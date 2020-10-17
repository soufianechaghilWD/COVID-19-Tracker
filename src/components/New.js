import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import { Button } from '@material-ui/core'

const instu = (tab) => {
    let res = "";
    for(let i =0; i < tab.length; i++){
        res+=tab[i] + ", "
    }
    let res1 = res.split(', ')
    res1.pop()
    return res1.join(' ')
}

const just = (str) => {
    let res = ""
    if(str.length <= 200) return {data: str, fine: true}
    else {
        for(let i =0; i < 200; i++){
            res+= str[i]
        }
        res += '...'
    }
    return {data: res, fine: false}
}



function New({data}) {
    const [open, setOpen] = useState(false)
    const [currentData, setCurrentData] = useState('')

    const more = (e) => {
        e.preventDefault()
        setCurrentData(e.target.value)
        setOpen(true)
    }
    return (
        <div className="new">
           <Modal show={open} onHide={() => setOpen(false)} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>
                    <h5><span className="new__title">Mechanism</span>: {data.mechanism}</h5>
                    <h6><span className="new__title">Candidate</span>: {data.candidate}</h6>
                    <h6><span className="new__title">TrialPhase</span>: {data.trialPhase}</h6>
                    </Modal.Title>
                </Modal.Header>
            <Modal.Body>{data.details}</Modal.Body>
           </Modal>
            <h4><span className="new__title">institutions</span>:  {instu(data.institutions)}</h4>
            <h5><span className="new__title">Sponsor</span>: {instu(data.sponsors)}</h5>
            <h5><span className="new__title">Mechanism</span>: {data.mechanism}</h5>
            <h6><span className="new__title">Candidate</span>: {data.candidate}</h6>
            <h6><span className="new__title">TrialPhase</span>: {data.trialPhase}</h6>
            <p><strong><span className="new__title">Detail</span></strong>: {just(data.details).data} 
            {just(data.details).fine !== true ? (<a className="new__more" type="submit" onClick={more} value={data}> See More</a>) : (<br/>)}</p>
        </div>
    )
}

export default New
