import React from "react";
import ReactDOM from "react-dom/client";
import { useState,useEffect } from "react";
import './index.css'


const url = ('https://jsonplaceholder.typicode.com/users')

function App(){

  const [users,setUsers] = useState([])

  async function getData(){
    try {
      const response = await fetch(url)
      const users = await response.json()
      setUsers(users)
      console.log(users)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
        <h1>Name Card List</h1>
      {
        users.map((user) => {
          return(
            <div key={user.id} className="col-lg-6 col-md-4 card">

              {/* card-header */}
              <div className="cardHeader">
                <div className="headerLeft">
                  <p className="titleL">{user.name}</p>
                </div>
                <div className="headerRight">
                  <p className="titleR">{user.username}</p>
                </div>
              </div>

              {/* card-body */}
              <div className="bodyHolder">

                {/* left side */}
                <div className="bodyLeft">
                  <p className="email">email : {user.email}</p>
                  <p className="phone">ph : {user.phone}</p>
                </div>


                {/* right side */}
                <div className="bodyRight">
                  <div className="box">
                    <div className="tip1"></div>
                    <div className="tip2"></div>
                    <div className="tip3"></div>
                    <div className="tip4"></div>
                  </div>
                </div>
              </div>

            </div>
          )
        })
      }
        </div>
      </div>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)