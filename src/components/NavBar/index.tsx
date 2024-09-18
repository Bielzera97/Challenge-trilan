import Image from "next/image"
import { IoMdOptions } from "react-icons/io";
import { IoSearch } from "react-icons/io5";



const NavBar = () => {
    return(
        <section className="flex items-center px-6 py-2">
        <Image 
                alt="Logo"
                src={'/Logo.png'}
                width={128}
                height={34.88}
        />
        <div className="navbar flex justify-center gap-3">
            <section className="input-section rounded-full flex gap-2 p-1">
                <button className="search-button text-xl rounded-full p-2 duration-200"><IoSearch/></button>
                <input type="text" placeholder="Pesquisar..." className="input-css rounded-full " />
            </section>
            <button className="filter-button text-xl rounded-2xl p-3 duration-200 "><IoMdOptions/></button>
        </div>
        </section>
    )
}


export default NavBar