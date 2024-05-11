import React, { useEffect } from 'react'

function Lazyloading({src, alt,className,title}) {

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
    <img ref={imageRef} title={title} className={`${className} cursor-pointer`} src={isVisible ? src : ''} alt={alt} />
  )
}

export default Lazyloading