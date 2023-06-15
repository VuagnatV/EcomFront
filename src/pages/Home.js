import React from 'react';
import useFetch from '../services/useFetch';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';


function Home() {/*<Link to={"product/" + product.id.toString()} >{product.name}

                        </Link>*/

    const { data, loading, error } = useFetch("http://localhost:3006/products")
    console.log("error : ", error)
    console.log("data : ", data)

    return (
        <div>
            <h1>this is the homepage</h1>

            {data ? <div>

                {data.map((product) => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Title>{product.name} </Card.Title>
                        <Card.Body>{product.price} $</Card.Body>
                        <Button href={"product/" + product.id}> view</Button>
                    </Card>
                ))}
            </div>
                : <div>fdsf</div>
            }
        </div>


    );
}

export default Home;