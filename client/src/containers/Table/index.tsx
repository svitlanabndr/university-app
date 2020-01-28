import React, { Component } from 'react';
import './styles.scss';

interface Props {
  data: any
  
}
interface State {
  
}

export default class Table extends Component<Props, State> {

  render() {
    const { data } = this.props;
    if (data.length < 1) {
      return 'no available rows'
    }
    return (
      <div className='table'>
        <table>
          <tr>
            {
              Object.keys(data[0]).map((key: any) => {
                return <td>{key}</td>
              })
            }
          </tr>
          {
            data.map((student: any) => {
              return <tr>
                {
                  Object.values(student).map((value: any) => {
                    return <td>{ value }</td>
                  })
                }
              </tr>
            })
          }
        </table>
        
      </div>
    )
  }
}
