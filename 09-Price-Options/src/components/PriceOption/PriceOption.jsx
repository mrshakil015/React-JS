import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
    const {option_name, price, features} = option;
    
    return (
        <div className='bg-blue-500 rounded-xl p-4 flex flex-col text-white'>
            <h2 className='text-center mt-3'>
            <span className='text-7xl font-extrabold'>$</span>
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className="text-3xl text-center my-8 font-bold">{option_name}</h4>        
            <div className='pl-6 flex-grow'>
            {
                features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
            }
            </div>
            <button  className='mt-12 bg-green-800 w-full py-4 rounded-lg text-3xl font-bold hover:bg-green-900'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object.isRequired
}

export default PriceOption;