import React, { useEffect } from 'react'

function Lazyloading({src, alt,className}) {

    const imageRef = React.useRef();
    const [isVisible,setIsVisible] = React.useState()

    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if(entry.isIntersecting){
                    setIsVisible(true)
                    observer.unobserve(imageRef.current)
                }
            })
        })

        observer.observe(imageRef.current)

        
        return ()=>{
            if(imageRef.current)(

                observer.unobserve(imageRef.current)
            )
        }

    }, [])
  return (
    <img ref={imageRef} className={className} src={isVisible ? src : ''} alt={src} />
  )
}

export default Lazyloading