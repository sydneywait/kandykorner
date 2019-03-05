import React, { Component } from 'react';
import CandyList from "./candy/CandyList";
import StoreList from "./store/StoreList"
import EmployeeList from "./employee/EmployeeList"



class KandyKorner extends Component {
    storeArray = [
        {id: 1, location: "West Broad Street"},
        {id: 2, location: "South Elm Street"},
        {id: 3, location: "North Foster Street"},
        {id: 4, location: "East Main Street"}

    ]

    employeeArray = [
        {id: 1, name: "Sally"},
        {id: 2, name: "Susan"},
        {id: 3, name: "Kathy"},
        {id: 4, name: "Paul"},
        {id: 5, name: "Jim"},
        {id: 6, name: "Thomas"},
        {id: 7, name: "Hank"},
        {id: 8, name: "Steven"}

    ]

    candyTypeArray = [
        {id: 1, type: "chocolate"},
        {id: 2, type: "gummy"},
        {id: 3, type: "licorice"},
        {id: 4, type: "gum"},
        {id: 5, type: "jawbreaker"},
        {id: 6, type: "caramel"}

    ]
    candyArray = [
        {id: 1, name: "Whizz-banger", typeId: 1},
        {id: 2, name: "Squishy-bears", typeId: 2},
        {id: 3, name: "Chocolate Explosion", typeId: 3},
        {id: 4, name: "Teeth-Wrecker", typeId: 4},
        {id: 5, name: "Dulce", typeId: 5},
        {id: 6, name: "Whippersnappers", typeId: 3},
        {id: 7, name: "Breathalyzer", typeId: 4},
        {id: 8, name: "Silencer", typeId: 5},
        {id: 9, name: "Dark surprise", typeId: 1},
        {id: 10, name: "Snapper", typeId: 3},
        {id: 11, name: "Juju-squishers", typeId: 2},

    ]


    state = {
        stores: this.storeArray,
        employees: this.employeeArray,
        candyTypes: this.candyTypeArray,
        candies: this.candyArray
    }


    render() {
        return (
            <article className="kennel">
                <StoreList stores={this.state.stores} />
                <EmployeeList employees={this.state.employees} />
                <CandyList candies={this.state.candies} candytypes={this.state.candyTypes}/>
            </article>
        )
    }
}




export default KandyKorner