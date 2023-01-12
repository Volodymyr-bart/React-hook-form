// import { useForm } from 'react-hook-form';
// import '../../index.css';
// export const FormBasic = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm;
//   const onSubmit = data => {
//     alert(JSON.stringify(data));
//   };

//   return (
//     <>
//       <div className="form-div">
//         <h1>React Basick Hook Form</h1>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <label>
//             First Name:
//             <input
//               {...register('firstName', {
//                 required: 'Pole obyzatelno',
//                 minLength: { value: 5, message: 'Min symbols 5' },
//               })}
//             />
//           </label>
//           <div style={{ height: 40 }}>
//             {errors?.firstName && (
//               <p>{errors?.firstName?.message || 'Error'}</p>
//             )}
//           </div>
//           <input type="submit" />
//         </form>
//       </div>
//     </>
//   );
// };
