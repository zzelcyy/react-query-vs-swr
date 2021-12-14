import useSWR from "swr";
import axios from "axios";

const fetcher = url => axios.get(url).then(res => res.data);
const url = "https://61b88c9d64e4a10017d19053.mockapi.io/user";

const App = () => (
  <div>
    <SWRProfile />
  </div>
);

const SWRProfile = () => {
  const {data, error} = useSWR(url, fetcher);

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return <Profile library="SWR" data={data} />
}

const Profile = ({library, data}) => (
  <div>
    <h1>Users from {library}</h1>
    {data.map(user => <p>{user.level} developer <strong>{user.name}</strong></p>)}
  </div>
)

export default App;
