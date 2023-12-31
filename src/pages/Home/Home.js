import React, { useContext } from 'react';
import useFetch from '../../services/useFetch';
import './Home.css'
import { SessionContext } from '../../context/SessionContext';
import ProductCard from '../../components/ProductCard/ProductCard';


const Home = () => {

    const [session] = useContext(SessionContext);
    const { data } = useFetch("http://localhost:3006/api/v1/product")

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