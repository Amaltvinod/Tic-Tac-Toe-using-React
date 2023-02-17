import React from "react"
import  ReactDOM from "react-dom/client";
import "./index.css"

function Square(props){

    return ( <button className="sqaure" onClick={()=>props.onClick()}> {props.value}</button>);
 
}
class Board extends React.Component{
 
    
  constructor(props){
    super(props)
    this.state={
      sqaures:Array(9).fill(null),
      xIsNext:true,
    }
  }
  handler(i){
    
    const sqaures=this.state.sqaures.slice();
    if(sqaures[i] ||checkForWinner(sqaures))return;
    sqaures[i]=this.state.xIsNext?'X':'0';
      this.setState({
      sqaures:sqaures,
      xIsNext:this.state.xIsNext?false:true,
    });
    
    

  }
  isSquare(i){
    return ( <Square 
    value={this.state.sqaures[i]}
    onClick={()=>this.handler(i)}

    />);
  }
  render(){
      const winner=checkForWinner(this.state.sqaures);
      let status;
     if(winner){
      status="winner is:"+winner;

     }else{
      status="Next Player:"+(this.state.xIsNext?'X':'0');
     }
    
    return (
      
      <>
      <div>{status}</div>
      <div className="row">
         {this.isSquare(0)}
         {this.isSquare(1)}
         {this.isSquare(2)}

      </div>
      <div className="row">
      {this.isSquare(3)}
         {this.isSquare(4)}
         {this.isSquare(5)}

      </div>
      <div className="row">
      {this.isSquare(6)}
         {this.isSquare(7)}
         {this.isSquare(8)}

      </div>

      </>

      
    )
  }
}
function checkForWinner(sqaure){
  const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  for(let i=0;i<win.length;i++){
    const [a,b,c]=win[i];
    if(sqaure[a] && sqaure[a]===sqaure[b] && sqaure[b]===sqaure[c])return sqaure[a];
  }
  return null;
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Board/>)






