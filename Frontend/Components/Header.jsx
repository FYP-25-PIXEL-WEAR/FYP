import {useState} from 'react'

const Header = () => {
  const [isToggled, setIsToggled] = useState(false)
  const CN = isToggled ? "":""
  return (
    <div className='container-fluid tw:bg-[#FFDDA9] p-3 d-flex'>
      <div className="img">
        <div className="img-rounded tw:bg-[#D9D9D9] rounded-circle d-grid justify-content-start align-items-center tw:max-w-max">
          <img
            src="https://i.ibb.co/2t1f3bH/Logo.png"
            alt="Logo"
            className="rounded-circle"
            style={{ width: '75px', height: '75px' }}
          />
        </div>
      </div>
      <div className="switch d-grid justify-content-end align-items-center ms-auto">
        <div className="button">
          <button className={"tw:w-30 tw:h-15 d-flex tw:bg-[#D9D9D9] tw:border-0 rounded-5 tw-p-0 tw-gap-2 p-3 align-items-center justify-content-start"} onClick={() => setIsToggled(!isToggled)}>
            <span className='tw:w-10 rounded-circle tw:h-10 tw:bg-[#ffffff]'></span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header