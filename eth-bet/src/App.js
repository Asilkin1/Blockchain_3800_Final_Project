import { Container, Row, Col, ModalFooter } from 'react-bootstrap';
import { useState, useEffect } from 'react';
// ------------------------------------------------------------------App components imports
import Navigation from './components/navigation/navigation';
import ParticipantAnswerForm from './components/participantAnswerForm/participantAnswerForm';
import TournamenList from './components/tournament_list/tournamenlist';
import WinnersList from './components/winnerslist/winnerslist';
import TournamentCreateForm from './components/tournamentCreateForm/tournamentcreateform';
// ----------------------------------------------------------------------------------------
import {web3, betContract,betAddress} from './config'; // Backend imports

import './App.css';

function App() {


/** Player can participate in tournament
 * 
 * @param {answer} The answer recorded from the form 
 * @param {amount} How much player send to the contract 
 */ 
function participateInTournament(answer, amount){
  web3.eth.getAccounts(function(error, result) {
    web3.eth.sendTransaction(
        {
          from: '0xB7060EdA50dF990C964fcC9A31078f8Cf624e277', // This have to be a string.Not an address from solidity.
          to:betAddress,                                      // To contract address
          value:  amount,                                     // Specific amount
          data: answer                                        // Answer
            }, function(err, transactionHash) {
      if (!err)
        console.log(transactionHash + " success"); 
        console.log(betContract.methods);
    });
});

}
  
  // Connecting to backend
  useEffect(() =>{

    // Make sure it yells in case of an error
    const init = async() =>{
      // Try connect to web3
      try{
        console.log(web3.eth.getAccounts());
        
      } catch(error){
        alert(`Failed to load web3, accounts, or contract.Check console for details`);
        console.log(error);
      }

      // Call backend
      init();
    }
  },[])

  // Dummy data. This should come from the contract
  // This data would be passed down to the child components
  const tournaments = [{ key: 1, title: 'Call of Duty 4', type: 'WTIA', condition: 'MVP', creator: '0x333', rating: '4', players: '4', bank: '1' },
  { key: 2, title: 'Plants vs Zombies', type: 'WTIA', condition: 'MVP', creator: '0x444', rating: '5', players: '2', bank: '1' },
  { key:  3, title: 'Rocket League', type: 'WTIA', condition: 'MVP', creator: '0x333', rating: '4', players: '4', bank: '1' }];

  // Dummy data for winners. Should be received from contract
  const winners = [{ key: 'sdfsdf', address: '0x00a6d02Aa0dF9EBE9FBE62F683eea474de0D3CFa', bank: '$100' },
  { key: 'unique1', address: '0x00a6d02Aa0dF9EBE9FBE62F683eea474de0D334r', bank: '$16' },
  { key: 'unique2', address: '0x00a6d02Aa0dF9EBE9FBE62F683eea474de0D340r', bank: '$88' },
  { key: 'unique3', address: '0x00a6d02Aa0dF9EBE9FBE62F683eea474de0D3CFa', bank: '$12' },
  { key: 'unique4', address: '0x00a6d02Aa0dF9EBE9FBE62F683eea474de0D3CFa', bank: '$10' }];

  return (
    <div className="App">

      {/* Top level content */}
      <header className="App-header">
        <Navigation />
      </header>

      {/* Body of the document */}
      <Container fluid>
        <Row className="justify-content-md-center">

          {/* Tournament participation form */}
          <Col md="auto">
            {/* Call backend with amount and answer */}
            <ParticipantAnswerForm participateInTournament={participateInTournament} />
          </Col>

          {/* List of tournaments */}
          <Col  md="auto">
            <h4>Tournaments</h4>
            {/* getCreatedTournamentsFromContract() */}
            <TournamenList tournaments={tournaments} />
          </Col>

          <aside>
          <Col md="auto">
            <h4>Results</h4>
            {/* Pass winners data down to the child components */}
            <WinnersList winners={winners} />
          </Col>
          </aside>
          
        </Row>
        {/* Footer */}
        <ModalFooter>
          <Col>ETH-BET 2020 @All Rights Reserved </Col>
          </ModalFooter>
      </Container>

      
  </div>
  );
}

export default App;
