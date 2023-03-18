import React from "react"
import Title from "./components/Title"
import Paragraph from "./components/Paragraph";
import Features from "./components/Features";
import Button from "./components/Button";
import Footer from "./components/Footer";

import { faker } from '@faker-js/faker/locale/az';


const companyName = faker.company.bs().toUpperCase();

const firstParagraph = faker.lorem.paragraph(5);
const secondPargraph = faker.lorem.paragraph(3);

const features = [
  {
    title: faker.company.catchPhraseAdjective(),
    img: faker.image.abstract(1000, 1000),
    info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."

  },
  {
    title: faker.company.catchPhraseAdjective(),
    img: faker.image.abstract(1000, 1000),
    info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."


  },
  {
    title: faker.company.catchPhraseAdjective(),
    img: faker.image.abstract(1000, 1000),
    info: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."

  }  
]

function App() {
  return (
    <div>
      <Title title={companyName}/>
      <Paragraph text={firstParagraph}/>
      <Features featureData={features}/>
      <Paragraph text={secondPargraph}/>
      <Button />
      <Footer />
    </div>
  );
}

export default App;
