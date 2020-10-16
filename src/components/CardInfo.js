import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'

function CardInfo({classname, type, today, total}) {
    return (
        <Card className= {classname} >
                            <CardContent>
                                <h5>{type}</h5>
                                <hr />
                                <Typography>+ {today}</Typography>
                                <Typography>{total} Total</Typography>
                            </CardContent>
                        </Card>
    )
}

export default CardInfo
