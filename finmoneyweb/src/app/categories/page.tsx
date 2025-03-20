export default function CategoriesPage() {
    return (
        <>
            <nav className="bg-slate-900 flex px-6 pt-6 justify-between items-center">
                <h1 className="text-4xl font-bold">FinMoney</h1>
                <ul className="flex gap-6 text-xl">
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">Movimentações</a></li>
                    <li className="border-b-2 border-green-600 pb-6"><a href="#">Categories</a></li>
                </ul>
                <img className="size-12 rounded-full" src="http://github.com/henriquedml.png" alt="" />
            </nav>
            
            <main className="flex items-center justify-center">
                <div className="bg-slate-900 rounded p-6 m-6 min-w-2/3">
                    <h2 className="text-lg font-bold">Categories</h2>
                </div>
            </main>
        </>
    )
}