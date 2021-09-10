import React, { useEffect, useState, useMemo, useCallback} from 'react';
import List from './List';

const initialUsers = [
  {
    id: 1,
    name: 'Eze'
  },
  {
    id: 2,
    name: 'Marcos'
  }
];


function App() {
  const [users, setUsers] = useState(initialUsers);
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");

  const printUsers = useCallback(() => {
    console.log('changed user', users);
  },[users])

  useEffect(() => {
    // console.log('app');
  })

  useEffect(() => {
    printUsers();
  }, [users, printUsers])

  const handleAdd = () => {
    const newUser = {id: Date.now(), name: text};
    setUsers([...users, newUser]);
  }

  const handleDelete = useCallback((userId) => {
    setUsers(users.filter(user => user.id !== userId));
  }, [users])

  const handleSearch = () => {
    setSearch(text);
  }

  // propiedad computada
  const filteredUsers = useMemo(() => {
    return users?.filter(user => 
      user.name?.toLowerCase()
      .includes(search.toLowerCase())
    )
  } 
    , [search, users]);
  

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleAdd}>Add</button>
      <List handleDelete={handleDelete} users={filteredUsers} />
    </div>
  );
}

export default App;
