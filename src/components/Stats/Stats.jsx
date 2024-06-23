import Counter from "./Counter"
const Stats = () => {
    return (
        <section className="relative isolate overflow-hidden px-6 py-24 sm:pt-16 py-32 lg:px-8 mt-10 md:mt-32 border-t border-[#828282]/30">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 lg:gap-20 px-8 md:px-20 lg:px-32  2xl:max-w-[100rem] mx-auto'>
                <div>
                    <h1 className="text-center text-6xl">
                        <Counter start='0' end='20'/>
                    </h1>
                    <p className="mt-3 text-brand-gray text-2xl font-medium text-center">Projects Completed</p>
                </div>
                <div>
                    <h1 className="text-center text-6xl">
                        <Counter start='0' end='3'/>
                    </h1>
                    <p className="mt-3 text-brand-gray text-2xl font-medium text-center">Years of Experience</p>
                </div>
                <div>
                    <h1 className="text-center text-6xl">
                        <Counter start='0' end='80000'/>
                    </h1>
                    <p className="mt-3 text-brand-gray text-2xl font-medium text-center">lines of Code</p>
                </div> 
                <div>
                    <h1 className="text-center text-6xl">
                        <Counter start='0' end='511'/>
                    </h1>
                    <p className="mt-3 text-brand-gray text-2xl font-medium text-center">GitHub Contributions</p>
                </div>
            </div>
        </section> 
    )
}

export default Stats