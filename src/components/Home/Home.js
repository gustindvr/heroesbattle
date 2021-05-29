import {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {Button} from 'react-bootstrap';
import {Navbar} from '../Layout/Navbar/Navbar';

import SelectHero from '../SelectHero/SelectHero';
import Team from '../Team/Team';

const Home = ({setTokenId}) => {

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

    
  const deleteHero = (id, hero) => {
    const newTeam = team.filter(hero => hero.id !== id);
    setTeam(newTeam)
    setIntelligence( intelligence - Number(hero.powerstats.intelligence) || 0)
    setStrength(strength - Number(hero.powerstats.strength)|| 0)
    setSpeed(speed - Number(hero.powerstats.speed) || 0)
    setDurability(durability - Number(hero.powerstats.durability) || 0)
    setPower(power - Number(hero.powerstats.power) || 0)
    setCombat(combat - Number(hero.powerstats.combat) || 0)
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

  const cerrarSesion = () => {
    setTokenId(window.localStorage.removeItem('id'))
  }

  return ( 
    <Router>
      <Navbar>
        <Link to='/home'>
          <Button className='btn btn-success p-2 mr-5 text-center'>Equipo</Button> 
        </Link>
        <Link to='/SearchHero'>
        <Button className='btn btn-success p-2 mr-5 text-center'>Buscar</Button>
        </Link>
        <Link to='/login'>
        <Button className='btn btn-success p-2 text-center' onClick={cerrarSesion}>Cerrar Sesion</Button>
        </Link>
      </Navbar>
      <Switch>
        <Route path='/SearchHero' exact>
        <SelectHero 
          constructorTeam={constructorTeam}
          team={team}
        />
        </Route>
        <Route path='/home' exact>
          <Team 
            team={team}
            powerStats={powerStats}
            setTeam={setTeam}
            deleteHero={deleteHero}
            />
        </Route>

      </Switch>
    </Router>
   );
}
 
export default Home;