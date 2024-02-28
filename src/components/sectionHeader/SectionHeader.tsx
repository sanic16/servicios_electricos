import React from 'react'
import './sectionHeader.css'

const SectionHeader = (
    {
        icon: Icon,
        title,
        className
    }:{
        icon: React.ComponentType,
        title: string,
        className?: string
    }
) => {
  return (
    <div className={`section__head ${className}`}>
        <span>
            { <Icon /> }
        </span>
        <h2>
            { title}
        </h2>
    </div>
  )
}

export default SectionHeader