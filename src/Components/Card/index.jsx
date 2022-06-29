
import './card.css'
 
 
export function Card({item}){
    return (
        <>

<div class="container">
  <div class="card">
    <img src={item.image} alt="od"/>
    <div class="card__content">
      <h2>{item.name}</h2>
      <p>
         {item.description}
      </p>
      <button>ver mais</button>
    </div>
  </div>
</div>
   
        
        </>

    )
}