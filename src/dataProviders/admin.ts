// import axios from "axios";
import { AxiosHeaderValue } from "axios";
import axiosInstance from "../config/axios";

export async function login(username: string | number | boolean, password: string | number | boolean) {
    const encodedUsername = encodeURIComponent(username);
    const encodedPassword = encodeURIComponent(password);
    const apiUrl = `login?username=${encodedUsername}&password=${encodedPassword}`;
  
    try {
      const response = await axiosInstance.get(
        apiUrl,
        {
          headers: {
            'X-Parse-Application-Id': import.meta.env.VITE_X_PARSE_APP_ID,
            'X-Parse-REST-API-Key': import.meta.env.VITE_X_PARSE_REST_API_KEY,
            'X-Parse-Revocable-Session': '1',
          },
        },
      );
  
      console.log(`${response.data.username} logged in`);
      /* 
      {
        "objectId":"AHRLeYvh0d",
        "username":"newUserName",
        "createdAt":"2018-11-08T13:50:56.843Z",
        "updatedAt":"2018-11-08T13:50:56.843Z",
        "sessionToken":"r:8d975a0f207fab1211752da3be0a3c81"
      }
      */
  
      return response.data; // 200 OK, A JSON document with the user's fields.
    }
    catch (error) {
      console.error('Error while logging user in: ', error);
      return null;
    }
  }
  
  export async function logout(currentSessionToken: AxiosHeaderValue | undefined) {
    const apiUrl = '/logout';
    try {
      const response = await axiosInstance.post(
        apiUrl,
        {},
        {
          headers: {
            'X-Parse-Application-Id': import.meta.env.VITE_X_PARSE_APP_ID,
            'X-Parse-REST-API-Key': import.meta.env.VITE_X_PARSE_REST_API_KEY,
            'X-Parse-Session-Token': currentSessionToken,
          },
        },
      );
  
      console.log('user logged out ', response);
  
      return response; // 200 OK, {}
    }
    catch (error) {
      console.error('Error while logging user out: ', error);
      return null;
    }
  }
