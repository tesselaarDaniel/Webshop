import React, {useEffect, useState} from "react";
import '../design/SearchingBar.css'
import {apiGet, apiPost} from "./DataHandler";

export default function UserList(){
    const [allProductData, setAllProductData] = useState([]);
    const [userProductData, setUserProductData] = useState([]);
    const productNameList = allProductData.map(product => <a href={`#${product.name}`} onClick={() => addAnimeToUserList(product.id)}>{product.name}</a>);
    let userId = sessionStorage.getItem("id");
    const productList = userProductData.map( product =>
        <div className="row anime-row" id={product.id}>
            <div className="col">{product.name}</div>
            <div className="col">{product.rating}</div>
            <div className="col">{product.episodes}</div>
            <div className="col">{product.type}</div>
            <div className="col picture"><img src="../img/hxh.jpg" alt="logo" /></div>
            <div className="col">
            </div>
        </div>
    );

    function addAnimeToUserList(productId){
        apiPost("/add-anime-user", `${[userId, productId]}`)
            .then(r => setUserProductData(r));

    }

    useEffect(() => {
        apiGet(`/product`)
            .then(r => setAllProductData(r));
             apiGet(`/user/${userId}`)
            .then(r => setUserProductData(r));
    }, []);

    function searchFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    function filterFunction() {
        let input, filter, a, i;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        let div = document.getElementById("myDropdown");
        a = div.getElementsByTagName("a");
        for (i = 0; i < a.length; i++) {
            let txtValue = a[i].textContent || a[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                a[i].style.display = "";
            } else {
                a[i].style.display = "none";
            }
        }
    }

    return (
        <div className="container" >
            <div className="dropdown tool-container">
                <button onClick={searchFunction} className="dropbtn">Add new anime to list</button>
                <div id="myDropdown" className="dropdown-content">
                    <input type="text" placeholder="Search.." id="myInput" onKeyUp={filterFunction}/>
                    {productNameList}
                </div>
            </div>
                <div className="container">
                    <div className="row col-titles">
                        <div className="col">Name</div>
                        <div className="col">Rating</div>
                        <div className="col">Episodes</div>
                        <div className="col">Type</div>
                        <div className="col"></div>
                        <div className="col"></div>
                    </div>
                    {productList}
                </div>
            </div>
    )

}