import React, { useContext } from 'react';
import useFetch from '../../services/useFetch';
import './Home.css'
import { SessionContext } from '../../context/SessionContext';
import ProductCard from '../../components/ProductCard/ProductCard';


const Home = () => {

    const [session] = useContext(SessionContext);
    const { data } = useFetch("https://ecom-api-ctiy.onrender.com/api/v1/product")
    console.log(session.id)

    return (

        <div className="home">
            <h2 className='title'>Featured Products</h2>
            <div className='list'>
                {
                    data
                        ?
                        data.map((product) => (
                            <ProductCard key={product.id} product={product} id={session?.loggedIn ? session.id : null} />
                        ))

                        : <div> Loading </div>
                }
            </div>

        </div>


    );
}
/*<div>
           <h1>this is the homepage</h1>

           {data ?
               <div className="product-list">
                   {data.map((product) => (
                       <ProductCard key={product.id} product={product} id={session?.loggedIn ? session.id : null} />
                   ))}
               </div>
               : <div>Loading</div>
           }
       </div >*/

export default Home;