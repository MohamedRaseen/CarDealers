import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import Filter from './components/Filter';
import CarDealers from './components/CarDealers';
import appConstants from './static/static';
import './App.css';

const getFilterOptionsOnKey = (carDealers, key) =>{
    let options = [];
    carDealers && carDealers.map(dealer =>{
        if(dealer[key] && options.indexOf(dealer[key]) === -1){
            options.push(dealer[key]);
        }
    });
    return options;
}

const App = () =>{

    const carDealers = useSelector(state => state.carDealers), dispatch = useDispatch();

    const [filteredDealers, setFilteredDealers] = useState(carDealers);

    useEffect(() =>{
        if(carDealers.length === 0)
            dispatch({type :appConstants.GET_CAR_DEALERS});
        else
            setFilteredDealers(carDealers);

    },[dispatch, carDealers]);

    const updateFilteredDealers = (carDealers, brand, location) =>{

        if(!brand && !location) return;
    
        let filteredDealers = carDealers && carDealers.filter(dealer =>{
            return (brand && location) ? ((dealer.brandName === brand) && (dealer.location === location)) : brand ? (dealer.brandName === brand) :(dealer.location === location); 
        });
        
        setFilteredDealers(filteredDealers);
    }

    return(
        <div className='app-container'>
            <Header title='CAR DEALERS DEMO APP'/>
            <Filter brands={getFilterOptionsOnKey(carDealers,'brandName')} locations={getFilterOptionsOnKey(carDealers, 'location')} callBack={(brand, location) => updateFilteredDealers(carDealers,brand, location)} clear={() => setFilteredDealers(carDealers)}/>
            <CarDealers dealers={filteredDealers}/>
        </div>
    )
}

export default App;