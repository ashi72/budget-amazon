const LabelledInput = ({ type, label, value, onChange }) => {
    return (
        <div className='labelled-input'>
            <label className={value && 'filled'} htmlFor={`text-${label}`}>{label}</label>
            <input
                type={type}
                id={`text-${label}`}
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default LabelledInput