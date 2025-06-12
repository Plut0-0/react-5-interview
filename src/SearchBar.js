import React, { useState } from 'react';
import './App.css';

function DisplaySentences({ sentences }) {
    return (
        <div className="sentencesContainer">
            {sentences.map((sentence, i) => (
                <p key={i}>{sentence}</p>
            ))}
        </div>
    );
}

function MyInput({ onChange }) {
    return (
        <input
            className='MyInput'
            placeholder='Enter your search query'
            onChange={onChange}
        />
    );
}

export default function MySearch() {
    const allSentences = [
        "The old bridge swayed precariously in the strong wind.",
        "A lone wolf howled at the full moon, its cry echoing across the valley.",
        "She carefully arranged the vibrant flowers in the antique vase.",
        "The scent of freshly baked bread filled the cozy kitchen.",
        "Tiny droplets of dew glistened on the spiderweb.",
        "He hummed a cheerful tune as he walked down the bustling street.",
        "The ancient manuscript held secrets waiting to be discovered.",
        "Colorful hot air balloons drifted lazily across the morning sky.",
        "The quiet library was a sanctuary for avid readers.",
        "A mischievous squirrel chased its tail around the oak tree.",
        "The sound of gentle waves lapped against the sandy shore.",
        "She painted a vivid landscape, capturing every detail of the sunset.",
        "The old clock chimed precisely on the hour, every hour.",
        "A sudden downpour turned the dusty road into a muddy path.",
        "He sipped his hot tea, enjoying the peaceful solitude."
    ];

    const [searchTerm, setSearchTerm] = useState("");

    function handleSearchChange(e) {
        setSearchTerm(e.target.value);
    }

    const filteredSentences = allSentences.filter(sentence =>
        sentence.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='searchApp'>
            <h1>Search Bar</h1>
            <MyInput onChange={handleSearchChange} />
            <div className='output'>
                <h2>Output</h2>
                {searchTerm === "" ? (
                    <DisplaySentences sentences={allSentences} />
                ) : (
                    <DisplaySentences sentences={filteredSentences} />
                )}
            </div>
        </div>
    );
}