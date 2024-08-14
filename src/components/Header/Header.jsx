import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <div className='flex justify-between mt-5 mb-10 p-2 items-center'>
            <h1 className='text-5xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;