import ReviewCardComponent from "../Component/ReviewCardComponent"
import { reviews } from "../Constant"

const CustomerReview = () => {
  return (
    <section className="max-container ">
      <h3 className="font-palanquin text-center text-4xl font-bold">What Our <span className="text-coral-red">Customres</span> Say?</h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">Here Genuine story from our satisfied customers about their exceptional experience with us.</p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:fel-col gap-14">
        {reviews.map((review ) => (
          <ReviewCardComponent key={review.customerName}
            imgURL ={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback} />
        ))}
      </div>
    </section>
  )
}

export default CustomerReview