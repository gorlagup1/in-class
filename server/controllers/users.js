/* B"H

*/
const express = require('express');
const model = require('../models/users');

const app =express.Router();

    app
        .get('/', (req, res)=> res.send(model.GetAll() ) )
        .get('/:user_id',(req, res)=> res.send(model.Get(req.params.user_id))
        .post('/',(req,res)=> res.send(model.GetAll()))
        .delete('/',(res,req)=> res.send(model.GetAll()))
module.exports = app;