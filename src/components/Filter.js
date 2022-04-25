import { useEffect, useState } from "react";

const Filter = ({ setter, data, filter: { match, indcudes } }) => {
    const arrayToObject = array => array.reduce((result, item) => ({ ...result, [item]: '' }), {})
    const [matchFilters, setMatchFilters] = useState(arrayToObject(match));
    const [includesfilters, setIncludeFilters] = useState(arrayToObject(indcudes));
    const [searchValue, setSearchValue] = useState('')
    const [completeCheck, setCompleteCheck] = useState(false)

    useEffect(() => {
        setter(filteringData(data))
    }, [searchValue, completeCheck]);

    const filteringData = datas => {
        const filters = [
            ...indcudes.map(filter => ({ type: 'indcudes', key: filter, value: includesfilters[filter] })),
            ...match.map(filter => ({ type: 'match', key: filter, value: matchFilters[filter] }))]
        return getFilteringData({ datas, filters })
    }

    const getFilteringData = ({ datas, filters }) => filters.reduce((result, { key, value, type }) => {
        return type === 'indcudes' ?
            result.filter(data => includeFilter(data[key])(value)) :
            result.filter(data => matchFilter(data[key])(value))
    }, datas)

    const includeFilter = data => filter => data.includes(filter) || filter === ''
    const matchFilter = data => filter => data === filter || filter === '';

    function onChangeCompleteCheckbox({ target: { checked } }) {
        setMatchFilters(res => ({ ...res, complete: checked ? false : '' }))
        setCompleteCheck(checked)
    }

    const onChangeSearchInput = ({ target: { value } }) => {
        setSearchValue(value)
        setIncludeFilters(res => ({ ...res, title: value }))
    }

    return <>
        <span>완료되지 않은 목록만 보기</span>
        <input value={completeCheck} type='checkbox' onChange={onChangeCompleteCheckbox}></input>
        <input className="search__input" value={searchValue} onChange={onChangeSearchInput}></input>
    </>
}

export default Filter;