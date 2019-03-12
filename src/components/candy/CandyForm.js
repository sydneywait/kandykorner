import React, { Component } from "react";
import "./Candy.css";


export default class CandyForm extends Component {

    // Set initial state
    state = {
        name: "",
        candyTypeId: ""

    };

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*
          Local method for validation, creating Employee object, and
          invoking the function reference passed from parent component
       */
    constructNewcandy = evt => {
        evt.preventDefault();

            const candy = {
                name: this.state.name,
                candyTypeId: parseInt(this.state.candyTypeId),
            };
            console.log(candy)

            // Create the Candy and redirect user to Candy list
            this.props.addCandy(candy)
            this.props.history.push("/candies")
        }


    render() {
        return (
            <React.Fragment>
                <form className="CandyForm">
                    <div className="form-group">
                        <label htmlFor="CandyName">Candy name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="name"
                            placeholder="Candy name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="CandyType"></label>
                        <select
                            defaultValue=""
                            name="type"
                            id="candyTypeId"
                            onChange={this.handleFieldChange}
                        >
                            <option value="">Select a Candy Type</option>
                            {this.props.types.map(e => (
                                <option key={e.id} id={e.id} value={e.id}>
                                    {e.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button
                        type="submit"
                        onClick={this.constructNewCandy}
                        className="btn btn-primary"
                    >
                        Submit
          </button>
                </form>
            </React.Fragment>
        );
    }
}