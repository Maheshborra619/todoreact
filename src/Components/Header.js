import PropTypes from "prop-types";
import Button from "./Button"

const header = ({title})=>{
    const onClick=(e)=>{
        console.log(e);
    }
    return(
        <header className="header">
            <h1>{title}</h1>
            <Button onClick={onClick} color="red" text="buttontext"/>
        </header>
    )
}
//css in js
// const headerStyle = {color:"red",backgroundColor:"black"}

header.defaultProps = {
    title : "23"
}

header.propTypes = {
    title : PropTypes.string.isRequired
}

export default header