import {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SelectHero from '../SelectHero/SelectHero';
import Team from '../Team/Team';

const Home = () => {

  //States
  const [team, setTeam] = useState([]);
  const [intelligence, setIntelligence] = useState(0);
  const [strength, setStrength] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [durability, setDurability] = useState(0);
  const [power, setPower] = useState(0);
  const [combat, setCombat] = useState(0);
  const [powerStats, setPowerStats] = useState([]);


  //Función que contruye el equipo 
  const constructorTeam = hero => {
    setTeam([
      ...team,
      hero
    ])
    setIntelligence( intelligence + Number(hero.powerstats.intelligence) || 0)
    setStrength(strength + Number(hero.powerstats.strength)|| 0)
    setSpeed(speed + Number(hero.powerstats.speed) || 0)
    setDurability(durability + Number(hero.powerstats.durability) || 0)
    setPower(power + Number(hero.powerstats.power) || 0)
    setCombat(combat + Number(hero.powerstats.combat) || 0)
  }

  const dividir = (skill, team )=> {
    console.log(skill / team.length);
  }

  useEffect(() => {
  
    setPowerStats({
      intelligence: intelligence,
      strength: strength,
      speed: speed,
      durability: durability,
      power: power,
      combat: combat
    })
  }, [intelligence, strength, speed, durability, power, combat])

  console.log(team.sort())

  return ( 
    <Router>
      <Link to='/home'>
        Equipo
      </Link>
      <Link to='/SearchHero'>
        Buscar
      </Link>
      <Switch>
        <Route path='/SearchHero'>
        <SelectHero 
          constructorTeam={constructorTeam}
          setIntelligence={setIntelligence}
          setStrength={setStrength}
          setSpeed={setSpeed}
          setDurability={setDurability}
          setPower={setPower}
          setPowerStats={setPowerStats}
        />
        </Route>
        <Route path='/home'>
          <Team 
            team={team}
            dividir={dividir}
            powerStats={powerStats}
            />
        </Route>
      </Switch>
    </Router>
   );
}
 
export default Home;