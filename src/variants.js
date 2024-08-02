export const fadeIn = (direction, delay) =>{
    return{
        hidden:{
            y :direction === 'up' ? 40 : direction === 'down' ? -40 : 0, 
            x :direction === 'left' ? 40 : direction === 'right' ? -40 : 0,   
        },
        show:{
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: 'tweeen', 
                delay: delay,
                duration :1.5,
                ease: [0.25, 0.75, 0.25, 0.75],
            }
        }
    }
}