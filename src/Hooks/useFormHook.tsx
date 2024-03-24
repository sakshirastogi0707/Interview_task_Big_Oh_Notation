import { useForm } from "react-hook-form";


const useFormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return { register, handleSubmit, errors };
};

export default useFormHook;
