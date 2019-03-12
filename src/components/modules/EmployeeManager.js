export default {

    getAllEmployees: () => {
        return fetch("http://localhost:5002/employees")
            .then(r => r.json())
    },
    getSingleEmployee: (id) => {
        return fetch(`http://localhost:5002/employee/${id}`)
            .then(r => r.json())
    },
    deleteEmployee: (id) => {
        return fetch(`http://localhost:5002/employee/${id}`, {
            method: "DELETE"
        })
            .then(() => fetch(`http://localhost:5002/employees`))
            .then(e => e.json())
    },
    addNewEmployee(newEmployee) {
        return fetch(`http://localhost:5002/employee`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newEmployee)
        }).then(data => data.json())
      }
}