import { NextPage } from 'next';
import { useRouter } from 'next/router';
// import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useMutation from '../lib/useMutation';

interface CreateForm {
  name: string;
  email: string;
}

const CreateAccount: NextPage = () => {
  const [create, { loading, data, error }] = useMutation(
    '/api/users/createAccount'
  );
  // const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateForm>();
  const router = useRouter();
  const onValid = (validForm: CreateForm) => {
    if (loading) return;
    create(validForm);
  };
  console.log(loading, data, error);

  return (
    <div>
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit(onValid)}>
        <div>
          <label htmlFor='name'>Name: </label>
          <input
            type='text'
            {...register('name', { required: 'Write your name please.' })}
          />
          <span>{errors?.name?.message}</span>
        </div>
        <div>
          <label htmlFor='email'>Email: </label>
          <input
            type='email'
            {...register('email', { required: 'Write your email please.' })}
          />
          <span>{errors?.email?.message}</span>
        </div>
        <button>Create Account</button>
      </form>
    </div>
  );
};

export default CreateAccount;
