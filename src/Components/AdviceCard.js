import { useState } from 'react';
import axios from 'axios';

import './AdviceCard.scss';

function AdviceCard(){
    function getAdvice(){
        axios.get('https://api.adviceslip.com/advice')
                .then(response => {
                    setIsLoading(false);
                    setLoadedAdvice(response.data.slip);
                    return response.data.slip;
                });
    }

    function randomizeAdvice(){
        setIsLoading(true);
        getAdvice();
    }

    const [isLoading, setIsLoading] = useState(true);
    const [loadedAdvice, setLoadedAdvice] = useState([]);

        if(isLoading){    
            getAdvice();
                      
            return <div class="lds-circle"><div></div></div>;
        } else{
            return (
                <header className="card-wrapper">
                <div className="text-wrapper">
                    <div className="advice-number">
                    <h3>ADVICE  {loadedAdvice.id}</h3>
                    </div>
                    <h2 className="advice-content">
                    {loadedAdvice.advice}
                    </h2>
                </div>

                <svg
                    className="divider"
                    width="444"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g fill="none" fill-rule="evenodd">
                    <path
                        fill="#4F5D74"
                        d="M0 8h196v1H0zM248 8h196v1H248z"
                    />
                    <g transform="translate(212)" fill="#CEE3E9">
                        <rect width="6" height="16" rx="3" />
                        <rect x="14" width="6" height="16" rx="3" />
                    </g>
                    </g>
                </svg>
                <button  className="dice-button" onClick={randomizeAdvice}>
                    <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
                        fill="#202733"
                    />
                    </svg>
                </button>
                </header>
            );
        }
    

}

export default AdviceCard;