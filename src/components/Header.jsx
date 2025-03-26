import logo from '../assets/logo-mark.svg';

export default function Header(){
    return(
        <div className='flex items-center gap-3 mt-4 sm:pb-10 pb-4'>
            <img src={logo} alt = 'Logo' className='w-7 h-7'/>
            <h2 className="text-2xl text-white">Coding Conf</h2>
        </div>
    );
}