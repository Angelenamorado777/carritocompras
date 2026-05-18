import { createContext } from "react";
import { Producto } from "../models/Producto";
import { Carrito } from "../models/Carrito";

export const contexCarrito = createContext({
  producto: [] as Producto[],
  productoCarrito: [] as Producto[],
  agregarCarrito: (producto: Producto) => {},
  obtenerProductos: () => {},
  agregarProducto: (producto: Producto, opcion: number) => {},
  eliminarProducto: (id: number) => {},
  guardarCarritoBD: (carrito: Carrito) => {},
});