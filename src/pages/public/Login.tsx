import React, { useState } from "react";

import axios from "axios";
import TextField from "../../components/commons/TextField";
import Button from "../../components/commons/Button";
import Image from "../../components/commons/Image";
import { Link, useNavigate } from "react-router-dom";
import { toast, Toaster } from "sonner";

interface Logo {
  name: string;
  src: string;
}

// interface LoginProps {
//   username?: string;
//   currency?: string;
//   type?: string;
// }

function Login() {
  const api = "http://localhost:8088/skeleton/public/v1/user/login";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  let checkEmail = false
  let checkPassowrd = false
  //error 
  const [errorEmail, setErrorEmail] = useState("")
  const [errorPassword, setErrorPassword] = useState("")


  const navigate = useNavigate()

  const logo: Logo[] = [
    {
      name: "Facebook",
      src: "https://tse2.mm.bing.net/th?id=OIP.cOz92GK9w_2_VxUIWBL0ngHaHa&pid=Api&P=0&h=180",
    },
    {
      name: "Google",
      src: "https://tse4.mm.bing.net/th?id=OIP.D6P-BO32wCApcPIIjt6p5wHaHa&pid=Api&P=0&h=180",
    },
  ];



    //check
    const handleCheckEmail = (email: string) => {
      const emailPattern: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
      if (email === "") {
        setErrorEmail("Vui lòng nhập email")
        return
      }
  
      if (!emailPattern.test(email)) {
        setErrorEmail("Email không đúng định dạng")
        return;
      }
      setErrorEmail("")
      checkEmail = true
    }
  
    const handleCheckPassword = (password: string) => {
      if (password === "") {
        setErrorPassword("Password không được để trống")
        return
      }
  
      if (password.length < 8) {
        setErrorPassword("Mật khẩu không được bé hơn 8 ")
        return
      }
  
      setErrorPassword("")
      checkPassowrd = true
    }

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    
    handleCheckEmail(email);
    handleCheckPassword(password);
    //kiem tra du lieu
  

    try {
      if(!checkEmail || !checkPassowrd) return
      const response = await axios.post(api, { email, password });
      
      if (response.data.data.accessToken) {
        localStorage.setItem("auth_token", response.data.data.accessToken);
        localStorage.setItem("auth_role", response.data.data.role);
        console.log("Đăng nhập thành công");

        if(response.data.data.role ==="ADMIN"){
          navigate("/admin")
          window.location.href
        }else if(response.data.data.role === "SUPPER_ADMIN"){
          navigate("/")
          window.location.href
          toast.error("Không thể đăng nhập")
        }
      } else {
      }
      toast.success("Đăng nhập thành công")
    } catch (error: unknown) {
        toast.error("Tài khoản không tồn tại")
    }
  };

  return (
    <div className="flex h-screen flex-col w-screen justify-center items-center">
        <div className="back fixed top-0 right-0">
          <Button className="p-3 text-xl text-black" to="/">
            X
          </Button>
        </div>
        <div className="w-80">
          <div className="">
            <img src="" alt="" />
          </div>
          <div className="font-bold text-4xl text-left p-2">Đăng nhập</div>
          <TextField
            tabIndex={1}
            type="email"
            onChange={handleEmail}
            label="Email"
            placeholder ="example@gmail.com"
            error={errorEmail}
          />
          <TextField
            tabIndex={2}
            type="password"
            onChange={handlePassword}
            label="Password"
            placeholder="Password"
            error={errorPassword}
          />
          <div className="p-2">
            <Button outline large primary className=" bg-transparent hover:bg-yellow-100 active:border-indigo-400" onClick={handleLogin}>
              Đăng nhập
            </Button>
          </div>
          <div className="pr-2 flex flex-row-reverse" >
            <Link to="/dang-ky" className="text-black hover:text-yellow-400">Đăng ký</Link>
          </div>
          {/* <div className="flex gap-2 p-2 ">
            {logo.map((item, index) => (
              <Button
                key={index}
                className="flex bg-transparent hover:bg-transparent hover:border-double hover:scale-110"
                lefticon={<Image sizes="small" src={item.src} alt={item.name} />}
                children={item.name}
                outline
                flex={true}
              ></Button>
            ))}
          </div> */}
          <Toaster position="top-right"/>
        </div>
    </div>
  );
}

export default Login;
