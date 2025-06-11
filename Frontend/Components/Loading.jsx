import React, { useEffect } from 'react'
import 'ldrs/ring'
import { useState } from 'react'
import { DotSpinner,Cardio,TailChase,Helix } from 'ldrs/react'
import 'ldrs/react/DotSpinner.css'
import 'ldrs/react/Cardio.css'
import 'ldrs/react/TailChase.css'
import 'ldrs/react/Helix.css'

const Loading = () => {
    const [loading, setLoading] = useState(true)
    const [loading2, setLoading2] = useState(true)
    const [loading3, setLoading3] = useState(true)
    const [loading4, setLoading4] = useState(true)
    const [loading5, setLoading5] = useState(true)
    const text = 'P'
    const text2 = 'e'
    const text3 = 'x'
    const text4 = 'e'
    const text5 = 'l'
    const txt = "Wear"
    useEffect(() => {
        window.setTimeout(() => {
            setLoading(false)
        }, 2000)
        window.setTimeout(() => {
            setLoading2(false)
        }, 3000)
        window.setTimeout(() => {
            setLoading3(false)
        }, 4000)
        window.setTimeout(() => {
            setLoading4(false)
        }, 5000)
        window.setTimeout(() => {
            setLoading5(false)
        }, 6000)
        return () => clearInterval()
    }
    , [loading])
  return (
    <div className='loading-container'>
        {
            loading ? (
                <div className="loading">
                    <l-ring size="60" color="coral"></l-ring>
                </div>
            ) : (
                <div className="loaded">
                <h1>{text}</h1>
                </div>
            )

        }
        {
            loading2 ? (
                <div className="loading">
                    <DotSpinner size={60} color="coral" />
                </div>
            ) : (
                <div className="loaded">
                <h1>{text2}</h1>
                </div>
            )
        }
        {
            loading3 ? (
                <div className="loading">
                    <Cardio size={50} stroke={4} speed={2} color="black" />
                </div>
            ) : (
                <div className="loaded">
                <h1>{text3}</h1>
                </div>
            )
        }
        {
            loading4 ? (
                <div className="loading">
                    <TailChase size={50} stroke={4} speed={2} color="black" />
                </div>
            ) : (
                <div className="loaded">
                <h1>{text4}</h1>
                </div>
            )
        }
        {
            loading5 ? (
                <div className="loading">
                    <Helix size={50} speed={2} color="black" />
                </div>
            ) : (
                <div className="loaded">
                <h1>{text5}</h1>
                </div>
            )

        }
    </div>
  )
}

export default Loading