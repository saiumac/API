export function ProductCard(p){
    return (
        <div style={{width:'300px',minHeight:'300px',border:'2px solid #000',padding:'10px'}} className="card">
        <figure>
            <img src={p.image} style={{width:'100%',height:'250px'}} alt='logo'/>
        </figure>
        <h2>Id : {p.id}</h2>
        <h2>Price : {p.price}</h2>
        <div className="innerDiv">
        <p>{p.des}</p>
        </div>
        </div>
    )
    }