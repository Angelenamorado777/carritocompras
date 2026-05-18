'use client'

import React, { useContext, useEffect, useState } from 'react'
import { Vista } from '../models/Vista';
import { Producto } from '../models/Producto';
import { Carrito } from '../models/Carrito';
import { contexCarrito } from '../context/ContextCarrito';

export default function ProviderCarrito({ children }: Vista) {

  const [producto, setProducto] = useState<Producto[]>([]);
  const [productoCarrito, setProductoCarrito] = useState<Producto[]>([]);

  function agregarCarrito(producto: Producto) {
    setProductoCarrito([...productoCarrito, producto]);
  }

  async function obtenerProductos() {
    const response = await fetch('http://localhost:5000/productos');
    const data = await response.json();
    setProducto(data.data);
  }

  async function agregarProducto(producto: Producto, opcion: number) {
    if (opcion === 1) {
      const response = await fetch('http://localhost:5000/productos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(producto),
      });

      if (response.ok) {
        obtenerProductos();
        alert('Producto agregado correctamente');
      }
    }
  }

  async function eliminarProducto(id: number) {
    const response = await fetch(`http://localhost:5000/productos/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      obtenerProductos();
      alert('Producto eliminado correctamente');
    }
  }

  async function guardarCarritoBD(carrito: Carrito) {
    const response = await fetch('http://localhost:5000/carrito', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(carrito),
    });

    if (response.ok) {
      alert('Producto agregado al carrito');
    } else {
      alert('Error al agregar producto al carrito');
    }
  }

  /*useEffect(() => {
    obtenerProductos();
  }, []);*/

  return (
    <contexCarrito.Provider value={{
      producto,
      productoCarrito,
      agregarCarrito,
      obtenerProductos,
      agregarProducto,
      eliminarProducto,
      guardarCarritoBD
    }}>
      {children}
    </contexCarrito.Provider>
  )
}

export function useContextCarrito() {
  return useContext(contexCarrito);
}