import React, { useEffect, useState } from "react";
import Container from "@/components/Container";
import UserListCard from "./UserListCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TSortOptions, TUser } from "@/components/types/type";


const UserList = () => {
    const [users, setUsers] = useState<TUser[]>([]);
    const [sortBy, setSortBy] = useState<keyof TSortOptions | null>(null);
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch("http://localhost:5000/https://dummyjson.com/users")
            .then(res => res.json())
            .then(data => {
                setUsers(data.user);
            });
    }, []);

    //handle search
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    //for search
    const filteredUsers = users?.filter(user =>
        user.firstName.toLowerCase().includes(search.toLowerCase()) ||
        user.lastName.toLowerCase().includes(search.toLowerCase())
    );


    //handle onchange for sorting
    const handleSortByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSortBy(e.target.value as keyof TSortOptions);
  };

  //sorting
    const sortedUsers = [...filteredUsers].sort((a, b) => {
        if (sortBy === 'firstName') {
            return a.firstName.localeCompare(b.firstName);
        } 
        else if (sortBy === 'email') {
            return a.email.localeCompare(b.email);
        } 
        else if (sortBy === 'companyName') {
            return a.company.name.localeCompare(b.company.name);
        } 
        else {
            return 0;
        }
    });

    return (
        <Container className="my-10">
            <div className="my-10 flex gap-28 place-content-center">
                <div className="flex w-full max-w-sm items-center space-x-2">
                    <Input onChange={handleSearch} value={search} type="text" placeholder="Search" />
                    <Button type="submit">Search</Button>
                </div>
                <div>
                  <select value={sortBy || ''} onChange={handleSortByChange} className="border-2 py-2 px-4 rounded-md">
                    <option value="" className='bg-slate-300 px-8 py-2'>Sort By</option>
                    <option value="firstName">Name</option>
                    <option  value="email">Email</option>
                    <option  value="companyName">Company Name</option>
                  </select>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    sortedUsers.map((user, index) => (<UserListCard key={index} user={user}></UserListCard>))
                }
            </div>
        </Container>
    )
}

export default UserList;
