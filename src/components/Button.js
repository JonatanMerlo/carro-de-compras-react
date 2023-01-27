import { Component } from "react";

const styles = {
    producto: {
        backgroundColor: '#0A283E',
        color: '#fff',
        padding: '15px 20px',
        border: 'noone',
        borderRadius: '5px',
        cursor: 'pointer'

    }
}

class Button extends Component {
    render(){
        return(
            <button style={styles.producto} {...this.props}/>
        )
    }
}

export default Button;