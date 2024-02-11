import { TUser } from "@/components/types/type";
import { Button } from "@/components/ui/button";
import { MailOpen, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

//for avatar/image
const imageAnimation = {
  initial: { scale: 0 },
  animate: {
    scale: 1,
    transition: {
      duration: 2,
    },
  },
};

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.25,
      delayChildren: 1,
    },
  },
};

const introChildren = {
  hidden: { opacity: 0, y: -300 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.3,
      type: "spring",
      bounce: 0.6,
    },
  },
};

const UserListCard = ({ user }: { user: TUser }) => {
  const { id, image, firstName, lastName, email, address, company } = user;

  return (
    <div className="bg-slate-50 shadow-md rounded-lg  border-2 text-center grid place-content-center p-5">
      <motion.div
          className="grid place-content-center mb-5"
          variants={imageAnimation}
          initial="initial"
          animate="animate"
      >
        <img
          className="p-1 max-h-[120px] max-w-[120px] rounded-full border-2 image-border-color stroke-2"
          src={image}
          alt=""
        />
      </motion.div>
      <motion.div className="grid place-content-center" variants={intro} initial="hidden" animate="visible">
          <Link to={`/${id}`}>
            <Button className="font-bold text-2xl bg-slate-50" variant="outline">
              {firstName} {lastName}
            </Button>
          </Link>
          <p className=" text-center pt-1 text-color">{company?.name}</p>
          <Button className="my-5 text-color text-white flex place-content-center gap-3 bg-slate-600">
            <MailOpen className="w-5 h-5"></MailOpen>
            {email}
          </Button>
          <motion.div className="flex mx-auto gap-2 font-semibold" variants={introChildren}>
            <MapPin></MapPin>
            <div>
              <p className="text-color">{address.address}</p>
              <p className="text-color">
                {address.city} {address.state}
              </p>
            </div>
          </motion.div>
      </motion.div>
    </div>
  );
};

export default UserListCard;
