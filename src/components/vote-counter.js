import {connect} from 'react-redux'
import { increment , decrement, reset} from '../store/votes'

const votesCounter =props => {
    return (
        <section>
            <ul>
                {props.counter.candidates.map(candidate =>
                    <li onClick={() => props.increment(candidate.name)} onDoubleClick={() => props.decrement(candidate.name)} key={candidate.name}>{candidate.name} : {candidate.votes}</li>)}
            </ul>
            <button onClick={props.reset}>Reset</button>
        </section>
    );
}

const mapStateToProps = state => ({
    counter: state.counter
})

const mapDispatchToProps = {increment , decrement, reset}

export default connect(mapStateToProps,mapDispatchToProps)(votesCounter)


