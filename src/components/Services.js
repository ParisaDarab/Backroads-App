import { servicesInfo } from "../data/Info"
import Title from "./Title"
import { Service } from "./map"


const Services =()=>{
    return(
        <section className="section services" id="services">
        <Title title={'our'} subTitle={'services'}/>
        <div className="section-center services-center">
   {
    servicesInfo.map((service)=>{
        return     <Service key={service.id} {...service} /> 
    })
   }
  
       
        </div>
      </section>
    )
}
export default Services






