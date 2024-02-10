// type for the user object
export type TUser = {
    id: number;
    firstName: string;
    email: string;
    company: {
      name: string;
    };
  }
  
  // type for sorting options
 export type TSortOptions = {
    firstName: string;
    email: string;
    companyName: string;
  }