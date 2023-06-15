import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../services/useFetch'


export const Product = () => {



    let { id } = useParams()
    console.log(useParams())

    const { data, loading, error } = useFetch("http://localhost:3006/products/" + id)

    console.log(error)

    return (

        <div>
            {
                data
                    ? <ul>
                        <li> name : {data.name} </li>
                        <li> description : {data.description} </li>
                        <li> price : {data.price} </li>
                        <li> quantity : {data.quantity} </li>
                    </ul>
                    : <div>loading </div>
            }
        </div>

    )
}
