/* B"H

*/
const express = require('express');
const model = require('../models/users');

const app =express.Router();

    app
        .get('/', (req, res)=> res.send(model.GetAll() ) )
        .get('/:user_id',(req, res)=> res.send(model.Get(req.params.user_id))
        .post('/',(req,res)=> res.send(model.Add({
            firstName: req.query.firstName,
            lastName: req.query.lastName,
            handle: req.query.handle,
            pic: req.query.pic,
        })))
        .patch('/:user_id',(req,res)=>res.send( model.Update(
            req.params.user_id,
            {
                firstName: req.query.firstName,
                lastName: req.query.lastName,
                handle: req.query.handle,
                pic: req.query.pic,  
            })))
        .delete('/:user_id',(res,req)=> res.send(model.Delete(req.parmas.user_id))

        module.exports = app;