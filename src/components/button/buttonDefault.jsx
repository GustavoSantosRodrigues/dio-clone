export default function ButtonDefault({ title, className, type = "submit", onClick }) {
    return (
        <button type={type} className={className} onClick={onClick}>
            {title}
        </button>
    )
}