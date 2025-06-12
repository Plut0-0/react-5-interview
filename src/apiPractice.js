
export default function MyApiApp()
{
  const [users,setUsers] = useState([]);
  useEffect(()=>
  {
    fetch("https://jsonplaceholder.typicode.com/users")
  .then(res =>{
    if(!res.ok)
    {
      throw new Error("response ws not ok");
    }
    else
    return res.json();
  }).then(data =>{
    const mappedUsers = data.map((user)=>({"id":user.id,"name":user.name,"username":user.username}))
    setUsers(mappedUsers)
}).catch(error => {console.error("There was an error fetching the API:", error);});

  },[]);
  return(
    <div className="apiApp">
      <div className="Output">
      <OutputData users ={users} />
      </div>
    </div>
  )
}



function OutputData({users})
{

  return(
      <div className="dataContainer">    
    {
      users.map(user => (
        <div className="names" key={user.id}>
        <p className="userName" >{user.username} <span className="name" >{user.name}</span></p>
        
        </div>
    ))
    }
    </div>

  )
}