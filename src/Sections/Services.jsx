import ServiceCard from "../Component/ServiceCard"
import { services } from "../Constant"

const Services = () => {
  return (
    <section className="flex max-container justify-center flex-wrap gap-9">
      {services.map((service) =>(
        <ServiceCard key={service.label}  {...service}/>
      ))}
    </section>
  )
}

export default Services