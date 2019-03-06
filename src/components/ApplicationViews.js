import { Route } from 'react-router-dom'
import React, { Component } from 'react';
import CandyList from "./candy/CandyList";
import StoreList from "./store/StoreList"
import EmployeeList from "./employee/EmployeeList"



export default class ApplicationViews extends Component {



    state = {
        stores: [],
        employees: [],
        candyTypes: [],
        candies: []
    }

    componentDidMount() {
        const newState = {}

        fetch("http://localhost:5002/stores")
            .then(r => r.json())
            .then(stores => newState.stores = stores)
            .then(() => fetch("http://localhost:5002/employees")
            .then(r => r.json()))
            .then(employees => newState.employees = employees)
            .then(() => fetch("http://localhost:5002/candyTypes")
            .then(r => r.json()))
            .then(candyTypes => newState.candyTypes = candyTypes)
            .then(() => fetch("http://localhost:5002/candies")
            .then(r => r.json()))
            .then(candies => newState.candies = candies)
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
                <Route path="/candies" render={(props) => {
                    return <CandyList candies={this.state.candies} candytypes={this.state.candyTypes} />
                }} />
            </React.Fragment>
        )
    }
}




