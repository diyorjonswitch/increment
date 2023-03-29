import { useGlobalContext } from '../context';
const Navbar = () => {

    const {count, setCount} = useGlobalContext()

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>inc</button>
            <p>{count}</p>
            <button onClick={count > 0 ? () => setCount(count - 1) : count == 0}>dec</button>
        </div>
    );
}

export default Navbar
