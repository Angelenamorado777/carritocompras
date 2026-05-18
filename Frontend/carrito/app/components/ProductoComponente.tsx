'use client'

import React from 'react'
import { Producto } from '../models/Producto';
import { useContextCarrito } from '../provider/ProviderCarrito';

export default function ProductoComponente(producto: Producto) {

  const { agregarCarrito, guardarCarritoBD } = useContextCarrito();

  function agregar() {

    agregarCarrito(producto);

    guardarCarritoBD({
      idproducto: producto.id!,
      isvProducto: producto.precio * 0.15,
      ordenCompra: 1,
    });

  }

  return (

  <div className="bg-white text-black rounded-xl shadow-lg p-5 w-80 flex flex-col gap-3">

    <img
      src={producto.imagen}
      alt={producto.nombre}
      className="w-full h-48 object-cover rounded-lg"
    />

    <h2 className="text-2xl font-bold">
      {producto.nombre}
    </h2>

    <p className="text-gray-600">
      {producto.descripcion}
    </p>

    <p className="text-xl font-semibold text-green-600">
      L. {producto.precio}
    </p>

    <button
      className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
      onClick={agregar}
    >
      Agregar al carrito
    </button>

  </div>
)

  
   
}