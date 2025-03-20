import Link from "next/link";
interface NavBarProps{ active: "Movimentações" | "Dashboard"| "Categorias"}

export default function NavBar (props: NavBarProps){
    const {active} = props
    const activeClass = "border-b-2 border-green-600 pb-6"

    const links = [
        {link: "/dashboard", label: "Dashboard"},
        {link: "/transactions", label: "Movimentações"},
        {link: "/categories", label: "Categorias"}
    ]

   return (
    <nav className="bg-slate-900 flex px-6 pt-6 justify-between items-center">
                <h1 className="text-4xl font-bold">FinMoney</h1>
                <ul className="flex gap-6 text-xl">
                    {links.map(link =>   
                            <li className={link.label === active? activeClass: ""}><Link href={link.link}>{link.label}</Link></li>   
                    )}
                </ul>
                <img className="size-12 rounded-full" src="http://github.com/henriquedml.png" alt="" />
            </nav>
   )
}