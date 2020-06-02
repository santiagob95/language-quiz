import React from 'react'
import Button from '../components/Button';


export default class LevelSelectionPag extends React.Component{
  constructor (props){
    super();
  }
  
    return (
          {<div>
            <h1 className="titleWithEffect"> Elige Tu Nivel</h1>
              {this.props.quizzes.map((item, index) => {
                  return (
                    <Button 
                      key={item.id}
                      onClick={this.props.categorySelected}
                      id={item.id}
                      >
                      {item.title}
                    </Button>  
                  )
                })
              }
          </div>
    )
}
