import React, { useState, useEffect } from "react";
import ShowProject from "../ShowProject";
import GardenGrid from "../GardenGrid";
import GardenHeader from "../GardenHeader";
import DrawGardenModal from "../DrawGardenModal";
import Draggable from "../Draggable";
import PlantModal from "../PlantModal";
import { Container, Row, Col } from "react-bootstrap";
import { uniqueId } from "lodash";
import db from "../../firebase";
// import FlashMessage from 'react-flash-message'

function getBiggestSide(obj) {
  if (obj) {
    let { width, height } = obj;
    width = parseInt(width);
    height = parseInt(height);
    // console.log(typeof(width), typeof(height), 'types of width and height in getBiggestSide')
    if (width > height) {
      return width;
    } else {
      return height;
    }
  } else {
    console.log("did not get biggest side");
    return "did not get biggest side";
  }
}

export default function GardenContainer() {
  //projectName = string
  const [projectName, setProject] = useState("Untitled");

  //dimensions = {width: x, height: y}
  const [dimensions, setDimensions] = useState(null);

  //plantData = [{name: string, spread: int, position: {x: num, y: num}]
  const [plantData, addPlantData] = useState(null);

  //plantDivs are draggable elements, see below 'newPlantDiv'
  const [plantDivs, setPlantDivs] = useState(null);
  //generate ids for plandDivs
  // const [id] = useState(() => uniqueId())
  const makeGarden = (gardenWidth, gardenHeight) => {
    setDimensions({ width: gardenWidth, height: gardenHeight });
  };

  const addNewPlantDiv = (
    plantData,
    dimensions,
    plantDivs,
    setPlantPosition
  ) => {
    if (plantData && plantData.length) {
      const longEdge = getBiggestSide(dimensions);
      let { spread, name, id } = plantData[0];
      spread = parseInt(spread);

      if (longEdge >= spread) {
        spread = (spread / longEdge) * 70;
      } else {
        console.log("plant too big!");
        return;
      }
      //make new plant Draggable
      const newPlantDiv = (
        <Draggable key={id} setPlantPosition={setPlantPosition}>
          <div
            style={{
              height: `${spread}vh`,
              width: `${spread}vh`,
              background: "lightgreen",
              borderRadius: "50%",
              border: "2px green solid"
            }}
          >
            <PlantModal name={name} id={id} removePlant={removePlant} />
          </div>
        </Draggable>
      );
      if (plantDivs) {
        setPlantDivs([...plantDivs, newPlantDiv]);
      } else {
        setPlantDivs([newPlantDiv]);
      }
    } else {
      return;
    }
  };

  const setPlantPosition = (id, position) => {
    return;
    // fetch call to firebase to change position
  };

  const saveProject = () => {
    const project = {
      name: projectName,
      dimensions: dimensions,
      plantData: plantData
      // plants: plantDivs
    };
    db.collection("projects")
      .add(project)
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  };

  useEffect(() => {
    addNewPlantDiv(plantData, dimensions, plantDivs, setPlantPosition);
  }, [plantData, dimensions]);

  function removePlant(
    plantId,
    oldPlantData = plantData,
    oldPlantDivs = plantDivs
  ) {
    if (oldPlantData) {
      const plantDataArray = [...oldPlantData];
      for (let i = 0; i < plantDataArray.length; i++) {
        if (plantDataArray[i].id == plantId) {
          plantDataArray.splice(i, 1);
          addPlantData([...plantDataArray]);
        }
      }
    }

    if (oldPlantDivs) {
      const plantDivArray = [...oldPlantDivs];
      for (let i = 0; i < plantDivArray.length; i++) {
        if (plantDivArray[i].key == plantId) {
          plantDivArray.splice(i, 1);
          setPlantDivs([...plantDivArray]);
        }
      }
    }
    return;
  }

  return (
    <Container className="garden-box-container">
      {dimensions ? (
        <Row className="garden-box">
          <GardenHeader
            addPlantData={addPlantData}
            saveProject={saveProject}
            setProject={setProject}
            projectName={projectName}
          />
          <GardenGrid project={projectName} dimensions={dimensions} />
          {plantDivs ? plantDivs : null}
        </Row>
      ) : null}

      <Row className="draw-garden-container">
        <DrawGardenModal makeGarden={makeGarden} />
      </Row>
    </Container>
  );
}
