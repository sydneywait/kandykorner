export default {

    getAllStores: () => {
        return fetch("http://localhost:5002/stores")
            .then(r => r.json())
    },
    getSingleStore: (id) => {
        return fetch(`http://localhost:5002/stores/${id}`)
            .then(r => r.json())
    },
    deleteStore: (id) => {
        return fetch(`http://localhost:5002/stores/${id}`, {
            method: "DELETE"
        })
            .then(() => fetch(`http://localhost:5002/stores`))
            .then(e => e.json())
    },
    addNewStore(newStore) {
        return fetch(`http://localhost:5002/stores`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newStore)
        }).then(data => data.json())
      }
}