import Swal from "sweetalert2";



const Footer = () => {

     
  const onSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);

    formData.append("access_key", "6626a723-9dad-41ba-8220-fd9dedfeea00");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
        Swal.fire({
            title: 'Send Successfully!',
            text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
      event.target.reset();
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
      setResult(data.message);
    }
  };



    return (
        <div>

<footer className="footer  bg-white text-base-content p-10">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <form onSubmit={onSubmit} >
    <div className=" flex items-center gap-2">
     
     <img className=" h-[100px] " src="https://cdn-icons-gif.flaticon.com/17904/17904235.gif" alt="" />
     <a className=" text-2xl font-serif ">TheTastyTimes</a>
 
     </div>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Send In Shop</span>
      </label>
      <div className="join">

        <input
          type="text"
          placeholder="SendMessage"
          name="message"
          required
          className="input input-bordered join-item" />
        {/* <button className="btn  bg-[#2fac1f] font-serif text-white join-item"></button> */}
        <input className="btn  bg-[#2fac1f] font-serif text-white join-item" type="submit" value="SendMessage" />
      </div>
    </fieldset>
  </form>
</footer>
            
        </div>
    );
};

export default Footer;