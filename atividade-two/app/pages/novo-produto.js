import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/router"

export default function Atvidade() {
    const router = useRouter();
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const novoProduto = {
            nome: nome,
            preco: preco
        };

        router.push({
            pathname: '/',
            query: {
              nome,
              preco,
            },
          });
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nome do Produto" value={nome} onChange={(e) => setNome(e.target.value)} required />
            <input type="number" placeholder="Preço do produto" value={preco} onChange={(e) => setPreco(e.target.value)} required />
            <button type="submit">Adicionar Produto</button>
            <Link href="/">Voltar</Link>
        </form>
        </>
    );
}
