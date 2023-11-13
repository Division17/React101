import { cardEleImg } from "../../utils/Constant";

export default CardComponent = (props) => {
    const { restData } = props;

    const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } = restData?.info;
    return (
        <>
            <div className="card-el">
                <div className="card-img-cont">
                    <img className="food-el" src={cardEleImg+cloudinaryImageId} alt="food pic" />
                </div>
                <div className="card-detail">
                    <h3>{name}</h3>
                    <h4>{cuisines.join(", ")}</h4>
                    <h5>{avgRating} ⭐</h5>
                    <h4>{costForTwo}</h4>
                    <h4>{sla.deliveryTime} minutes</h4>

                </div>
            </div>
        </>
    )
}