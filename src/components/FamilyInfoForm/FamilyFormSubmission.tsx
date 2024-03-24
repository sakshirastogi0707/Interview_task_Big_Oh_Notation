"use client";
import React, {useState } from "react";
import FamilyFormUI from "./FamilyFormUI";
import useFormHook from "../../Hooks/useFormHook";
import { FamilyInfo } from "@/types/common/interfaces";
import { toast } from "react-toastify";
import { useSearchParams } from "next/navigation";
import {useRouter} from "next/navigation";

export default function FamilyFormSubmission() {
  const [familyInfo, setFamilyInfo] = useState([
    { id: 0, parentNames: "", dob: "", relation: "" },
  ]);
  const [nextId, setNextId] = useState(1);
  const { handleSubmit, errors, register } = useFormHook();
  const searchParams = useSearchParams();
  const userId = searchParams.get("userId");
  const router = useRouter();

  const addFamilyMember = () => {
    setFamilyInfo([
      ...familyInfo,
      { id: nextId, parentNames: "", dob: "", relation: "" },
    ]);
    setNextId(nextId + 1);
  };

  const removeFamilyMember = (id: number) => {
    if (familyInfo.length > 1) {
      setFamilyInfo(familyInfo.filter((member) => member.id !== id));
    }
  };

  const onSubmitHandler: any = (data: FamilyInfo) => {
    try {
      if (data && userId) {
        const usersString = localStorage.getItem("users");
        if (usersString) {
          const users = JSON.parse(usersString);
          const userIndex = users.findIndex((user: any) => user.id === userId);

          if (userIndex !== -1) {
            if (!users[userIndex].familyInfo) {
              users[userIndex].familyInfo = [data];
            } else {
              users[userIndex].familyInfo.push(data);
            }

            localStorage.setItem("users", JSON.stringify(users));
            toast.success("Successfully added user information!");
            router.push('/')
          } else {
            toast.error("User not found");
          }
        } else {
          toast.error("Users data is not found!");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FamilyFormUI
      onSubmit={handleSubmit(onSubmitHandler)}
      removeFamilyMember={removeFamilyMember}
      addFamilyMember={addFamilyMember}
      familyInfo={familyInfo}
      register={register}
      errors={errors}
    />
  );
}
