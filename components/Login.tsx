import Image from "next/image";
import React from "react";
import { signIn } from "next-auth/react";

function Login() {
  return (
    <div className="mt-60 grid place-items-center">
      <Image
        src={require("../access/gg.png")}
        width={200}
        height={200}
        objectFit="contain"
      />
      <h1
        onClick={() => {
          signIn();
        }}
        className=" mt-5 cursor-pointer rounded-full border-2 bg-gray-50 p-5  px-10 text-center "
      >
        Login with Google
      </h1>
    </div>
  );
}

export default Login;
