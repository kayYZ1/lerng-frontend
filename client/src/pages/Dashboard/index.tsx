import { useGetMeQuery } from "features/auth/auth.api.slice";

export default function Dashboard() {
  const { data, isLoading } = useGetMeQuery(undefined);

  if (isLoading) console.log("...");
  else console.log(data)  

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}
