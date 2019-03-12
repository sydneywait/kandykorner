import React, { Component } from 'react'
import "./Candy.css"
import { Link } from "react-router-dom";



export default class CandyList extends Component {



    render() {
        return (
            <React.Fragment>

                <div className="candyHeader">
                    {/* <div className="speciesSort">{this.createDropdownSpeciesSort()}</div> */}

                    <div className="candyButton">
                        <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/candies/new")
                            }
                            }>Add Candy</button>

                    </div>
                </div>
                <section className="candies">
                    {
                        this.props.candies.map(candy => {
                            console.log(candy)
                            return <div key={candy.id} className="card">
                                <div className="candyCard">
                                    <h5 className="card-title">
                                        <img src={window.location.origin + candy.candyType.image} className="icon--candy" alt="error" />
                                        <p>{candy.name}</p>
                                        <Link className="nav-link" to={`/candy/${candy.id}`}>Details</Link>
                                    </h5>
                                </div>
                            </div>

                        })}
                </section>

            </React.Fragment>






        )
    }
}


