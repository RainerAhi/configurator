import { useCustomization } from "../contexts/Customization";

export default function Configurator () {
  const {
    cushionColors,
    cushionColor,
    setCushionColor,
  } = useCustomization();

  return (
    <div className="configurator">
      <div className="configurator__section">
        <div className="configurator__section__title"></div>
        <div className="configurator__section__values">
          {cushionColors.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.color === cushionColor.color ? "item--active" : ""
              }`}
              onClick={() => setCushionColor(item)}
            >
              <div
                className="item__dot"
                style={{ backgroundColor: item.color }}
              />
              <div className="item__label">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

