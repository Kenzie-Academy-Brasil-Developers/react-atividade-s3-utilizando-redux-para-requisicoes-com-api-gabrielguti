import { useSelector } from "react-redux";

const Digimons = () => {
  const { digimons } = useSelector((state) => state);

  return (
      <div className = 'digCamp'>
        {digimons.map((item, index) => (
          <div className = 'cardDigimon'>

          <div className = 'digInfo' key={index}><span>{item.name}</span>
          <img src={item.img} alt="digimon" />
          <span>{item.level}</span>
          </div>
          </div>

        ))}
      </div>
  );
};

export default Digimons;
