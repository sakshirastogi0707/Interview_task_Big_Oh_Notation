"use client";
import React from "react";
import UserFormUI from "./UserFormUI";
import { useRouter } from "next/navigation";
import useFormHook from "../../Hooks/useFormHook";
import { FormData } from "@/types/common/interfaces";
import { v4 } from "uuid";
const UserFormSubmission = () => {
  const { handleSubmit, register, errors } = useFormHook();

  const router = useRouter();

  const onSubmitHandler: any = (data: FormData) => {
    try {
      if (data) {
        const userId = v4();
        const usersString = localStorage.getItem("users");
        let users = [];
        if (usersString) {
          users = JSON.parse(usersString);
        }
        users.push({ ...data, id: userId });
        localStorage.setItem("users", JSON.stringify(users));
        router.push(`/family-info?userId=${userId}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <UserFormUI
      register={register}
      onSubmit={handleSubmit(onSubmitHandler)}
      errors={errors}
    />
  );
};

export default UserFormSubmission;
