import { Route } from 'react-router-dom'
import React, { Component } from 'react';
import CandyList from "./candy/CandyList";
import StoreList from "./store/StoreList"
import EmployeeList from "./employee/EmployeeList"
import CandyAPIManager from "./modules/CandyManager"
import StoreAPIManager from "./modules/StoreManager"
import EmployeeAPIManager from "./modules/EmployeeManager"
import CandyForm from './candy/CandyForm'
import CandyDetail from './candy/CandyDetails'



export default class ApplicationViews extends Component {



    state = {
        stores: [],
        employees: [],
        candies: [],
        candyTypes:[]
    }

    componentDidMount() {
        const newState = {}

        CandyAPIManager.getAllCandies()
            .then(candies => newState.candies = candies)
            .then(CandyAPIManager.getAllTypes)
            .then(types => newState.candyTypes = types)
            .then(EmployeeAPIManager.getAllEmployees)
            .then(employees => newState.employees = employees)
            .then(StoreAPIManager.getAllStores)
            .then(stores => newState.stores = stores)
            .then(() => this.setState(newState))
    }

    delete = {
        deleteCandy: (id) => {
            return CandyAPIManager.deleteCandy(id)
                .then(candies => this.setState({
                    candies: candies

                })
                )
        }
    }

    add = {
        addCandy: candyObject => {
            CandyAPIManager.addNewCandy(candyObject)
                .then(() => CandyAPIManager.getAllCandies())
                .then(candies =>
                    this.setState({
                        candies: candies
                    })
                )
        },
    }



    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <StoreList stores={this.state.stores}{...props} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees}{...props} />
                }} />

                <Route exact path="/candies" render={(props) => {
                    return <CandyList candies={this.state.candies} {...props} />
                }} />
                <Route path="/candies/new" render={(props) => {
                    return <CandyForm candies={this.state.candies} types={this.state.candyTypes} {...props}/>
                }} />
                <Route path="/candies/:candyId(\d+)" render={(props) => {
                    return <CandyDetail candies={this.state.candies} {...props}/>
                }} />
            </React.Fragment>
        )
    }
}




