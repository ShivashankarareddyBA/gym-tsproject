import logo from "@/assets/Logo.png";
//type Props = {};

const Navbar = () => {
  const flexBetween = "flex item-center justifybetween";
  return (
    <nav>
      <div className={`${flexBetween} fixed  top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* left */}
            <img alt="log" src={logo} />
            {/* right */}
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm mx-8 mr-80`}> 
                <p>Home</p>
                <p>Benifits</p>
                <p>Our Class</p>
                <p>Contact Us</p>
              </div>
              <div className={`${flexBetween} gap-8 `} >
               <p>SignIn</p>
               <button>Become a Member</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
