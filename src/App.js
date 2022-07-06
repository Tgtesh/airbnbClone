
import './App.css';
import Card from './Components/Card';
import Hero from './Components/Hero';
import Nav from './Components/Nav';
import data from './data';
console.log(data)

function App() {
  const items=data.map((item)=> {
    return(
      <Card 
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
      />
    )
  })
 

  return (
    <div className="App">
     <Nav/>
     <Hero/>
     <section className='cards__list'>
     {items}
     </section>
    </div>
  );
}

export default App;
