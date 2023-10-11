import bgImg from '/images/illustration-sign-up-desktop.svg';
import iconList from '/images/icon-list.svg';
import { Link } from "react-router-dom";

export const Form = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-[930px] text-neutral-charcoal-grey shadow-xl bg-neutral-white rounded-3xl p-[23px] flex flex-row">
                <div className="flex flex-col max-w-[482px] p-[25px]">
                    <div className="pr-[40px] pl-[17px]">
                               <h1 className='text-neutral-dark-slate-grey text-[55px] font-bold mt-3'>Stay updated!</h1>
                    
                    <p className='text-[15px] mt-4'> Join 60,000+ product managers receiving monthly updates on:</p>
                    <p className='my-5'><img className='inline-block mr-2' src={iconList}/> Product discovery and building what matters</p>
                    <p ><img className='inline-block mr-2' src={iconList}/> Measuring to ensure updates are a success</p>
                    <p className='my-5'><img className='inline-block mr-2' src={iconList}/> And much more!</p>
                    <form className='mt-[45px]'>
                        <p className='text-[12px] text-neutral-dark-slate-grey font-bold'>Email Address</p>
                        <input type="email"
                        placeholder='email@company.com'
                        className='w-full border-[2px] py-4 px-5 rounded-[5px] text-[15px] mt-2'
                        />
                        <Link to='/success'> <button className="bg-neutral-dark-slate-grey text-white w-full py-4 rounded-lg mt-6 hover:bg-primary-tomato hover:shadow-xl shadow-primary-tomato" type="submit">Subscribe to monthly newsletter</button>
                        </Link>
                       
                    </form>
                    </div>
             
                </div>
                <img
                    src={bgImg}
                    className='w-[45%]'
                />
            </div>

        </div>
    )
}
