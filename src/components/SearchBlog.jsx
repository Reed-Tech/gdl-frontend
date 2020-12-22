import React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'

const SearchBlog = () => {
    return (
        <div className='searchBlog d-flex justify-content-between'>
            <div className='col-lg-6 col-sm-12'>
                <InputGroup className="col-8">
                    <FormControl
                        placeholder="Enter Article Name"
                    />
                    <InputGroup.Append>
                        <Button variant="primary">Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
            <div className='col-lg-6 d-sm-none d-lg-block'>
                {/* filters */}
            </div>

        </div>
    )
}

export default SearchBlog
