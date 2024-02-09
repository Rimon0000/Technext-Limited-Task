import Container from "@/components/Container";
import { useEffect, useState } from "react";
import UserListCard from "./UserListCard";

// type TUser = {
//     id: number;
//     name: string;
//   }

const UserList = () =>{
    const [users, setUsers] = useState([])

    useEffect(() =>{
        fetch("https://dummyjson.com/users")
        .then(res => res.json())
        .then(data => setUsers(data.users))
    }, [])

    console.log(users);


    return (
        <Container className="my-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    users.map((user, index) => (<UserListCard key={index}  user={user}></UserListCard>))
                }

            </div>
        </Container>
    )
}

export default UserList;