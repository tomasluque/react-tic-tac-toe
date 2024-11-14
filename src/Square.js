export default function Square({ value, onSquareClick, highlight }) {
    let className = "square";
    if (highlight) {
        className += " highlight";
    }

    return (
        <button className={className} onClick={onSquareClick}>
            {value}
        </button>
    );
}
