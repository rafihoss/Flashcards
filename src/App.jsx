import './App.css'
import Card from '../components/Card'
import premBANNER from "../images/prembanner.png" // Update the import path

const App = () => {
  return (
    <div className="App">
      <div className="image-container"> 
        <img src={premBANNER} alt="premBANNER" height="220px" width="55%" className="centered-image" />
        <h1>Top 10 Team Schedules</h1> 
      </div>

    <div className='cardboard'>
      <Card imageUrl={"https://1000logos.net/wp-content/uploads/2017/05/emblem-Manchester-City.jpg"} teamName={"Manchester City"} stadiumName={"Etihad Stadium"} scheduleLink={"https://www.fotmob.com/teams/8456/fixtures/manchester-city"} />
      
      <Card imageUrl={"https://i.pinimg.com/originals/8e/f5/9d/8ef59dc3c90a3abd56c87a5901709132.jpg"} teamName={"Manchester United"} stadiumName={"Old Trafford"} scheduleLink={"https://www.fotmob.com/teams/10260/fixtures/manchester-united"} />
      
      <Card imageUrl={"https://wallpapercave.com/wp/wp1924030.jpg"} teamName={"Liverpool"} stadiumName={"Anfield"} scheduleLink={"https://www.fotmob.com/teams/8650/fixtures/liverpool"} />
      
      <Card imageUrl={"https://c4.wallpaperflare.com/wallpaper/968/357/70/tottenham-hotspur-football-logo-tottenham-wallpaper-preview.jpg"} teamName={"Tottenham Hutspur"} stadiumName={"Tottenham Stadium"} scheduleLink={"https://www.fotmob.com/teams/8586/fixtures/tottenham-hotspur"} />
      
      <Card imageUrl={"https://wallpapercave.com/wp/wp7422182.jpg"} teamName={"Arsenal"} stadiumName={"Emirates Stadium"} scheduleLink={"https://www.fotmob.com/teams/9825/fixtures/arsenal"} />
      
      <Card imageUrl={"https://wallpapercave.com/wp/XwRmbnm.jpg"} teamName={"Chelsea"} stadiumName={"Stamford Bridge"} scheduleLink={"https://www.fotmob.com/teams/8455/fixtures/chelsea"} />
      
      <Card imageUrl={"https://1000logos.net/wp-content/uploads/2018/06/Brighton-Hove-Albion-fc-Logo-768x432.jpg"} teamName={"Brighton & Hove Albion"} stadiumName={"Amex Stadium"} scheduleLink={"https://www.fotmob.com/teams/10204/fixtures/brighton-hove-albion"} />
      
      <Card imageUrl={"https://1000logos.net/wp-content/uploads/2018/06/newcastle-united-fc-logo-768x432.jpg"} teamName={"Newcastle United"} stadiumName={"St. James' Park"} scheduleLink={"https://www.fotmob.com/teams/10261/fixtures/newcastle-united"} />
      
      <Card imageUrl={"https://www.logodesignlove.com/images/sports/brentford-club-crest-01.jpg"} teamName={"Brentford"} stadiumName={"Gtech Community Stadium"} scheduleLink={"https://www.fotmob.com/teams/9937/fixtures/brentford"} />
      
      <Card imageUrl={"https://1000logos.net/wp-content/uploads/2018/06/crystal-palace-new-logo.jpg"} teamName={"Crystal Palace"} stadiumName={"Selhurst Park"} scheduleLink={"https://www.fotmob.com/teams/9826/fixtures/crystal-palace"} />
      
    </div>
      </div>
  );
}

export default App;