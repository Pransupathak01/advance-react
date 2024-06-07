import { useFetch } from "../customHook/CustomHooks";

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

const Home: React.FC = () => {
  const data = useFetch("https://jsonplaceholder.typicode.com/todos") as Todo[] | null;

  return (
    <>
      {data &&
        data.slice(0, 10).map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};
export default Home;