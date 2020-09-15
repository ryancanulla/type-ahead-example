import React from 'react';

class TypeAhead extends React.Component {

    constructor() {
        super();

        this.onInputChange = this.onInputChange.bind(this);

        this.state = {
            searchTerm: '',
            isLoadingSuggestion: false,
            showSuggestionList: false,
            suggestionList: []
        };
    }

    fetchSuggestionList () {
        setTimeout(() => {
            const sampleList = ['Aenean', 'mollis', 'dui', 'et aliquet', 'lobortis', 'felis dui', 'euismod elit', 'eu lacinia', 'est quam eget', 'mi. Nullam posuere', 'velit vel.'];
            const randomStartIndex = Math.floor(Math.random() * Math.floor(sampleList.length));
            const lastItemIndex = sampleList.length - 1;

            this.setState({
                isLoadingSuggestion: false,
                showSuggestionList: true,
                suggestionList: sampleList.slice(randomStartIndex, lastItemIndex)
            });
        }, 500);
    }

    onInputChange (event) {
        const newValue = event.target.value;
        const shouldGetSuggestions = newValue.length > 3;
        const newState = {
            isLoadingSuggestion: false
        };


        if(shouldGetSuggestions) {
            this.fetchSuggestionList();
            newState.isLoadingSuggestion = this.state.suggestionList.length === 0
        }
        else {
            newState.suggestionList = [];
        }

        this.setState({
            ...newState,
            searchTerm: newValue
        });
    }

    render() {
        const {
            searchTerm,
            showSuggestionList,
            isLoadingSuggestion,
            suggestionList
        } = this.state;

        const loadingIndicator = (<div>loading...</div>);
        const suggestions = (
            <div className="suggestionList">
                { suggestionList.map((item) => {
                    return (<div className="suggestion">{ item }</div>);
                }) }
            </div>
        );


        return (
            <React.Fragment>
                <input value={searchTerm} onChange={this.onInputChange}/>
                { isLoadingSuggestion ? loadingIndicator : ''}
                { showSuggestionList ? suggestions : '' }
            </React.Fragment>
        );
    }
}

export default TypeAhead;
