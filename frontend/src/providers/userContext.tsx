import { createContext,useContext } from "react";
import { useCurrentUser } from "@/hooks/useUser";
import axios, { AxiosResponse } from "axios";
export interface User{
  username: string;
  email: string;
  profilePhoto: string;
}
interface UserContextType {
  currentUser: User | null;
  isLoading: boolean;
  useGoogleAuth: (token: string)=> Promise<string>;
  generateOTP: () => string;
  sendOTP: (email: string) => Promise<AxiosResponse<any, any>>;
  changePassword: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string,name:string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
}
const UserContext = createContext<UserContextType>({
  currentUser: null,
  isLoading: true,
  useGoogleAuth: ()=>{ return Promise.resolve("")},
  generateOTP: () => "",
  sendOTP: async () => Promise.resolve({} as AxiosResponse<any, any>),
  changePassword: async () => Promise.resolve(),
  signUp: async () => Promise.resolve(),
  signIn: async () => Promise.resolve(),
});
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { currentUser, isLoading } = useCurrentUser();
  async function useGoogleAuth(token:string){
    try {
      console.log("Google Auth Token: ", token);

      return token;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to authenticate');
    }
  }
  function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }
  async function sendOTP(email: string) {
    const otp = generateOTP();
    localStorage.setItem("currentOtp", otp);
    const message=`Your OTP is ${otp}.Thank You For Registering With Pearl`
    const response = await axios.post(``, {
      email,
      otp: message,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response;
  }
  async function signUp(email: string, password: string,name:string) {
    const response = await axios.post(`http://localhost:8080/api/v1/auth/register`, {
        name,
        email,
        password
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if(!response){
        throw new Error('Failed to register')
      }
      const responseData = await response.data;
      responseData.token && localStorage.setItem('__Pearl_Token', responseData.token);
  }
  async function signIn(email: string, password: string) {
    const response = await axios.post(`http://localhost:8080/api/v1/auth/authenticate`, {
        email,
        password
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
       if(!response){
        throw new Error('Failed to authenticate')
       }
       const responseData=await response.data
       responseData.token && localStorage.setItem('__Pearl_Token',responseData.token)
  }
  async function changePassword(email: string, password: string) {
    // await graphqlClient.request(changePasswordMutation,changePasswordPayload);
    //       console.log("Password Changed");
    //       const token = await graphqlClient.request<TokendiffResponse>(
    //         verifyCredentialsTokenQuery,
    //         payload
    //       );
    //       window.localStorage.setItem(
    //         "__Pearl_Token",
    //         token.verifyCredentialsToken as string
    //       );
    //       }catch(err){
    //         return err;
    //       }
  }
  return (
    <UserContext.Provider value={{ currentUser, isLoading ,useGoogleAuth,generateOTP,sendOTP,changePassword,signUp,signIn}}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);