import { createContext, useContext, useState } from "react";

const cushionColors = [
  {
    color: "#d7d3c9",
    name: "Bone",
  },
  {
    color: "#a59e94",
    name: "Plaster",
  },
  {
    color: "#73a59e",
    name: "Pastel Green",
  },
  {
    color: "#778b93",
    name: "Arctic Blue",
  },
  {
    color: "#d39a9d",
    name: "Powder Pink",
  },
  {
    color: "#c8c769",
    name: "Lime",
  },
  {
    color: "#206a66",
    name: "Emerald Green",
  },
  {
    color: "#1d404d",
    name: "Petrol Blue",
  },
];

const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
  const [cushionColor, setCushionColor] = useState(cushionColors[0]);

  return (
    <CustomizationContext.Provider
      value={{
        cushionColors,
        cushionColor,
        setCushionColor,
      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
};
