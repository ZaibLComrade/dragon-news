import { Link, useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export default function Register() {
	const { createUser, updateName } = useAuth();
	const navigate = useNavigate();
	const handleSubmit = e => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const name = form.get("name");
		const email = form.get("email");
		const password = form.get("password");
		createUser(email, password)
		.then(userCredential => {
			updateName(userCredential.user, name)
			navigate("/");
		})
		.catch(error => console.error(error));
	}

 return <div>
 <div className="min-h-screen hero bg-base-200">
  <div className="flex-col hero-content lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
      <form className="card-body" onSubmit={ handleSubmit }>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="email" className="input input-bordered" required />
        </div>        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="mt-6 form-control">
			<input className="btn btn-accent" type="submit" value="Sign Up"/>
        </div>
      </form>
		<div className="pb-4 mx-auto w-max">
			<p>Already signed up? <Link to="/login" className="text-blue-500 underline hover:text-black">Login</Link></p>
		</div>
    </div>
  </div>
</div>
</div>
}
