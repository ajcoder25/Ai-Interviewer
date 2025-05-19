"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { supabase } from "@/services/supabaseClient";

const Login = () => {
  // used to signInWithGoogle
  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) {
      console.error("Error:", error.message);
    }
  };
  return (
    <div className="flex  flex-col items-center justify-center h-screen ">
      <div className="shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] p-16">
        <div className="flex items-center flex-col ">
          <Image src={"/logo.png"} alt="logo" width={200} height={100} />
        </div>
        <div className="flex items-center flex-col">
          <h2 className="text-2xl font-bold text-center ">
            Welcome to Ai-Interview
          </h2>
          <p className="text-gray-500 text-center">Login with Google account</p>
          <Button
            className="mt-4 w-full rounded-2xl"
            onClick={signInWithGoogle}
          >
            Login with Google
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
