/* eslint-disable no-unsafe-optional-chaining */
import Container from "@/components/Container";
import { TUser } from "@/components/types/type";
import { Button } from "@/components/ui/button";
import { Link, useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData() as TUser;
  const {
    image,
    firstName,
    lastName,
    email,
    address,
    company,
    phone,
    university,
    age,
    gender,
    birthDate,
    bloodGroup,
    height,
    weight,
    domain,
  } = user?.user;

  return (
    <Container className="my-12 grid place-content-center lg:px-24">
      <div className=" bg-slate-50 shadow-md rounded-lg  border-2 grid grid-cols-1 md:grid-cools-2 lg:grid-cols-2 p-5">
        <div>
          <img className="max-h-[300px] max-w-[300px]" src={image} alt="" />
        </div>
        <div>
          <h1 className="font-bold text-3xl text-color">
            {firstName} {lastName}
          </h1>
          <p className=" my-1 text-color">{company?.title}</p>
          <Button className="my-3">{domain}</Button>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-4 bg-slate-100 p-1 rounded-lg">
            <div>
              <p className="font-semibold text-color pb-1">
                Age <span className="px-2">/</span>
                <span className="text-base font-normal text-slate-600">
                  {age}
                </span>
              </p>
              <p className="font-semibold text-color pb-1">
                Gender <span className="px-2">/</span>
                <span className="text-base font-normal text-slate-600">
                  {gender}
                </span>
              </p>
              <p className="font-semibold text-color pb-1">
                Blood group <span className="px-2">/</span>
                <span className="text-base font-normal text-slate-600">
                  {bloodGroup}
                </span>
              </p>
              <p className="font-semibold text-color pb-1">
                Birth Date <span className="px-2">/</span>
                <span className="text-base font-normal text-slate-600">
                  {birthDate}
                </span>
              </p>
              <p className="font-semibold text-color pb-1">
                Height <span className="px-2">/</span>
                <span className="text-base font-normal text-slate-600">
                  {height}
                </span>
              </p>
              <p className="font-semibold text-color pb-1">
                Weight <span className="px-2">/</span>
                <span className="text-base font-normal text-slate-600">
                  {weight}
                </span>
              </p>
            </div>
            <div>
              <p className="font-semibold text-color pb-1">
                Email <span className="px-2">/</span>
                <span className="text-base font-normal text-slate-600">
                  {email}
                </span>
              </p>
              <p className="font-semibold text-color pb-1">
                Phone <span className="px-2">/</span>
                <span className="text-base font-normal text-slate-600">
                  {phone}
                </span>
              </p>
              <p className="font-semibold text-color pb-1">
                Address <span className="px-2">/</span>
                <span className="text-base font-normal text-slate-600">
                  {address?.city} {address.state}
                </span>
              </p>
              <p className="font-semibold text-color pb-1">
                Company <span className="px-2">/</span>
                <span className="text-base font-normal text-slate-600">
                  {company?.name}
                </span>
              </p>
              <p className="font-semibold text-color pb-1">
                Department <span className="px-2">/</span>
                <span className="text-base font-normal text-slate-600">
                  {company?.department}
                </span>
              </p>
              <p className="font-semibold text-color pb-1">
                University <span className="px-2">/</span>
                <span className="text-base font-normal text-slate-600">
                  {university}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link to="/" className="my-5 text-center">
        <Button>Back to Home</Button>
      </Link>
    </Container>
  );
};

export default UserDetails;
