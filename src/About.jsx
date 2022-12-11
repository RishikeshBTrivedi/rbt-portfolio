import React from 'react'

const About = () => {
    const techs = [
        {
            name: 'React.js'
        },
        {
            name: 'Node.js'
        },
        {
            name: 'Express.js'
        },
        {
            name: 'MongoDB'
        },
        {
            name: 'TensorFlow'
        },
        {
            name: 'Keras'
        },
        {
            name: 'Microsift Azure'
        },
        {
            name: 'Scikit-Learn'
        },
    ]
  return (
    <div className='flex h-screen justify-center items-center'>
        <div class="text-center"> 
            <h1 class="text-5xl font-Beb text-white tracking-wide">Technologies I have worked with</h1>
            <div className='mt-10 grid grid-cols-2 gap-4'>
                {/* {techs.map((name,_id ) => (
                    <div key = {_id}>
                        <h1 className = 'text-white'>{name}</h1>
                    </div>
                    
                ))} */}
                <h1 className='text-2xl text-white' style={{textShadow: '5px 5px 10px #1F51FF'}}>React.js</h1>
                <h1 className='text-2xl text-white'style={{textShadow: '5px 5px 10px #1F51FF'}}>Express.js</h1>
                <h1 className='text-2xl text-white' style={{textShadow: '5px 5px 10px #1F51FF'}}>Node.js</h1>
                <h1 className='text-2xl text-white'style={{textShadow: '5px 5px 10px #1F51FF'}}>MongoDB</h1>
                <h1 className='text-2xl text-white' style={{textShadow: '5px 5px 10px #1F51FF'}}>Next.js</h1>
                <h1 className='text-2xl text-white' style={{textShadow: '5px 5px 10px #1F51FF'}}>Microsoft Azure</h1>
                <h1 className=' text-2xl text-white' style={{textShadow: '5px 5px 10px #1F51FF'}}>Tensorflow</h1>
                <h1 className='text-2xl text-white' style={{textShadow: '5px 5px 10px #1F51FF'}}>Keras</h1>
                <h1 className='text-2xl text-white' style={{textShadow: '5px 5px 10px #1F51FF'}}>SciKit-Learn</h1>
                <h1 className='text-2xl text-white' style={{textShadow: '5px 5px 10px #1F51FF'}}>PyTorch</h1>
            </div>
        </div>
    </div>
  )
}

export default About