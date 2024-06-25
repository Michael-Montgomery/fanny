import './openindicator.css';

function OpenIndicator(props) {
    return(
        <div id='open-indicator-wrapper' className={props.openNow ? 'open-now' : 'closed-now'}>
            <p>{props.openNow ? 'Open' : 'Closed'}</p>
            {/* <div className={props.openNow ? 'open-now' : 'closed-now'}></div> */}
        </div>
    )
}

export default OpenIndicator;