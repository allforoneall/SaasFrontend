import React from 'react';

const Header = () => {
    return (
        <header className="flex justify-between px-5 py-4 bg-[#E3E8ED] items-center">
            <div>
                <h2 className='text-xl text-[#333]'>MOVIECRITIC</h2>
            </div>
            <div className="flex gap-3">
                <button onClick={()=>document.getElementById('my_modal_1').showModal()} className="border-[#6558f5] border-2 px-5 py-2 rounded-md bg-white text-[#6558f5]">Add New Movie</button>
                <button onClick={()=>document.getElementById('my_modal_2').showModal()} className="bg-[#6558f5] text-white px-5 py-2 rounded-md">Add New Review</button>
            </div>
        </header>
    );
};

export default Header;
