import React, { Component } from "react";
import "./Candy.css";


export default class CandyForm extends Component {

    // Set initial state
    state = {
        name: "",
        typeId: ""

    };

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        evt.preventDefault();
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*
          Local method for validation, creating Employee object, and
          invoking the function reference passed from parent component
       */
    constructNewCandy =() => {
        // evt.preventDefault();

            const candy = {
                name: this.state.name,
                typeId: parseInt(this.state.typeId),
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
                        <label htmlFor="type"></label>
                        <select
                            defaultValue=""
                            name="type"
                            id="typeId"
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