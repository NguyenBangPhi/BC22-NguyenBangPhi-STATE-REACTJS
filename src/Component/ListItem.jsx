import React, { Component } from 'react'
import data from './data.json'

export default class ListItem extends Component {

    state = {
        itemDataDefault: {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }

    renderListKinh = () => {
        return data.map((item) => {
            return (
                <div key={item.id} className='col-2 p-1' style={{cursor: 'pointer'}} onClick={() => {this.changeData(item)}}>
                    <img src={item.url} alt="" className='w-75 border border-width-2'/>
                </div>
            )
        })
    }

    changeData = (item) => {
        this.setState({itemDataDefault: item})
    }

  render() {
      const keyF = `@keyframes aniChangeData${Date.now()} {
        from{
            width:0;
            transform:rotate(45deg);
            opacity:0;
            
            
            
        }
        to{
            width:140px;
            opacity: 0.7;
            transform:rotate(0deg);
        }
      `
      const styleData = {
        position: 'absolute',
        top: '80px', 
        width: '140px',
        left: '200px',
        opacity:'0.6',
        animation: `aniChangeData${Date.now()} 1s`

      }
    return (
        <div className='mainDiv'>
            <style>
                {keyF}
            </style>
            <div className='shadowDiv'>
                <h1 className='text-center title'>TRY GLASSES APP ONLINE</h1>
                <div className='container'>
                    <div className='row mt-5'>
                        <div className='col-6 text-center'>
                            <div className='position-relative'>
                                <img src="./glassesImage/model.jpg" alt='model' style={{ width: '250px' }} />
                                <img src={this.state.itemDataDefault.url} style={styleData}/>
                                
                                <div className='position-absolute' style={{bottom: '0px',left:'0px',right:'0px',width:'250px',marginLeft:'auto',marginRight:'auto',textAlign:'left',background: 'rgba(249, 180, 45,0.5)',paddingTop:'12px'}}>
                                    <p style={{color: 'blue',lineHeight:'0px',fontWeight:'700'}}>{this.state.itemDataDefault.name}</p>
                                    <p style={{lineHeight: '1.2',color: 'white',fontWeight: '500'}}>{this.state.itemDataDefault.desc}</p>
                                </div>
                            </div>
                            
                        </div>
                        <div className='col-6 text-center'>
                            <img src='./glassesImage/model.jpg' alt='model' style={{ width: '250px' }} />
                            
                        </div>
                    </div>
                </div>
                <div className="container text-center mt-5 d-flex justify-content-center" style={{background: 'white'}}>
                    <div className='row p-5'>
                        {this.renderListKinh()}
                    </div>
                     
                </div>
            </div>
        </div>
    )
  }
}
