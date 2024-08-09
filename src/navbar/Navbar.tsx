import logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
type Props = {
  page:SelectedPage;
  selectedPage: SelectedPage;
  setSelectedPage: (value:SelectedPage)=>void};


const Navbar = ({selectedPage,setSelectedPage,}:Props) => {
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
                <Link page = "Home" 
                selectedPage={selectedPage}
               setSelectedPage={setSelectedPage}
               />
                <Link page= "Benifits"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link page="Our Classes"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
                <Link  page="Contact Us"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                />
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
