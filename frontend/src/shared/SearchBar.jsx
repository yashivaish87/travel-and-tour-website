import React,{useRef} from 'react'
import './search-bar.css'
import { Col, Form, FormGroup } from 'reactstrap'

function SearchBar() {

    const locationRef = useRef('')
    const distanceRef = useRef(0)
    const maxGroupSize = useRef(0)

    const searchHandler = () => {

        const location = locationRef.current.value
        const distance = distanceRef.current.value
        const maxGroupSize = maxGroupSize.current.value
        
        if (location === '' || distance === '' || maxGroupSize === '') {
            return alert("All fields are required!");
        }
    }

  return (
    < Col lg='12'>
          <div className="search_bar">
              <div className="d-flex align-items-center gap-4">
                  <FormGroup className="d-flex gap-3 form_group form_group-fast">
                      <span>
                      <i class="ri-map-pin-line"></i> 
                      </span>
                      <div>
                          <h6>Location</h6>
                          <input type="text" placeholder="Where are you going?" ref={locationRef} />
                      </div>
                  </FormGroup>
                  <FormGroup className="d-flex gap-3 form_group form_group-fast">
                      <span>
                      <i class="ri-map-pin-time-line"></i> 
                      </span>
                      <div>
                          <h6>Distance</h6>
                          <input type="number" placeholder="Distance k/m" ref={distanceRef } />
                      </div>
                  </FormGroup>
                  <FormGroup className="d-flex gap-3 form_group form_group-last">
                      <span>
                      <i class="ri-group-line"></i> 
                      </span>
                      <div>
                          <h6>Max People</h6>
                          <input type="number" placeholder="People" ref={maxGroupSize} />
                      </div>
                  </FormGroup>

                  <span className="search_icon" type="submit" onClick={searchHandler}>
                  <i class="ri-search-line"></i> 
                  </span>
              </div>
          </div>
    </Col>
  )
}

export default SearchBar