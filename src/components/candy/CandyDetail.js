import React, { Component } from "react";

import "./Candy.css";

export default class CandyDetail extends Component {


    render() {
        console.log("inside candy details")



        return <section className="candies">
            {
                this.props.candies.map(candy => {
                    console.log(candy)
                    return <div key={candy.id} className="card">
                        <div className="candyCard">
                            <h5 className="card-title">
                                <img src={window.location.origin + candy.type.image} className="icon--candy" alt="error" />
                                <p>{candy.name}</p>
                                <button
                                    type="submit"
                                    className="btn btn-danger"
                                    onClick={() => {
                                        this.props.deleteCandy(candy.id)
                                        this.props.history.push("/candies")
                                    }}
                                >Delete</button>

                            </h5>
                        </div>
                    </div>

                })}
        </section>

    }
}

