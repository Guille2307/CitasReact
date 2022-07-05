import React from "react";
import Paciente from "./Paciente";

const PatientList = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            {" "}
            Listado de Pacientes
          </h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold text-xl">
              Pacientes y Citas
            </span>
          </p>
          {pacientes.map((paciente) => {
            return (
              <Paciente
                key={paciente.id}
                setPaciente={setPaciente}
                paciente={paciente}
                eliminarPaciente={eliminarPaciente}
              ></Paciente>
            );
          })}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center"> No hay Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Agrega Nuevos Pacientes{" "}
            <span className="text-indigo-600 font-bold text-xl">
              a esta lista
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default PatientList;
