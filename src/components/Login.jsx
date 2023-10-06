import { Link, useNavigate } from "react-router-dom";
import useAuth from "./useAuth";


export default function Login() {
	const { signInUser } = useAuth();
	const navigate = useNavigate();
	const handleSubmit = e => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const email = form.get("email");
		const password = form.get("password");
		signInUser(email, password)
			.then(() => navigate("/"))
		.catch(err => console.error(err));
	}

 return <div>
 <div className="min-h-screen hero bg-base-200">
  <div className="flex-col hero-content lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
      <form className="card-body" onSubmit={ handleSubmit }>
        <div className="form-control">
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
			<input className="btn btn-accent" type="submit" value="Login"/>
        </div>
      </form>
		<div className="pb-4 mx-auto w-max">
			<p>Not yet registered? <Link className="text-blue-500 underline hover:text-black" to="/register">Sign Up</Link></p>
		</div>
    </div>
  </div>
</div>
</div>
}
