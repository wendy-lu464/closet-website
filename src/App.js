import React from "react";
import SearchIcon from './search-icon.svg'
import ItemCard from "./ItemCard";
import './App.css';

const items = [
    {
        "Name": "Vintage fruit sweater vest",
        "Type": "Top",
        "Size": "Medium",
        "Material": "Cotton ramie blend",
        "Brand": "Thrifted",
        "Image": "https://images.squarespace-cdn.com/content/v1/5c04637925bf020a7187c6d3/1670296467363-V3LRTKJM5FICWFD10DL3/2070CB61-7AB6-4AFA-9F9B-3916D3D2E6CE?format=1500w"
    },
    {
        "Name": "White t-shirt",
        "Type": "Top",
        "Size": "Small",
        "Material": "Cotton",
        "Brand": "Vetta",
        "Image": "N/A"
    }
]

const App = () => {
    return (
        <div className="app">
            <h1>Wendy's Closet</h1>
            <div className="search">
                <input
                    placeholder="Search for items"
                    value="Top"
                    onChange={() => { }}
                />
                <img src={SearchIcon}
                    alt="search"
                    onClick={() => { }} />
            </div>

            {
                items?.length > 0
                    ? (
                        <div className="container">
                            {items.map((item) => (
                                <ItemCard item={item} />
                            ))}
                        </div>
                    ) :
                    <div className="empty">
                        <h2>No items found</h2>
                    </div>
            }
        </div>
    );
}

export default App;