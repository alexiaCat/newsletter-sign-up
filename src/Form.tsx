import bgImg from '/images/illustration-sign-up-desktop.svg';
import iconList from '/images/icon-list.svg';

export const Form = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-[930px] text-neutral-charcoal-grey  bg-neutral-white rounded-3xl p-6 flex flex-row">
                <div className="flex flex-col w-[55%] px-12 py-8">
                    <h1 className='text-neutral-dark-slate-grey text-[55px] font-bold'>Stay updated!</h1>
                    
                    <p className='text-[15px]'> Join 60,000+ product managers receiving monthly updates on:</p>
                    <p className='my-5'><img className='inline-block mr-2' src={iconList}/> Product discovery and building what matters</p>
                    <p ><img className='inline-block mr-2' src={iconList}/> Measuring to ensure updates are a success</p>
                    <p className='my-5'><img className='inline-block mr-2' src={iconList}/> And much more!</p>
                    <form className='mt-5'>
                        <p className='text-[12px] text-neutral-dark-slate-grey font-bold'>Email Address</p>
                        <input type="email"
                        placeholder='email@company.com'
                        className='w-full border py-3'
                        />
                        <button className="bg-neutral-dark-slate-grey text-white w-full py-4 rounded-lg mt-5" type="submit">Subscribe to monthly newsletter</button>
                    </form>
                </div>
                <img
                    src={bgImg}
                    className='h-[560px]'
                />
            </div>

        </div>
    )
}
