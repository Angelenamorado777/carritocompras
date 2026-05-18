import Image from "next/image";
import ProductoComponente from "./components/ProductoComponente";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center">

    <ProductoComponente
      id={1}
      nombre="Laptop"
      precio={25000}
      descripcion="Laptop Gamer"
      imagen="https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
    />
  </div>
    
  );
}
