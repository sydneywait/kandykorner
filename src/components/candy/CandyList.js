import React, { Component } from 'react'

class CandyList extends Component {

    render() {
        return (
            <section className="candylist">
                <h1>Candy List</h1>
                {
                    this.props.candies.map(candy => {

                            console.log(this.props.candytypes.find(type =>
                                type.id === candy.typeId).type)

                        return <div key={candy.id}>
                            {candy.name}--
                            {this.props.candytypes.find(type =>
                                type.id === candy.typeId).type}

                        </div>


                    },






                    )

                }

            </section>
        )





    }
}


export default CandyList