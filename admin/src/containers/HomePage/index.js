import React, { Component } from 'react'
import axios from 'axios'
import Form from './form'
import Table from './table'



export default class HomePage extends Component {


   constructor()
   {
     super();

     this.state = {
       data:[],
       editData:[]
     }


   }

  componentDidMount()
  {
            this.getAll();
  }

  async getAll(){

   axios.get('http://localhost:1337/advertisements/approved/').then(res =>{


      this.setState({
        data:res.data
      })

   })

  }

  update = data =>{

   this.setState({
    editData:data
   })



  }



  render() {
    return (
      <div className="container mt-4">
        <div className="row">

          <h1> Desktop</h1>

        </div>


      </div>

    )
  }
}
