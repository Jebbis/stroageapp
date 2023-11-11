function RightSidebar() {
  return (
    <section className="custom-scrollbar rightsidebar">
      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-heading4-medium text-light-1">
          Things to do:
          <ul className="list-disc ">
            <li className="mt-2"> Käyttäjä hallinta </li>
            <li className="mt-2"> Details page</li>
            <li className="mt-2"> Last delivery listaksi </li>
            <li className="mt-2"> details listaksi </li>
            <li className="mt-2"> Chatti tähän kohtaan??? </li>
          </ul>
        </h3>
      </div>
      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-heading4-medium text-light-1">
          Tänään on hieno päivä :)
        </h3>
      </div>
    </section>
  );
}

export default RightSidebar;
