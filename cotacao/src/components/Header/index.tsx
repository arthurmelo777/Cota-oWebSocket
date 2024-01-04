import './style.css'
import { useNavigate } from 'react-router-dom';

const CardCountry = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className='row d-flex justify-content-center' id='head' onClick={() => { navigate("/") }} >
                <h1 className='text-center' >
                    Cotação de moedas</h1>
            </div>
        </div>
    );
};

export default CardCountry;