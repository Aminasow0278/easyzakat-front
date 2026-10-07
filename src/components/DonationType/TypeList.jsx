import { useState } from "react";

import TypeCard from "./TypeCard";
import Types from "./Types";

function TypeList() {
  const [selectedType, setSelectedType] = useState(null);

  function handleTypeSelect(typeId) {
    setSelectedType(typeId);
  }

  return (
    <section
      className="
        mx-auto
        mt-10
        flex
        w-full
        flex-col
        gap-6

        sm:px-6

        sm:grid grid-cols-2

      "
    >
      {Types.map((Type) => (
        <TypeCard
          key={Type.id}
          title={Type.title}
          badge={Type.badge}
          description={Type.description}
          icon={Type.icon}
          variant={Type.variant}
          selected={selectedType === Type.id}
          onSelect={() => handleTypeSelect(Type.id)}
        />
      ))}
    </section>
  );
}

export default TypeList;