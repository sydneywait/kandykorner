export default {

    getAllCandies: () => {
        return fetch("http://localhost:5002/candies/?_expand=candyType")
            .then(r => r.json())
    },
    getSingleCandy: (id) => {
        return fetch(`http://localhost:5002/candies/${id}`)
            .then(r => r.json())
    },
    deleteCandy: (id) => {
        return fetch(`http://localhost:5002/candies/${id}`, {
            method: "DELETE"
        })
            .then(() => fetch(`http://localhost:5002/candies/?_expand=candyType`))
            .then(e => e.json())
    },
    addNewCandy(newCandy) {
        return fetch(`http://localhost:5002/candies`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newCandy)
        }).then(data => data.json())
      }
}