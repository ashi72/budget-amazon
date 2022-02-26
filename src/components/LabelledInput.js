const LabelledInput = ({ label, value, onChange }) => {
    return (
        <div>
            <label htmlFor={`text-${label}`}>{label}: </label>
            <input
                id={`text-${label}`}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default LabelledInput