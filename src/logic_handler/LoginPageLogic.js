import { useState, useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import { userState } from '../recoil/atoms/userAtoms';
import UserRequest from '../caller/api-requestor/UserRequest';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from "react-router-dom";

export const useAuthLogic = ({formData, isLogin, setIsLogin, error, setError}) => {
    const navigate = useNavigate();
    const setUserState = useSetRecoilState(userState);

    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        if (formData.password !== formData.confirm_password) {
          setError("Password and confirmation password mismatch!");
          return;
        }

        const {confirm_password, ...userData} = formData;

        try {
          const response = await UserRequest.addUser(userData);
          const data = response.data;
          const token = jwtDecode(data.token);
          setUserState({
            user: token,
            token: data.token,
          });
          console.log("Sigunp Clicked!");
          alert("Register Sucessfully! Please login");
          setError(null);
          setIsLogin(true);
        } catch (err) {
          if(err.status === 409) {
            setError("Username or Email is already registered.")
          }
        }
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
          const response = await UserRequest.login(formData.username, formData.password);            
          const {user, token} = response;
          const {password, ...userInfo} = user;
          localStorage.setItem('user', JSON.stringify(userInfo));
          setUserState({ userInfo, token });
          navigate("/");
        }catch(err) {
          if (err.status === 401 || err.status === 404) {
            setError('Wrong email or password.');
          } else {
            setError('Something went wrong. Please try again later.');
          }
          return;
        }
    };

    return {handleSignupSubmit, handleLoginSubmit}
};

