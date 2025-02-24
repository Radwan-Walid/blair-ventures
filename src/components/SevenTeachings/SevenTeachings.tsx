
const teachings = [
  {
    title: "Love",
    icon: "",
  },
  {
    title: "Respect",
    icon: "",
  },
  {
    title: "Courage",
    icon: "",
  },
  {
    title: "Honesty",
    icon: "",
  },
  {
    title: "Wisdom",
    icon: "",
  },
  {
    title: "Humility",
    icon: "",
  },
  {
    title: "Truth",
    icon: "",
  },
]

const SevenTeachings = () => {
    return (
      <div className="relative flex flex-col items-center">
        <div className="relative w-80 h-80 rounded-full overflow-hidden border-8 border-gray-800">
        <div
          className="w-full h-full rounded-full transition-transform"
          style={{
            background: `conic-gradient(
              #a92115 0deg 51.43deg, #F9B226 51.43deg 102.86deg, #F7DA1C 102.86deg 154.29deg,
              #3EAC33 154.29deg 205.71deg, #165892 205.71deg 257.14deg, #965D8A 257.14deg 308.57deg,
              #834935 308.57deg 360deg
            )`,
          }}
        >
          {teachings.map((teaching, i) => (
            <div
              key={i}
              className="absolute w-full h-full pt-10 border-y-8 border-white flex justify-center text-center items-center text-white font-bold"
              style={{
                transform: `rotate(calc(${i * (360 / 7)}deg + 24deg)) translateY(-50%)`,
              }}
            >
              {teaching.title}
            </div>
          ))}
        </div>
        </div>
      </div>
    );
  };
  
  export default SevenTeachings;