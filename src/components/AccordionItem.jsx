import React from 'react'

const AccordionItem = ({ title, content, onToogle, isOpen }) => {
    return (
        <div className={`${isOpen ? "bg-slate-200" : "bg-slate-100"}   w-[30rem] rounded-md mb-3`}>
            <div className='p-4'>
                <span className='font-bold'>{title}</span>
                <span onClick={onToogle} className='float-right cursor-pointer'>{isOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                </svg>
                    : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                }</span>
            </div>
            {isOpen &&
                <div className='p-4'>{content}</div>
            }
        </div>
    )
}

export default AccordionItem

// className='  border w-[30rem] p-4 space-y-4'