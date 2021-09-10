import React, { useEffect, useState, useMemo} from 'react';
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

  useEffect(() => {
    console.log('app');
  })

  const handleAdd = () => {
    const newUser = {id: Date.now(), name: text};
    setUsers([...users, newUser]);
  }

  const handleSearch = () => {
    setSearch(text);
  }

  // propiedad computada
  const filteredUsers = useMemo(() => 
    users.filter(user => 
      user.name
      .toLowerCase()
      .includes(search.toLowerCase())
    ), [search, users]
  );
  

  return (
    <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <button onClick={handleAdd}>Add</button>
      <List users={filteredUsers} />
    </div>
  );
}

export default App;
