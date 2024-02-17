import React, { useState } from 'react';
import { users } from '../../data';
import { User } from '../User/User';


export function Button3() {
    const [nationality, setNationality] = useState("")
    
    const filterUser = () => {
        switch (nationality) {
            case 'All':
                let all = users.filter((el) => {
                    return el.age > 24
                })
                return all.map((el, id)=> {
                    return <User el={el} key={id} />
                })
            case 'Kyrgyzstan':
                let kg = users.filter((el)=> {
                    return el.age > 24 && el.country == 'Kyrgyzstan'
                })
                return kg.map((el, id)=> {
                    return <User el={el} key={id} />
                })
            case 'Another countries':
                let ac = users.filter((el)=> {
                    return el.age > 24 && el.country != 'Kyrgyzstan'
                })
                return ac.map((el, id)=> {
                    return <User el={el} key={id} />
                })
        }
    }
    return (
    <div>
       <div className='btn-group'>
           <button className="b1" onClick={()=> setNationality('All')}>All</button>
           <button className="b2" onClick={()=> setNationality('Kyrgyzstan')}>Kyrgyzstan</button>
           <button className="b3" onClick={()=> setNationality('Another countries')}>Another countries</button>
       </div>
       <div className='container'>
          {filterUser()}
       </div>
    </div>
  )
}


