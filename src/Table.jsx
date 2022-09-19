import React, {Component} from "react";
import data from './data.js'


class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            student: data
        }
        console.log(this.state.student)
    }
    
    render() {
        const onSearch = (e) => {
            const {value} = e.target;
            const find = data.filter(({id, name, status}) => name.toLowerCase().includes(value.toLowerCase()))
            this.setState({student: find})
        }

        return(
            <>
                <div className="main">
                    <input className="input" type="text" onChange={onSearch} placeholder="Enter an address, neighborhood, city, or ZIP code" />
                    <button className="btn">Search</button>
                    <h1 className="properties">Properties</h1>
                    <p className="paragraph">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
                </div>
                <h3 className="number">{this.state.student.length} results</h3>
                <div className="box">
                
                
                {
                        this.state.student.map(({id, img, name, status}) => {
                            return (
                                <div className="card">
                                    <img src={img} alt="House1" />  
                                    <h1 className="name">{name}</h1>
                                    <p className="parag">{status}</p>
                                </div>
                            
                            )
                        })
                    }
                    
                </div>
            </>
        )
    }
}
export default Table