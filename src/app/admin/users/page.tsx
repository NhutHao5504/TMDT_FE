'use client';
import axios from "axios";
import useSWR from "swr";
interface User {
  _id: string;
  name: string;
  email: string;
}
export default function Users() {
  const options = {
    method: "GET",
    revalidateOnReconnect: true
  };
  
  const fetcher = (url: string) => axios.get(url).then(res => res.data);
  
  const { data, error, isLoading } = useSWR("../api/admin/users", fetcher, options);
  
  if (isLoading) return <p>Đang tải...</p>;
  if (error) return <p className="text-red-600">Lỗi khi tải dữ liệu</p>;
  if (data) console.log(data);

  return (
    <div>
      {data.users.map((user: User, key: any) => (
        <div key={user._id}>
          <p>{user.name} - {user.email}</p>
        </div>
      ))}
      <h1>Users Management</h1>
      <p>This is the users management page of the admin panel.</p>
    </div>
  );
}