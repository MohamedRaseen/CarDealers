import { Input, Button} from 'reactstrap';
import { useState } from 'react';

const Filter = ({brands, locations, callBack, clear}) =>{

   const [brand, setBrand] = useState(),[location, setLocation] = useState();

   return(
       <div className='filter-container'>
           <h4>Filter Car Dealers By Brand and Location</h4>
           <div className='filter'>
               <div>
                <span className='title'>Brands</span>
                    <Input type='select' onChange={(e) => {
                        setBrand(e.target.value)
                    }} value={brand || 'default'}>
                            <option disabled value='default'>--select Brand--</option>
                            { brands && brands.map((brand, index) => <option key={index} value={brand}>{brand}</option>)}
                    </Input>
               </div>
               <div>
                <span className='title'>Location</span>
                    <Input type='select' onChange={(e) => setLocation(e.target.value)} value={location || 'default'}>
                        <option disabled value='default'>--select Location--</option>
                        { locations && locations.map((location, index) => <option key={index} value={location}>{location}</option>)}
                    </Input>
               </div>
            
            <div className='submit'>
                <div>
                    <Button className='submit-btn' onClick={() => callBack(brand, location)}>Find Dealers</Button>{' '}
                    <Button color="danger" onClick={clear}>Clear</Button>{' '}
                </div>
            </div>
            
           </div>
       </div>
   )
}
export default Filter;