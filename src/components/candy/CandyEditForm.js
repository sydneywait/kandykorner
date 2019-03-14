import React, { Component } from 'react';
import CandyManager from "../modules/CandyManager"

export default class CandyEditForm extends Component {

    // Set initial state
    state = {
        name: "",
        typeId: "",
    }


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingCandy = evt => {
        evt.preventDefault()


        const editedCandy = {
            id: this.props.match.params.candyId,
            name: this.state.name,
            typeId: parseInt(this.state.typeId),
        };
        this.props.editCandy(editedCandy)
        this.props.history.push("/candies")
    }


    componentDidMount() {
        CandyManager.getSingleCandy(this.props.match.params.candyId)
            .then(candy => {
                this.setState({
                    name: candy.name,
                    typeId: candy.typeId,

                });
            });
    }


    render() {
        return (
            <React.Fragment>
                <form className="candyForm">
                    <div className="form-group">
                        <label htmlFor="candyName">Candy name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="name"
                            value={this.state.name}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="type">Candy Type</label>
                        <select
                            name="type"
                            id="typeId"
                            onChange={this.handleFieldChange}
                            value={this.state.typeId}
                        >
                            <option value="">Select a Type</option>
                            {this.props.types.map(e => (
                                <option key={e.id} id={e.id} value={e.id}>
                                    {e.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button
                        type="submit"
                        onClick={this.updateExistingCandy}
                        className="btn btn-primary"
                    >Submit</button>
                </form>
            </React.Fragment>
        );
    }
}


