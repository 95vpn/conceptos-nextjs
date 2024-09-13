import Image from "next/image";
import { products } from "@/data/products";


export default function Home() {

  

  return (
    <main>
      <h1 >HOME</h1>
      
      <section>
        {
          products.map(product => (
            <div>
              <figure>
                <img src={'/products/${product.images[0]'} alt={product.title} />
              </figure>
              <div>
                <p>{product.title}</p>
              </div>
            </div>
          ))
        }
      </section>
    </main>
    
    
  );
}
