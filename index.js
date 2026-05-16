const express = require('express');
const Producto = require('./Modelos/Producto');
const app = express();
app.use(express.json());


app.get('/productos', async (req, res) => {

    try {


        const productos= await Producto.findAll();

        if(productos.length > 0){
            res.status(200).json({
                message: 'Productos obtenidos correctamente',
                data: productos,
            });
        }else{
            res.status(400).json({
                message: 'No hay productos',
                data: [],
            });
        }
        


    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener los productos',
            error: error.message,
        });
    }

});


app.post('/productos', async (req, res) => {

    try {

        const producto = await Producto.create(req.body);

        if(producto){
            res.status(200).json({
                message: 'Producto creado correctamente',
                data: producto,
            });
        }else{
            res.status(400).json({
                message: 'Error al crear producto',
                data: [],
            });
        }
    

    } catch (error) {
        res.status(500).json({
            message: 'Error al crear productos',
            error: error.message,
        });
    }

});

app.put('/productos/:id', async (req, res) => {
    try {


        const [producto] = await Producto.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        if(producto ){
            res.status(200).json({
                message: 'Producto actualizado correctamente',
                data: producto,
            });
        }else{
            res.status(400).json({
                message: 'Error al actualizar producto',
                data: [],
            });
        }
        
    } catch (error) {
        res.status(500).json({
            message: 'Error al actualizar productos',
            error: error.message,
        });
    }
})


app.delete('/productos/:id', async (req, res) => {
    try {


        const producto = await Producto.destroy({
            where: {
                id: req.params.id,
            },
        });
        
        if(producto){
            res.status(200).json({
                message: 'Producto eliminado correctamente',
                data: producto,
            });
        }else{
            res.status(400).json({
                message: 'Error al eliminar producto',
                data: [],
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Error al actualizar productos',
            error: error.message,
        });
    }
})

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});