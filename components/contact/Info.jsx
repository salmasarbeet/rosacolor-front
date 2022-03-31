import InfoCard from "./InfoCard";

export default function Info() {
  let infoList = [
    {
      id: 1,
      title: "Adresse",
      content: `N°39, Rue Al Fourat, 1er Etage, Mâarif 20100 Casablanca - Maroc.`,
      content: [
        {
          id: 1,
          header: null,
          body: "N°39, Rue Al Fourat, 1er Etage, Mâarif 20100 Casablanca - Maroc.",
        },
      ],
    },
    {
      id: 2,
      title: "Horaires",
      content: [
        {
          id: 1,
          header: "LUNDI Au VENDREDI",
          body: "08:00 – 18:00",
        },
        {
          id: 2,
          header: "SAMEDI - DIMANCHE",
          body: "Fermé",
        },
      ],
    },
    {
      id: 3,
      title: "Contactez-nous",
      content: [
        {
          id: 1,
          header: "Fixe",
          body: "05229-91300",
        },
        {
          id: 2,
          header: "Email",
          body: "mediexperts@mediexperts.ma",
        },
      ],
    },
  ];

  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl ">
          Quelques informations <br /> sur{" "}
          <span className="underline decoration-red-500">Rosacolor</span>
        </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-8 md:grid-cols-2 xl:grid-cols-2">
          {infoList.map((info) => (
            <InfoCard key={info.id} title={info.title} content={info.content} />
          ))}
        </div>
      </div>
    </div>
  );
}
