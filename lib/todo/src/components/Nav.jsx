import {useState} from 'react'

export default function Nav(props){
    const {onSubmit} = props
    const [input, setInput]=useState("")

    function handleChange(e){
        setInput(e.target.value)
    }
    function handleSubmit (e){
        e.preventDefault()
        onSubmit(input)
        setInput("")
    }
    return (
        <div className="nav-form">
            <h1>To Do:</h1>
            <form onSubmit={handleSubmit} >
                <input className="text-input" value={input} type="text" onChange={handleChange} required placeholder="Enter your todo"/>
                <input className="submit-input" type="submit" value="save" />
            </form>
        </div>
    )
}