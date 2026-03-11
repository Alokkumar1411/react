const Card = (props) => {
    return  <div className="card">
       <img src="https://plus.unsplash.com/premium_photo-1761941892640-f35028178a4f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <h1>{props.user}</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, illo!</p>
      <button>View More</button>
    </div>;
}
 
export default Card;