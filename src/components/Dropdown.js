import React, { useState, useEffect, useRef } from 'react';
import '../styles/Dropdown.css';

const Dropdown = ({title, options, multiSelect, width, placeHolder}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    // Reference to the dropdown container
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelection = (option) => {
        if (!multiSelect) {
            setSelectedOptions(option === "None" ? [] : [option]);
        } else {
            const index = selectedOptions.indexOf(option);
            const newSelectedOptions = [...selectedOptions];
            if (index > -1) {
                // Remove option if already selected
                newSelectedOptions.splice(index, 1);
            } else {
                // Add option if not selected
                newSelectedOptions.push(option);
            }
            setSelectedOptions(newSelectedOptions);
        }
    };

    const isSelected = (option) => selectedOptions.includes(option);

    // Only for multiple selected options
    const handleSelectAll = () => {
        if (selectedOptions.length < options.length) {
            setSelectedOptions(options);
        } else {
            setSelectedOptions([]);
        }
    };

    // This closes the dropdown when you click outside of the container.
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        // Clean up the event listener to prevent memory leaks
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]); // Only re-run if isOpen changes

    const dropdownStyle = {
        width: width
    };

    return (
        <div className="dropdown" data-title={title} ref={dropdownRef}>
            <button onClick={toggleDropdown} className={`drop-btn ${isOpen ? 'open' : ''}`} style={dropdownStyle}>
                {selectedOptions.length > 0 ? selectedOptions.join(", ") : placeHolder}
            </button>
            {isOpen && (
                <div className="dropdown-content" style={dropdownStyle}>
                {/* Add Deselect/Select All button only for multiSelect */}
                {multiSelect && (
                        <button onClick={handleSelectAll} className="select-all-btn">
                            {selectedOptions.length === options.length ? "Deselect All" : "Select All"}
                        </button>
                    )}
                    <div className="options-wrapper">
                        {/* I notice there is None option for single selection dropdown example */}
                        {!multiSelect && (
                            <div
                                className={`option-item ${selectedOptions.length === 0 ? 'selected' : ''} none-option`}
                                onClick={() => handleSelection("None")}>
                                None
                            </div>
                        )}
                        {options.map(option => (
                            <div key={option}
                                 className={`option-item ${isSelected(option) ? 'selected' : ''}`}
                                 onClick={() => handleSelection(option)}>
                                {multiSelect && <input type="checkbox" checked={isSelected(option)} readOnly/>}
                                <span>{option}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dropdown;

