import { servicesInfo } from "../data/Info"
import Title from "./Title"


const Services =()=>{
    return(
        <section className="section services" id="services">
        <Title title={'our'} subTitle={'services'}/>
        <div className="section-center services-center">
   {
    servicesInfo.map(({title,id,icon})=>{
        return      <article className="service" key={id}>
        <span className="service-icon"><i className={`fas ${icon} fa-fw`}></i></span>
        <div className="service-info">
          <h4 className="service-title">{title}</h4>
          <p className="service-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Asperiores, officia.
          </p>
        </div>
      </article>
    })
   }
  
       
        </div>
      </section>
    )
}
export default Services






