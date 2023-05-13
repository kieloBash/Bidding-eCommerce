"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";

const schema = yup
  .object({
    email: yup.string().required(),
    username: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

import React from "react";

const Signup = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const formSubmit = async (data) => {
    console.log(data);

    try {
      const response = await fetch(`/api/users/signup`, {
        method: "POST",
        body: JSON.stringify({
          data,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="w-full">
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="w-full p-4 flex flex-col gap-4"
      >
        <input
          type="email"
          name="email"
          className="w-2/3 border-[5px] border-black bg-transparent px-2 py-1 text-2xl"
          placeholder="email..."
          {...register("email")}
        />
        <p className="">{errors.email?.message}</p>
        <input
          type="text"
          name="username"
          className="w-2/3 border-[5px] border-black bg-transparent px-2 py-1 text-2xl"
          placeholder="username..."
          {...register("username")}
        />
        <p className="">{errors.username?.message}</p>
        <input
          type="password"
          name="password"
          className="w-2/3 border-[5px] border-black bg-transparent px-2 py-1 text-2xl"
          placeholder="password..."
          {...register("password")}
        />
        <p className="">{errors.password?.message}</p>
        <button
          className="px-2 py-1 bg-transparent border-[5px] border-black text-3xl"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </section>
  );
};

export default Signup;
