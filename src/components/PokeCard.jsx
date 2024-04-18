/* eslint-disable react/prop-types */
import pikachu from '../assets/pikachuplaceholder.png'

function PokeCard({Name = "Untitled", Image = pikachu}) {
  return (
    <div className="size-36 min-[820px]:size-64 lg:size-80 sm:size-56 max-[290px]:size-28 bg-white my-2 mx-auto rounded-xl">
        <span className='flex justify-center bg-yellow-400 rounded-se-xl rounded-ss-xl'>
            <img className='max-[290px]:size-20 size-24 sm:size-36 min-[820px]:size-40 lg:size-56 p-1' src={Image} alt="" />
        </span>

        <span>
          <h2 className='text-center sm:text-2xl'>{Name}</h2>
        </span>
    </div>
  )
}

export default PokeCard