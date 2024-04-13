import styled from "styled-components"

const Search = styled.form`
display: flex;
position: relative;
align-items: center;
margin: 2%;
width: 45%;
border-radius: 20px;
border: 2px solid rgba(11, 195, 11, 0.74);
`

const Text = styled.input`
width: 100%;
height: 35px;
border: none;
border-radius: 20px;
outline: none;
font-size: 1.1rem;
padding: 5px;
padding-left: 20px;
`

const SearchBtn = styled.button`
position: absolute;
right: 10px;
background-color: white;
border: none;
border-radius: 20px;
padding: 5px;
padding-left: 10px;
padding-right: 10px;
cursor: pointer;
`

const Svg = styled.svg`
width: 30px;
height: 30px;
`

const SearchBar = ({onChange}) => {

    const onSearch = () => {
        console.log('search')
    }

    return (
        <>      
            <Search>
            <Text type="text" placeholder='제품을 검색해보세요' onChange={onChange}/>
            <SearchBtn onClick={onSearch}>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#87CB81" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></Svg>
            </SearchBtn>
          </Search>
        </>
    )
}

export default SearchBar;
