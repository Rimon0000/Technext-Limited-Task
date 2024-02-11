import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";

const AddUser = () => {

    //handle new user
    const handleAddNewUser = async(e) =>{
    e.preventDefault();

    const form = e.target;
    const image = form.image.value;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const street = form.street.value;
    const city = form.city.value;
    const state = form.state.value;
    const companyName = form.companyName.value;

    const newUser = {
      id: Math.floor(Math.random() * 1000),
      image,
      firstName,
      lastName,
      email,
      address: {
        address: street,
        city,
        state,
      },
      company: {
        name: companyName,
      },
    }

    //send data to the server 
    fetch('http://localhost:5000/https://dummyjson.com/users',{
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    .then(res => res.json())
    .then(data => {
        if(data && data.success){
            Swal.fire({
                title: 'Success!',
                text: 'User added successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    })
}

  return (
    <Container className="text-center my-5">
        <h1 className="text-3xl font-semibold mb-5"> Add a User</h1>
        <div className="w-full   flex justify-center items-center">
            <form onSubmit={handleAddNewUser} className="bg-slate-100 shadow-md rounded px-8 pt-6 w-full md:w-3/5 lg:w-2/5">
                <div className="mb-4">
                  <input className="shadow  border rounded w-full py-3 px-3 text-gray-700"
                    name="image"
                    type="text"
                    placeholder="Image URL"
                    required/>
                </div>
                <div className="flex gap-3">
                    <div className="mb-4">
                      <input className="shadow  border rounded w-full py-3 px-3 text-gray-700"
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        required/>
                    </div>
                    <div className="mb-4">
                      <input className="shadow  border rounded w-full py-3 px-3 text-gray-700"
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        required/>
                    </div>
                </div>
                <div className="mb-4">
                  <input className="shadow  border rounded w-full py-3 px-3 text-gray-700"
                    name="email"
                    type="email"
                    placeholder="Email"
                    required/>
                </div>
                <div className="mb-4">
                  <input className="shadow  border rounded w-full py-3 px-3 text-gray-700"
                    name="street"
                    type="text"
                    placeholder="Street Address"
                    required/>
                </div>
                <div className="flex gap-3">
                    <div className="mb-4">
                      <input className="shadow  border rounded w-full py-3 px-3 text-gray-700"
                        name="city"
                        type="text"
                        placeholder="City"
                        required/>
                    </div>
                    <div className="mb-4">
                      <input className="shadow  border rounded w-full py-3 px-3 text-gray-700"
                        name="state"
                        type="text"
                        placeholder="State"
                        required/>
                    </div>
                </div>
                <div className="mb-4">
                  <input className="shadow  border rounded w-full py-3 px-3 text-gray-700"
                    name="companyName"
                    type="text"
                    placeholder="Company Name"
                    required/>
                </div>
                <div className="pb-3">
                  <Button type="submit">Submit</Button>
                </div>
            </form>
        </div>
    </Container>
  );
};

export default AddUser;
