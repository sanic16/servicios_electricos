import './card.css'

const Card = (
    {
        children,
        className
    }:{
        children: React.ReactNode,
        className?: string
    }
) => {
  return (
    <div className={`card ${className}`}>
        { children }
    </div>
  )
}

export default Card