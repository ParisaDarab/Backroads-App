import { TourInfo } from "../data/Info"
import Title from "./Title"


const Tours =()=>{
    return(
        <section className="section" id="tours">
         <Title title={'featured'} subTitle={'tours'}/>
  
        <div className="section-center featured-center">
          {
                TourInfo.map(({img,date,title,during,price,id})=>{
                return <article className="tour-card" key={id}>
                  <div className="tour-img-container">
                    <img src={img} className="tour-img" alt=""/>
                    <p className="tour-date">{date}</p>
                  </div>
                  <div className="tour-info">
                    <h4>{title}</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
                      vitae tempore voluptatum maxime reprehenderit eum quod
                      exercitationem fugit, qui corporis.
                    </p>
                    <div className="tour-footer">
                      <p>
                        <span><i className="fas fa-map"></i></span> kenya
                      </p>
                      <p>{during}</p>
                      <p>{price}</p>
                    </div>
                  </div>
                </article>
            })
          }
  
        </div>
      </section>
    )
}
export default Tours