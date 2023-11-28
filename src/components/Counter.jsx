import PropTypes from "prop-types";
import {useState} from "react";

const Counter = (props) =>{

        return(
            <div>
                <h1> counter:{props.counter}</h1>
                <p> my counter is :</p>
                <p>note:{props.children}</p>
                <br />
                <button onClick={props.inc}>sum</button>
                <br />
                <button onClick={props.dec}>-</button>
                <br />
                <button onClick={props.reset}> reset</button>
                <br />

            </div>
        )

}
Counter.defaultProps={
    counter : 125
}

Counter.propTypes={
        counter: PropTypes.number,
        inc :PropTypes.func,
        dec :PropTypes.func,
        reset :PropTypes.func

}
export default Counter;