import CategotyItem from "@/components/category-item";
import NavBar from "@/components/nav-bar"; 

export default function CategoriesPage() {

    return (
        <>
        <NavBar active="Categorias"/>
            <main className="flex items-center justify-center">
                <div className="bg-slate-900 rounded p-6 m-6 min-w-2/3">
                    <h2 className="text-lg font-bold">Categorias</h2>
                    <CategotyItem/>
                    <CategotyItem/>
                    <CategotyItem/>
                    <CategotyItem/>
                </div>
            </main>
        </>
    )
}