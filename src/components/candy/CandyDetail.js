import React, { Component } from "react";

import "./Candy.css";

export default class CandyDetail extends Component {


    render() {
        console.log("inside candy details")

        const candy = this.props.candies.find(a => a.id === parseInt(this.props.match.params.candyId)) || {}

        return <section className="candies">
            <div key={candy.id} className="card">
                <div className="candyCard">
                    <h5 className="card-title">
                        <img src={window.location.origin + candy.type.image} className="icon--candy" alt="error" />
                        <p>{candy.name}</p>
                        <div className="button-div">
                            <button
                                type="submit"
                                className="btn btn-success"
                                onClick={() => {
                                    this.props.history.push(`/candies/${candy.id}/edit`)
                                }}
                            >Edit</button>
                            <button
                                type="submit"
                                className="btn btn-danger"
                                onClick={() => {
                                    this.props.deleteCandy(candy.id)
                                    this.props.history.push("/candies")
                                }}
                            >Delete</button>
                        </div>



                    </h5>
                </div>
            </div>
        </section>

    }
}

