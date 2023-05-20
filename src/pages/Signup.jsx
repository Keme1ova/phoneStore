import "./../styles/Signup.scss";
import signUp from "./../assets/images/signupPhoto.jpg";

const Signup = () => {
  return (
    <div class="section d-flex justify-content-center">
      <section class="form d-flex flex-column mx-5">
        <h1 className="d-flex justify-content-center align-items-center">
          SING UP
        </h1>

        <form action="" className="d-flex flex-column">
          <input className="mt-5 mb-2" type="text" placeholder="Username" />
          <input className="mb-2" type="text" placeholder="Password" />
          <input className="mb-2" type="text" placeholder="Repeat passsword" />
          <input className="mb-5" type="text" placeholder="Email" />
          <input className="btn" type="submit" placeholder="Send" />
        </form>
      </section>
    </div>
  );
};

export default Signup;
