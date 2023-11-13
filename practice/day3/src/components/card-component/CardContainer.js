import { useState, useEffect } from 'react';
import CardComponent from "./CardComponent";
import Shimmer from '../Shimmer';

export default CardContainer = () => {
  const [restList, setRestList] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [newRestList, setNewRestList] = useState(restList)

  useEffect(() => {
   fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING").then((response) => response.json()).then((response) => setRestList(response?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    )

  }, []);


  const filterData = () => {
    let filteredData = restList.filter((data) => {
      return data.info.avgRating >= 4.5
    })
    setRestList(filteredData);

  }

  const searchFieldChange = (event) => {
    setSearchField(event.target.value)
  }

  console.log(searchField)

  useEffect(()=> {

    const newRestList = restList.filter((data)=>{
     return data.info.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase())
    })
    setNewRestList(newRestList)
   }  
  ,[searchField,restList] )

 return restList.length==0?(
      <>
       <Header/>
       <Shimmer/>
      </>
    ):
   (
    <>
      <div className='card-btn-container'>
        <div className="filter-btn-search-cont">
          <button
            className='filter-btn'
            onClick={filterData}
          >
            Top Resturants
          </button>

         <div className='search-btn-box'>
            <input
              className='search-box'
              type="search"
              placeholder='Search'
              value={searchField}
              onChange={searchFieldChange}
            />
          </div>
        </div>
        <div className="card-container-el">
          {
            newRestList.map((data) => { return (<CardComponent key={data.info.id} restData={data} />) })
          }
        </div>
      </div>
  </>
  )
}