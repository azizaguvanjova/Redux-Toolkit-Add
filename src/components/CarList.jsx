import { useDispatch, useSelector } from "react-redux"
import { removeCar } from "../features/cars/carsSlice"
function CarList() {
  // Yapılacaklar: store'dan arabaları alın
  const { cars } = useSelector((state) => state.cars)
  const dispatch = useDispatch()

  const renderedCars = cars.map((car) => {
    return (
      <div key={car.id} className='panel flex justify-between'>
        <p className="text-lg">
          {car.name} - ${car.value}
        </p>
        <button className='text-white bg-red-500 hover:bg-red-300 px-3 py-1 rounded'
          onClick={() => dispatch(removeCar(car.id))}>
          Sil
        </button>
      </div>
    )
  })

  return (
    <div className='w-full flex flex-col gap-4 bg-white rounded-lg border border-gray-300 p-4'>
      {renderedCars.length ? (
        renderedCars
      ) : (
        <div className='no-cars text-center'>Başlamak için araba ekleyin</div>
      )}
    </div>
  )
}

export default CarList
