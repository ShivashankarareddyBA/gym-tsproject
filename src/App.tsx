import { useState } from 'react';
import Navbar from '@/navbar/Navbar';
import { SelectedPage } from '@/shared/types';


function App() {
  const [selectedPage, setSelectedPage] =useState<SelectedPage>(SelectedPage.Home);
  

  return (
  <>
    <div className="app bg-gray-20">

      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} page={selectedPage}/>
     </div>
    
      
    

    </> 
    )
}

export default App
