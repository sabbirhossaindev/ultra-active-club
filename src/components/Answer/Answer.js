import React from 'react';

const Answer = () => {
    return (
        <section className='flex'>
            <div className='gap-7 p-5 w-25'>
                <h2 className='text-2xl'>How does react work?</h2>
                <p>React Full Web works by dividing it into smaller parts. React does not modify the entire web page when any data needs to be updated. Just replace the update call. And this is how React works</p>
            </div>

            <div className='gap-7 p-5 w-25'>
                <h2 className='text-2xl'>What else is useeffect used for other than loading data?</h2>
                <p>useefect is used for many other purposes other than loading data like updating data, running time options, etc.</p>
            </div>

            <div className='gap-7 p-5 w-25'>
                <h2 className='text-2xl'>different between props and state?</h2>
                <p>The difference between props and state is that with props we pass data from the parent component to the child component. And through state we can load the data.</p>
            </div>
        </section>
    );
};

export default Answer;