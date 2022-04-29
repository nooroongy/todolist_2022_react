import { useEffect, useState } from "react";

const Filter = ({ setter, data, filter: { match, includes } }) => {
    const arrayToObject = array => array.reduce((result, item) => ({ ...result, [item]: '' }), {})
    const [matchFilters, setMatchFilters] = useState(arrayToObject(match));
    const [includesfilters, setIncludeFilters] = useState(arrayToObject(includes));
    const [searchValue, setSearchValue] = useState('')
    const [completeCheck, setCompleteCheck] = useState(false)

    useEffect(() => {
        setter(filteringData(data))
    }, [searchValue, completeCheck, data]);

    const filteringData = datas => {
        const filters = [
            ...includes.map(filter => ({ type: 'includes', key: filter, value: includesfilters[filter] })),
            ...match.map(filter => ({ type: 'match', key: filter, value: matchFilters[filter] }))]
        return getFilteringData({ datas, filters })
    }

    const getFilteringData = ({ datas, filters }) => filters.reduce((result, { key, value, type }) => {
        return type === 'includes' ?
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
        <span className="filter__checkbox_label" >완료전</span>
        <input className="filter__checkbox" value={completeCheck} type='checkbox' onChange={onChangeCompleteCheckbox}></input>
        <input className="filter__input" value={searchValue} onChange={onChangeSearchInput}></input>
    </>
}

export default Filter;