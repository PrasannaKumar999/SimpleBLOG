import React ,{useContext} from 'react'
import { home } from '../APIs/ApiHome';
const Home = () => {
  const [dataHome] = useContext(home);
  return (
    <div>
      <div className="contentPage">
      
      {dataHome.map((item) => {
        return (
        <a href={item.url}>
            <div className="card">
              <img src={item.urlToImage} alt="Image not found" />
              <p>{item.title}</p>
              <p>{item.description}</p>
              <p>{item.author}{item.publishedAt}</p>
              <hr />
            </div></a>
        );
      })}
      </div>
      <div className="right">
      </div>
    </div>
  )
}

export default Home;