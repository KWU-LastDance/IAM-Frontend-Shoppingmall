import styled from "styled-components"
import { useEffect, useState } from "react"
import axios from "axios"
import useDebounce from "./hooks/useDebounce"
import { useNavigate } from "react-router-dom";

const Search = styled.form`
display: flex;
position: relative;
align-items: center;
margin: 2%;
width: 45%;
border-radius: 20px;
border: 2px solid rgba(11, 195, 11, 0.74);
`

const Input = styled.input`
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

const SearchList = styled.div`
z-index: 1;
display: flex;
flex-direction: column;
position: absolute;
top: 70px;
left: 31%;
width: 45%;
border-radius: 10px;
border: 1px solid rgba(11, 195, 11, 0.74);
background-color: white;
padding: 20px;
text-align: left;
`
const SearchItem = styled.div`
display: flex;
flex-direction: column;
padding-left: 10px;
`

const SearchBar = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState('')
    const [searchList, setSearchList] = useState([])

    const Searching = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
        if(search === '') {
            setSearchList([])
        }
    }

    const getSearch = async (text:string) => {
        try {
            const response = await axios.get('/api/v1/product')
            const filter = response.data.filter((item) => item.name.includes(text))
            setSearchList(filter)
        } catch (error) {
            console.log(error)
        }
    }

    const debouncedSearch = useDebounce(search, 500)
    useEffect(() => {
        getSearch(search)
    }, [debouncedSearch])

    const getSearchList = () => {
        if(searchList.length === 0 ) {
            return <p>검색 결과가 없습니다.</p>
        }
        return searchList.map((item) => {
            return (
                <SearchItem key={item.id}>
                    <div onClick={()=>navigate(`/product/${item.id}`)}>
                    <p>{item.name}</p>
                    </div>
                </SearchItem>
            )
        })
    }

    return (
        <>      
            <Search>
            <Input type="text" value={search} placeholder='제품을 검색해보세요' onChange={Searching}/>
            <SearchBtn onClick={Searching}>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#87CB81" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></Svg>
            </SearchBtn>
          </Search>
          {!search ? null :
            <SearchList> 
            {getSearchList()}
           </SearchList>
    }
        
        </>
    )
}

export default SearchBar;
