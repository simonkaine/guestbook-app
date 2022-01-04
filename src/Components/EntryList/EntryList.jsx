// import React from 'react';
import { useInputs } from '../../Context/InputContext';
import EntryInput from '../Entry/EntryInput';

export default function EntryList() {
    const { inputs } = useInputs();
    return (
        <div>
            <ul aria-label='list' style={{listStyle: 'none', border: '1px solid black'}}>
                {inputs.map((input) => {
                    return (
                        <div>
                        <li key={`${input.name} - ${input.message}`} style={{borderBottom: '.5px dotted red', marginBottom: '10px'}}>
                            <EntryInput entry={input} />
                        </li>
                        </div>
                    )
                })}
            </ul>
        </div>
    ) 
}
