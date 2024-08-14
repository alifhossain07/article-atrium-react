import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <div className='flex justify-between mt-5 mb-10 p-2 items-center'>
            <img src="/src/assets/images/logo.svg" className='md:w-36 lg:36 w-24' alt="" />
            <h1 className='lg:text-4xl md:text-4xl font-bold text-xl ml-2'>The Article Atrium</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;