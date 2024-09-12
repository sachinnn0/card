import React from "react";

function Card() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1719937206158-cad5e6775044?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D",
      name: "Amazon Basics",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1721332153282-3be1f363074d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D",
      name: "Rahul",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At atqueeaque officiis.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1706475192725-a304cd187061?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D",
      name: "Shahul",
      description: "Lorem, ipsum dolor sit",
    },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center gap-10 bg-zinc-200">
      {data.map((elem, index) => (
        <div key={index} className="w-52 bg-zinc-100 rounded-md overflow-hidden">
          <div className="w-full h-32 bg-zinc-300">
            <img
              className="w-full h-full object-cover"
              src={elem.image}
              alt=""
            />
          </div>
          <div className="w-full px-3 py-4">
            <h2 className="font-semibold">{elem.name}</h2>
            <p className="text-xs mt-3">
              {elem.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
