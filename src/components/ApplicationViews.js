import { Route } from 'react-router-dom'
import React, { Component } from 'react';
import CandyList from "./candy/CandyList";
import StoreList from "./store/StoreList"
import EmployeeList from "./employee/EmployeeList"
import CandyAPIManager from "./modules/CandyManager"
import StoreAPIManager from "./modules/StoreManager"
import EmployeeAPIManager from "./modules/EmployeeManager"



export default class ApplicationViews extends Component {



    state = {
        stores: [],
        employees: [],
        candies: []
    }

    componentDidMount() {
        const newState = {}

        CandyAPIManager.getAllCandies()
            .then(candies => newState.candies = candies)
            .then(EmployeeAPIManager.getAllEmployees)
            .then(employees => newState.employees = employees)
            .then(StoreAPIManager.getAllStores)
            .then(stores => newState.stores = stores)
            .then(() => this.setState(newState))


    }




    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <StoreList stores={this.state.stores} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />

                <Route exact path="/candies" render={(props) => {
                    return <CandyList candies={this.state.candies}  />
                }} />
                <Route path="/candies/new" render={(props) => {
                    return <CandyList candies={this.state.candies} />
                }} />
            </React.Fragment>
        )
    }
}




