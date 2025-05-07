import { useState } from "react"
import Link from "next/link"

export default function Home() {
    const [products, setProducts] = useState([]);

    return (
        <>
        <h1>Produtos</h1>
        <Link href="/novo-produto">Adicionar Produto</Link>
        <ul>
        {products.map((p, i) => (
          <li key={i}>
            {p.nome} - R$ {p.preco}
          </li>
        ))}
      </ul>
        </>
    );
}
