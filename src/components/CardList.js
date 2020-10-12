import React from 'react';
import Card from './Cards';

function CardList({restaurantList}) {
    // console.log('gjjdfg: ' + JSON.stringify(restaurantList));
    return(
        restaurantList.map((store, index) => {
            console.log('name:' + store.restaurant.name)
            return (
                <div style={{marginTop: '50px', marginLeft: '50px'}}>
                    <Card key={index} storeName={store.restaurant.name} image={store.restaurant.thumb} address = {store.restaurant.location.address} profile={store.restaurant.url} />
                </div>
            )
        })
    );
}

export default CardList;