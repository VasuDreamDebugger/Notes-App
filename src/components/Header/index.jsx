import logo from '../../assets/image.png';

const Header=()=>{
    return(
        <header className="bg-blue-400 text-white p-4 flex items-center"> 
            <img src={logo} alt="Logo" className="h-20 w-20 inline-block mr-2 rounded-full"/>
            <h1 className="text-2xl font-bold">Notes App</h1>
        </header>
    )
}

export default Header;