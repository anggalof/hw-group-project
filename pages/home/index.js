import React, { useState, useEffect } from "react";
import monitoData from "../../data/monito.json";
import { Header } from "../../components/sections/Header";
import { OurPets } from "../../components/sections/OurPets";
import { OurProducts } from "../../components/sections/OurProducts";
import { OurNews } from "../../components/sections/OurNews";
import { SectionHeader } from "../../components/sections/SectionHeader";
import { PetSeller } from "../../components/sections/PetSeller";
import { Adoption } from "../../components/sections/Adoption";

const App = () => {
  const [headerSection, setHeaderSection] = useState({});
  const [ourPets, setOurPetSection] = useState({});
  const [ourProducts, setOurProductSection] = useState({});
  const [ourNews, setOurNewsSection] = useState({});
  const [adoption, setAdoption] = useState({});

  useEffect(() => {
    setHeaderSection(monitoData?.data?.header);
    setOurPetSection(monitoData?.data?.our_pets);
    setOurProductSection(monitoData?.data?.our_products);
    setOurNewsSection(monitoData?.data?.our_news);
    setAdoption(monitoData?.data?.adoption);
  }, []);

  return (
    <React.Fragment>
      <Header data={headerSection} />
      <OurPets data={ourPets} />
      <SectionHeader data={headerSection} />
      <OurProducts data={ourProducts} />
      <PetSeller />
      <Adoption data={adoption} />
      <OurNews data={ourNews} />
    </React.Fragment>
  );
};

export default App;
