import React, { Component } from 'react'
import Typical from 'react-typical'

class AnimatedTyping extends React.Component {
  render () {
    return (
      <Typical
        // steps={['معدل تفاعل|',1000,'معدل تفاعل|', 1000]}
        steps={[ 'تفاعل',
            1000,
            'الحفاظ', 
          1000,
            'ولاء',
            1000,
            'قيمة حياة',
            1000
        ]}

        loop={Infinity}
         wrapper="span"
      />
    )
  }
}
export default AnimatedTyping;