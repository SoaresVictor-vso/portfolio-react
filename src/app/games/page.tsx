import Link from "next/link";

export default function GamesPage() {
    return(
        <div>
            <h1>Lista de Jogos desenvolvictors</h1>
            <Link className="text-green-500 pt-10 text-center" href="/">
                Ir para Home
            </Link>
        </div>
    )
}