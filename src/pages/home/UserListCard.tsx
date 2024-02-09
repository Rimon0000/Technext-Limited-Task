import { Button } from "@/components/ui/button";
import { MailOpen, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const UserListCard = ({ user }) => {
  const { image, firstName, lastName, email, address, company } = user;

  return (
    <div className="bg-slate-50 shadow-md rounded-lg  border-2 text-center grid place-content-center p-5">
      <div className="grid place-content-center mb-5">
        <img
          className="p-1 max-h-[120px] max-w-[120px] rounded-full border-2 image-border-color stroke-2"
          src={image}
          alt=""
        />
      </div>
      <Link to="">
        <Button className="font-bold text-2xl bg-slate-50" variant="outline">
          {firstName} {lastName}
        </Button>
      </Link>
      <p className="font-semibold text-center pt-1 text-color">
        {company?.name}
      </p>
      <Button className="my-4 text-color text-white flex place-content-center gap-3">
        <MailOpen className="w-5 h-5"></MailOpen>
        {email}
      </Button>
      <div className="flex mx-auto gap-2 font-semibold">
        <MapPin></MapPin> 
        <div>
          <p className="text-color">{address.address}</p>
          <p className="text-color">
            {address.city} {address.state}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserListCard;
