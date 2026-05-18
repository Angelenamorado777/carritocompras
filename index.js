const express = require('express');
const cors = require('cors');
const Carrito = require('./Modelos/Carrito');
const app = express();
app.use(express.json());
app.use(cors());


app.get('/carrito', async (req, res) => {

    try {


        const carrito= await Carrito.findAll();

        if(carrito.length > 0){
            res.status(200).json({ message: 'El carrito se obtuvo correctamente',data: carrito});
        }else{
            res.status(400).json({message: 'No hay productos en el carrito',data: []});
        }
        


    } catch (error) {
        res.status(500).json({message: 'Error al obtener el carrito',error: error.message});
    }

});


app.post('/carrito', async (req, res) => {
  try {
    const { idproducto, isvProducto, ordenCompra } = req.body;

    const nuevoCarrito = await Carrito.create({
      idproducto,isvProducto,ordenCompra
    });

    res.status(201).json({message: 'Producto agregado al carrito correctamente',data: nuevoCarrito});

  } catch (error) {
    res.status(500).json({message: 'Error al agregar producto al carrito',error: error.message});
  }
});

app.put('/carrito/:id', async (req, res) => {

    try {

        const [carrito] = await Carrito.update(req.body, {

            where: {idcarrito: req.params.id, },
        });

        if(carrito){

            res.status(200).json({message: 'Producto actualizado correctamente',data: carrito});

        }else{

            res.status(400).json({message: 'Error al actualizar producto',data: []});

        }

    } catch (error) {

        res.status(500).json({message: 'Error al actualizar producto',error: error.message});

    }

});


app.delete('/carrito/:id', async (req, res) => {

    try {

        const carrito = await Carrito.destroy({

            where: {idcarrito: req.params.id,},

        });

        if(carrito){

            res.status(200).json({message: 'Producto eliminado correctamente',data: carrito});
        }else{

            res.status(400).json({message: 'Error al eliminar producto',data: []});

        }

    } catch (error) {

        res.status(500).json({message: 'Error al eliminar producto',error: error.message});

    }

});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});