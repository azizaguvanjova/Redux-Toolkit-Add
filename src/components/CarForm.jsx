import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCar } from "../features/cars/carsSlice";
function CarForm() {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();

    // Yapılacaklar: Arabayı store'a kaydet
    if (name && value) {
      dispatch(addCar({ name, value }))
      setName("")
      setValue("")
    }
  };

  return (
    <div className="w-full p-4 border border-gray-300 shadow-md bg-white rounded-lg ">
      <h4 className="subtitle text-2xl mb-4 text-gray-500  ">Araba Ekle</h4>
      <form onSubmit={handleSubmit}
        className="flex flex-row gap-2 justify-between  mb-4">
        <div className="flex flex-row gap-2">
          <div className="field flex  items-center ">
            <label className="label  w-full font-semibold mr-2 ">Marka</label>
            <input
              className="input border border-gray-400 rounded-md py-1 px-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex  items-center">
            <label className="label font-semibold w-full">Fiyat</label>
            <input
              className="input border border-gray-400 rounded-md py-1 px-2"
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </div>
        <button className="button is-link py-1 px-3 rounded text-white bg-blue-600 hover:bg-blue-300">Gönder</button>

      </form>
    </div>
  );
}

export default CarForm;
