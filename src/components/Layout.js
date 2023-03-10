import { Component } from "react";

const styles = {
    layout:{
        backgroudColor: '#fff',
        color: '#0A283E',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    container:{
        width:'1200px'
    }
}

class Layout extends Component{
    render(){
        return(
            <div style={styles.layout}>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout;