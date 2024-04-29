import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Home() {
    const users = useSelector((state)=>state.users);
    
    console.log(users);
  return (
    <div className='container'>
        <h2>Crud App with JSON SERVER</h2>
        <Link to='/create' className='btn btn-success my-3'>Create+</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user,index)=>{
                        return(
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button className='btn btn-sm btn-primary'>Edit</button>
                                    <button className='btn btn-sm btn-danger ms-2'>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Home