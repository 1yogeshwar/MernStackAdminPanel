import "./team.css"

import React from 'react';

const PlayerStats = ({ player }) => {
  return (<>
   
    <table>
      <tbody>
        <tr>
     <th></th>
          <th>Left arm Fast</th>
          <th>Left arm Medium</th>
          <th>Left arm Orthodox</th>
          <th>Right arm Fast</th>
          <th>Right arm Medium</th>
          <th>Legbreak</th>
          <th>Offbreak</th>
        </tr>
        <tr>
          <th>Runs</th>
          {player.runs.map((runs, index) => <td key={index}>{runs}</td>)}
        </tr>
        <tr>
          <th>Balls</th>
          {player.balls.map((balls, index) => <td key={index}>{balls}</td>)}
        </tr>
        <tr>
          <th>Out</th>
          {player.out.map((outs, index) => <td key={index}>{outs}</td>)}
        </tr>
      </tbody>
    </table>
    </>
  );
};

const Csk = () => {
  // Sample data for R Gaikwad and D Convey
  const players = [
    {
      name: "R Gaikwad",
      profileLink: "https://www.cricbuzz.com/profiles/11813/ruturaj-gaikwad",
      runs: [30, 85, 50, 45, 172, 81, 61],
      balls: [12, 71, 31, 42, 114, 61, 33],
      out: [0, 1, 1, 0, 4, 5, 1]
    },
    {
      name: "D Convey",
      profileLink: "#",
      runs: [30, 86, 39, 87, 144, 130, 87],
      balls: [14, 54, 29, 67, 120, 91, 61],
      out: [0, 1, 1, 4, 3, 3, 0]
    },
    {
      name: "A Rahane",
      profileLink: "#",
      runs: [0, 62, 28, 30, 57, 90, 26],
      balls: [ 0, 27, 25, 10, 27, 59,21],
      out: [0, 0, 0, 0, 1, 5 , 3]
    },
    {
      name: "S Dube",
      profileLink: "#",
      runs: [0, 43, 23, 29, 124, 86, 80],
      balls: [1, 23, 13, 22, 88, 49, 45],
      out: [0, 5, 1, 1, 1, 1, 1]
    },
    {
      name: "MS Dhoni",
      profileLink: "#",
      runs: [12, 40, 0, 4, 20, 15, 0],
      balls: [5, 19, 0, 5, 16, 8, 0],
      out: [0, 0, 0, 1, 3, 3, 0]
    },
    {
      name: "R Jadeja",
      profileLink: "#",
      runs: [0, 35, 0, 26, 78, 29, 9],
      balls: [0, 21, 0, 17, 51, 27, 8],
      out: [0, 2, 0, 2, 3, 0, 1]
    }
    
  ];

  return (
    <div>
     <h2 style={{textAlign:"center"}}><strong> Player Matchups</strong> </h2>
    {players.map((player, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h3 style={{ textAlign: 'left', marginLeft: '10%' }}><a href={player.profileLink}>{player.name}</a></h3>
          
          <PlayerStats player={player} />
          <br/>
        </div>
        
      ))}
    </div>
  );
};

export default Csk;

// export default Csk;

