import { useForm } from 'react-hook-form';

export const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm;
  const onSubmit = data => {
    alert(JSON.stringify(data));
  };

  return (
    <>
      <div className="form-div">
        <h1>React Basick Hook Form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            First Name:
            <input
              {...register('firstName', {
                required: 'Pole obyzatelno',
                minLength: { value: 5, message: 'Min symbols 5' },
              })}
            />
          </label>
          {errors.firstName && <span>this feld is required</span>}
          {/* <div style={{ height: 40 }}>
            {errors?.firstName && (
              <p>{errors?.firstName?.message || 'Error'}</p>
            )}
          </div> */}
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

// /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
//   <form onSubmit={handleSubmit(onSubmit)}>
//     {/* register your input into the hook by invoking the "register" function */}
//     <input defaultValue="test" {...register('example')} />

//     {/* include validation with required or other standard HTML validation rules */}
//     <input {...register('exampleRequired', { required: true })} />
//     {/* errors will return when field validation fails  */}
//     {errors.exampleRequired && <span>This field is required</span>}

//     <input type="submit" />
//   </form>
