import './App.css';

import Profile from './Profile';
import FriendList from './FriendList';
import TransactionHistory from  './TransactionHistory';

import userData from '../data/userData';
import friends from '../data/friends';
import transactions from  '../data/transactions';

export default function App() {
  return (
    <>
      <h1 style={{ textTransform: 'uppercase', marginBottom:32 }}>Homework 01 React</h1>
      <h2>Profile</h2>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <h2>FriendList</h2>
      <FriendList friends={friends} />

      <h2>Transaction History</h2>
      <TransactionHistory items={transactions} />
    </>
  );
}
