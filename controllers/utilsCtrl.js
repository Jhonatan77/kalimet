const db = require('../config/dbconfig');
const pg = require('pg');

const client = new pg.Client(db.url);

let control = [];

client.connect();

control.paises = async(req,res)=>{
    let paises = []
    try{
        
        let cons = await client.query("select * from usp_listar_paises()");
        cons.rows.forEach(row=>{
            paises.push(row)
        });
        res.status(200).send(paises)   
        }
    catch(error){
        res.status(404).send({Msg:error});
    }}

control.contribuyentes = async(req,res)=>{
    let contribuyentes = []
    try{
        
        let cons = await client.query("select * from usp_listar_tipo_contribuyentes()");
        cons.rows.forEach(row=>{
            contribuyentes.push(row)
        });
        res.status(200).send(contribuyentes)   
        }
    catch(error){
        res.status(404).send({Msg:error});
    }}

control.tiposDoc = async(req,res)=>{
    let tipos = []
    try{
        
        let cons = await client.query("select * from usp_listar_tiposdoc()");
        cons.rows.forEach(row=>{
            tipos.push(row)
        });
        res.status(200).send(tipos)   
        }
    catch(error){
        res.status(404).send({Msg:error});
    }}

control.cargos = async(req,res)=>{
    let cargos = []
    try{
        
        let cons = await client.query("select * from usp_listar_cargosPersonal()");
        cons.rows.forEach(row=>{
            cargos.push(row)
        });
        res.status(200).send(cargos)   
        }
    catch(error){
        res.status(404).send({Msg:error});
    }}

control.contactos = async(req,res)=>{
    let contactos = []
    try{
        
        let cons = await client.query("select * from usp_listar_contactos()");
        cons.rows.forEach(row=>{
            contactos.push(row)
        });
        res.status(200).send(contactos)   
        }
    catch(error){
        res.status(404).send({Msg:error});
    }}

control.habilidades= async(req,res)=>{
    let habilidades = []
    try{
        
        let cons = await client.query("select * from usp_listar_habilidades()");
        cons.rows.forEach(row=>{
            habilidades.push(row)
        }); 
        res.status(200).send(habilidades)   
        }
    catch(error){
        res.status(404).send({Msg:error});
    }}

control.activs = async(req,res)=>{
    let activs = []
    try{
        
        let cons = await client.query("select * from usp_listar_act()");
        cons.rows.forEach(row=>{
            activs.push(row)
        });
        res.status(200).send(activs)   
        }
    catch(error){
        res.status(404).send({Msg:error});
    }}

control.agregarActiv = async(req, res)=>{
    try{
        let con = await client.query('select * from usp_create_act ($1)',[req.body.activ])
        res.status(200).send({Msg:'Inserción exitosa'});
    }
    catch(error){
        res.status(404).send({Msg:error});
    }
}

control.eliminarActiv = async(req, res)=>{
    try{
        let con = await client.query('select * from usp_delete_act($1)',[req.params.id])
        res.status(200).send({Msg:'Eliminación exitosa'});
    }
    catch(error){
        res.status(404).send({Msg:error});
    }
}

control.actualizarActiv = async(req, res)=>{
    try{
        let con = await client.query('select * from usp_update_act($1,$2)',[req.body.id,req.body.activ])
        res.status(200).send({Msg:'Actualización exitosa'});
    }
    catch(error){
        res.status(404).send({Msg:error});
    }
}

control.activ= async(req,res)=>{
    let activ = {}
    try{
        let cons = await client.query("SELECT * FROM usp_ver_act($1)",[+req.params.id]);
        cons.rows.forEach(row=>{
            activ = row;
        });
        res.status(200).send(activ)   
        }
    catch(error){
        res.status(404).send({Msg:error});
    }}
//Trabajos
control.trabajos = async(req,res)=>{
    let trabajos = []
    let trabajo = {codigo:0,descripcion:""}
    try{
        
        let cons = await client.query("select * from usp_get_trabajos()");
        cons.rows.forEach(row=>{
            trabajo.codigo = row.cod_trab
            trabajo.descripcion = row.desc_trab
            trabajos.push(trabajo)
            trabajo={}
        });
        res.status(200).send(trabajos)   
        }
    catch(error){
        res.status(404).send({Msg:error});
    }}

control.trabajo= async(req,res)=>{
    let trabajo = {codigo:0,descripcion:""}
    try{
        let cons = await client.query("SELECT * FROM usp_get_trabajo($1)",[+req.params.id]);
        cons.rows.forEach(row=>{
            trabajo.codigo = row.cod_trab
            trabajo.descripcion = row.desc_trab
        });
        res.status(200).send(trabajo)   
        }
    catch(error){
        res.status(404).send({Msg:error});
    }}

control.agregarTrabajo = async(req, res)=>{
    try{
        let con = await client.query('select * from usp_insert_trabajo($1)',[req.body.trabajo])
        res.status(200).send({Msg:'Inserción exitosa'});
    }
    catch(error){
        res.status(404).send({Msg:error});
    }
}

control.actualizarTrabajo = async(req, res)=>{
    try{
        let con = await client.query('select * from usp_update_trabajo($1,$2)',[req.body.codigo, req.body.descripcion])
        res.status(200).send({Msg:'Acualización exitosa'});
    }
    catch(error){
        res.status(404).send({Msg:error});
    }
}

control.eliminarTrabajo = async(req, res)=>{
    try{
        let con = await client.query('select * from usp_delete_trabajo($1)',[req.params.id])
        res.status(200).send({Msg:'Eliminación exitosa'});
    }
    catch(error){
        res.status(404).send({Msg:error});
    }
}
//Fin

//Producto
control.productos = async(req,res)=>{
    let productos = []
    let producto = {codigo:0,descripcion:""}
    try{
        
        let cons = await client.query("select * from usp_get_productos()");
        cons.rows.forEach(row=>{
            producto.codigo = row.cod_prod
            producto.descripcion = row.desc_prod
            productos.push(producto)
            producto={}
        });
        res.status(200).send(productos)   
        }
    catch(error){
        res.status(404).send({Msg:error});
    }}

control.producto= async(req,res)=>{
    let producto = {codigo:0,descripcion:""}
    try{
        let cons = await client.query("SELECT * FROM usp_get_producto($1)",[+req.params.id]);
        cons.rows.forEach(row=>{
            producto.codigo = row.cod_prod
            producto.descripcion = row.desc_prod
        });
        res.status(200).send(producto)   
        }
    catch(error){
        res.status(404).send({Msg:error});
    }}

control.agregarProducto = async(req, res)=>{
    try{
        let con = await client.query('select * from usp_insert_producto($1)',[req.body.producto])
        res.status(200).send({Msg:'Inserción exitosa'});
    }
    catch(error){
        res.status(404).send({Msg:error});
    }
}

control.actualizarProducto = async(req, res)=>{
    try{
        let con = await client.query('select * from usp_update_producto($1,$2)',[req.body.codigo, req.body.descripcion])
        res.status(200).send({Msg:'Acualización exitosa'});
    }
    catch(error){
        res.status(404).send({Msg:error});
    }
}

control.eliminarProducto = async(req, res)=>{
    try{
        let con = await client.query('select * from usp_delete_producto($1)',[req.params.id])
        res.status(200).send({Msg:'Eliminación exitosa'});
    }
    catch(error){
        res.status(404).send({Msg:error});
    }
}
//Fin

module.exports = control