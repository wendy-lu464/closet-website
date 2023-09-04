import React from "react";

const ItemCard = ({item}) => {
    return (
        <div className="movie">
            <div>
                <p>{item.Type}</p>
            </div>

            <div>
                <img src={item.Image !== 'N/A' ? item.Image : 'https://via.placeholder.com/400'} alt={item.Name} />
            </div>

            <div>
                <span>{item.Brand}</span>
                <h3>{item.Name}</h3>
            </div>
        </div>
    )
}

export default ItemCard;