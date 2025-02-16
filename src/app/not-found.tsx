import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col h-screen text-center text-green-500">
            <div className="my-auto">
                <p className="text-4xl py-6">Erro 404</p>
                <p className="text-2xl py-6">Página não encontrada!</p>
            </div>
            <Link className="pb-10" href="/">
                Voltar para Home
            </Link>
        </div>
    )
}