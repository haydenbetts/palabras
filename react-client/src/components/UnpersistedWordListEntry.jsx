const React = require('react');

const UnpersistedWordListEntry = (props) => {
    return (<li className="list-entry"> {props.word.text}
        <button className="delete-word" onClick={() => props.deleteUnpersisted(props.index)}> Remove </button> 
     </li>)
};

module.exports = UnpersistedWordListEntry;