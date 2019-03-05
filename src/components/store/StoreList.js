import React, { Component } from 'react';

class StoreList extends Component {

    render() {
        return (
            <section className="storelist">
            <h1>Store List</h1>
            {
                this.props.stores.map(store =>
                    <div key={store.id}>
                        {store.location}
                    </div>
                )
            }
            </section>
        )
    }



}

export default StoreList