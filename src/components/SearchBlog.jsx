import React from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'

const SearchBlog = () => {
    return (
        <div className='searchBlog'>
            <InputGroup>
                <FormControl
                    placeholder="Enter Article Name"
                />
                <InputGroup.Append>
                    <Button variant="primary">Search</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    )
}

export default SearchBlog
