import NavBar from "@/components/nav-bar";

export default function TransactionsPage() {

    return (
        <>
            <NavBar active="Movimentações"/>
            <main className="flex items-center justify-center">
                <div className="bg-slate-900 rounded p-6 m-6 min-w-2/3">
                    <h2 className="text-lg font-bold">Movimentações</h2>
                </div>
            </main>
        </>
    )
}