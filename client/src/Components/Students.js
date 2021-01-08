import React from 'react'
import { gql, useQuery } from "@apollo/client"

const Get_Students = gql`
    query getAllStudents{
        students{
            name
            age
            id
            email
          }
    }
`
function Students() {
    const { loading, error, data } = useQuery(Get_Students);
    if (loading) return <h3>Loading.....</h3>
    if (error) return <h3>Error!</h3>
    const { students } = data;
    return (
        <div>
            <h1>Students List</h1>
            <table border="2">
                <thead>
                    <tr>
                        <th>S. No</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map(std => {
                            return (
                                <tr key={std.id}>
                                    <td>{std.id}</td>
                                    <td>{std.name}</td>
                                    <td>{std.age}</td>
                                    <td>{std.email}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Students
