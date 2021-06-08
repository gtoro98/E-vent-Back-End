const db = require("../models");
const Service = db.service;


const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.createService = (req, res) => {

    Service.create({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        promotion: req.body.promotion,
        available: req.body.available,
        user_id: req.body.user_id
      })
  
};
const db = require("../models");
const Service = db.service;


const Op = db.Sequelize.Op;


var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.createService = (req, res) => {

    Service.create({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        promotion : req.body.promotion,
        available: req.body.available,
        user_id: req.body.user_id,
         
    }).then(dist =>{
        res.status(200).send(dist);
        return;
    })

    
};

exports.findAllService = (req,res) => {
    Service.findAll().then(dist => {
        res.status(200).send(dist);
        return;
    })
};

exports.deleteService = (req,res) =>{
    Service.update({activo : "false"}, {
        where:{ 
            id : req.params.id
        }
    }).then(respuesta =>{
        res.status(200).send(respuesta);
    });
}

exports.findServiceById = (req,res) => {
    Service.findByPk(req.params.id)
    .then(respuesta=>{
        res.status(200).send(respuesta);
    })
}

exports.updateService = (req,res) =>{
    Service.update({ name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        available: req.body.available,
       }, {
        where:{ 
            id : req.params.id
        }
    }).then(respuesta =>{
        res.status(200).send(respuesta);
    });
}

