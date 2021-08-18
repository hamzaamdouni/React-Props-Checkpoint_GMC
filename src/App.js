
import './App.css';
import CarousselC from './Components/Caroussel/Caroussel';
import NavbarC from './Components/Navbar/Navbar';
import Petslist from './Components/Pets list/Petslist';

function App() {
  const MyPets = [
    {srcpic:"/pic1.jpg",
    nameP:"Yüka",
    typeP:"DOG",
    price:"250 DT",
},
    {srcpic:"/pic2.jpg",
    nameP:"Nougat",
    typeP:"CAT",
    price:"150 DT",
},
    {srcpic:"/pic3.jpg",
    nameP:"Scuby",
    typeP:"Perroquet",
    price:"750 DT",
}
]
  return (
    <div className="App">
      <NavbarC/>
      <CarousselC/>
      <Petslist ListPets={MyPets}/>
    </div>
  );
}

export default App;
