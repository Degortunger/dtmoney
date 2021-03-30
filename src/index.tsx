import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import {App} from './App';

createServer({
  models:{
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id:1,
          title: 'Freelancer de Website',
          type: 'deposit',
          category: 'Desenvolvimento',
          amount:6000,
          createdAt:new Date('2021-02-23 09:00:30')
        },
        {
          id:2,
          title: 'Renda',
          type: 'withdraw',
          category: 'Casa',
          amount:1000,
          createdAt:new Date('2021-02-14 11:00:30')
        }
      ]
    })
  },

  routes(){
    this.namespace='api';

    this.get('/transactions', ()=>{
      return  this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request)=>{
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
