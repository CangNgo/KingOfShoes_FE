import React, { useState } from "react";
import axios from "axios";
import TextField from "../../components/commons/TextField";
import Button from "../../components/commons/Button";
import Image from "../../components/commons/Image";

interface Logo {
  name: string;
  src: string;
}

function SignIn() {
  const api = "/api/login";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //check data 
  // const [isEmail, setIsEmail] 

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

  const handleUsename = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  //gửi api
  const handleLogin = async () => {



    try {
      const response = await axios.post(api, {
        username,
        email,
        password,
        confirmPassword,
      });
      if (response.data.token) {
        localStorage.setItem("auth_token", response.data.token);
        console.log("Đăng nhập thành công");
      }
    } catch (error: unknown) {
      alert("Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col w-screen justify-center items-center">
      <div className="back fixed top-0 right-0">
        <Button className="p-3 text-xl text-black bg-transparent hover:bg-yellow-100 rounded-md" to="/dang-nhap">
          Quay lại đăng nhập
        </Button>
      </div>
      <div className="w-80">
        <div className="">
          <img src="" alt="" />
        </div>
        <div className="font-bold text-4xl text-left p-2">Đăng ký</div>
        <TextField name="email" id="email" onChange={handleEmail} type="email" label="Email" />
        <TextField name="password" id="password" onChange={handlePassword} type="password" label="Password" />
        <TextField name="confirmPassword" id="confirmPassword"
          onChange={handleConfirmPassword}
          type="password"
          label="Confirm password"
        />
        <TextField name="birthDate" id="birthDate" onChange={handleUsename} type="date" label="Ngày sinh" className="pr-2" />
        <div className="p-2">
          <Button onClick={handleLogin} outline large primary>
            Đăng ký
          </Button>
        </div>
        <div className="flex gap-2 p-2">
          {logo.map((item, index) => (
            <Button
              key={index}
              className="flex bg-transparent"
              lefticon={<Image sizes="small" src={item.src} alt={item.name} />}
              small={true}
              flex={true}
            >
              {item.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
export default SignIn;
