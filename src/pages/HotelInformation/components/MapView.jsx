import map from '../../../assets/images/map.jpg'

const MapView = () => {
  return (
    <div className=' max-w-[1400px] mx-auto p-[40px] max-lg:px-[20px] pt-0'>
      <h4 className=' text-primary text-[24px] font-bold'>SHOW ON MAP</h4>
      <div className=" rounded-xl overflow-hidden border-[#D9D9D9] border-[4px] ">
        <img src={map} alt="" />
      </div>
    </div>
  )
}

export default MapView
