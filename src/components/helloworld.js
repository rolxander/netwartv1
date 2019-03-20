import React,{Component} from 'react';
class Hello_World extends Component
{
    constructor(props){
        super(props);
        console.log(props)
        this.state = {
            count : 0
        };
        this.handleCountCLick = this.handleCountCLick.bind(this);
    }
    componentDidMount(){
        this.setState({count : 1});
    }
    handleCountCLick(){        
        this.setState({count : this.state.count+1});
    }
render(){    
    const {mensaje} = this.props.mensaje;
    const title = this.props.title;
    console.log(this.state.count+ "estamos entrando al render");
    return(<div>
                <h1>{mensaje} {title} </h1>
                <h2> {this.state.count}</h2>
                <button onClick={this.handleCountCLick}>click</button>
            </div>);
}
}export default Hello_World;