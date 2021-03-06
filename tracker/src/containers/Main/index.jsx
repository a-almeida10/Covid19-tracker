import React , {memo, useCallback, useEffect, useState} from "react";
import Api from "../../Api"
import {ContainerStyled } from './style'
import Board from "./componentsMainPage/Board";
import Panel from "./componentsMainPage/Panel";

function Main() {

    const [data, setData] = useState({})
    const [country, setCountry] = useState('brazil')
    const updateAt = new Date().toLocaleString()

    const getCovidData = useCallback((country)  => {
        Api.getCountry(country)
        .then(data  => setData(data))
        
    } , [])

 
    useEffect(() => {
        getCovidData(country)
    } , [getCovidData, country] )

    const handleChange = ({ target}) => {
        const country = target.value
        setCountry(country)

    }

    return (
        <ContainerStyled>
            <div className="mb-2">
                <Panel  
                data={data}
                updateAt={updateAt}
                onChange={handleChange}
                country={country}
                getCoviddata={getCovidData}
                
                
                
                />

                

            </div>
            <Board data={data} />

        </ContainerStyled>
    


    )

}

export default memo(Main);